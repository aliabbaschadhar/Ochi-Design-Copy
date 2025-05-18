import React, { useState, useEffect } from 'react'

function EyeBall({ eyeText }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    // Store the current window size in state
    // This is used to calculate the sensitivity of the eye movement
    // based on the screen size
    const [windowSize, setWindowSize] = useState({
        // If we are on the client side, use the current window size
        width: typeof window !== 'undefined' ? window.innerWidth : 0, // IN SSR we don't have window object so we set it to 0
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });

    // Track window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Track mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Calculate eye rotation with sensitivity adjustment for screen size
    const calculateEyeRotation = (eyeRef) => {
        if (!eyeRef.current) return { x: 0, y: 0 };

        const eye = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = eye.left + eye.width / 2;
        const eyeCenterY = eye.top + eye.height / 2;

        // Adjust sensitivity based on screen size
        const sensitivityFactor = Math.max(0.5, Math.min(1, windowSize.width / 1440));

        // Calculate angle and distance
        const angle = Math.atan2(mousePosition.y - eyeCenterY, mousePosition.x - eyeCenterX);
        const distance = Math.min(
            eye.width / 4,
            Math.hypot(mousePosition.x - eyeCenterX, mousePosition.y - eyeCenterY) / (10 / sensitivityFactor)
        );

        return {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance
        };
    };

    const eyeContainerRef = React.useRef(null);
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateEyePosition = () => {
            const position = calculateEyeRotation(eyeContainerRef);
            setEyePosition(position);
        };

        updateEyePosition();
        window.addEventListener('mousemove', updateEyePosition);

        return () => {
            window.removeEventListener('mousemove', updateEyePosition);
        };
    }, [mousePosition, windowSize]);

    // Calculate dot size based on eyeball size
    const getDotSize = () => {
        if (windowSize.width < 480) return 'w-3 h-3';
        if (windowSize.width < 640) return 'w-4 h-4';
        if (windowSize.width < 1024) return 'w-5 h-5';
        return 'w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8';
    };

    return (
        <div
            className='w-[22vw] h-[22vw] sm:w-[20vw] sm:h-[20vw] md:w-[18vw] md:h-[18vw] lg:w-[16vw] lg:h-[16vw] xl:w-[14vw] xl:h-[14vw] flex items-center justify-center rounded-full bg-white'
            ref={eyeContainerRef}
        >
            <div
                className='w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center relative'
                style={{
                    transform: `translate(${eyePosition.x / 2}px, ${eyePosition.y / 2}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            >
                {/* Play text scales with viewport */}
                <div className='text-white text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-neue absolute z-10 uppercase'>
                    {eyeText}
                </div>

                {/* White dot scales with viewport */}
                <div
                    className={`${getDotSize()} rounded-full bg-white absolute`}
                    style={{
                        transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                ></div>
            </div>
        </div>
    )
}

export default EyeBall;