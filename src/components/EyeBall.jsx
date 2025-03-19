import React, { useState, useEffect } from 'react'

function EyeBall() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Track mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Calculate eye rotation
    const calculateEyeRotation = (eyeRef) => {
        if (!eyeRef.current) return { x: 0, y: 0 };

        const eye = eyeRef.current.getBoundingClientRect();
        // getBoundingClientRect() returns the size of an element and its exact position relative to the viewport by fiding the distance from the top, left, right, and bottom of the viewport to the element.

        const eyeCenterX = eye.left + eye.width / 2; // We able to access .left, .width, .top, .height properties of the eye element due to getBoundingClientRect() method
        const eyeCenterY = eye.top + eye.height / 2;

        // Calculate angle and distance
        const angle = Math.atan2(mousePosition.y - eyeCenterY, mousePosition.x - eyeCenterX);
        const distance = Math.min(
            eye.width / 4,
            Math.hypot(mousePosition.x - eyeCenterX, mousePosition.y - eyeCenterY) / 10
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
    }, [mousePosition]);

    return (
        <div
            className='cursor-pointer w-[14vw] h-[14vw] flex items-center justify-center rounded-full bg-white'
            ref={eyeContainerRef}
        >
            <div
                className='w-2/3 h-2/3 rounded-full bg-zinc-900'
                style={{
                    transform: `translate(${eyePosition.x / 2}px, ${eyePosition.y / 2}px)`,
                    position: 'relative',
                    transition: 'transform 0.1s ease-out'
                }}
            >
                <div
                    className="absolute"
                    style={{
                        width: '40px',
                        height: '40px',
                        top: '50%',
                        left: '50%',
                        transform: `translate(calc(-50% + ${eyePosition.x}px), calc(-50% + ${eyePosition.y}px))`,
                        transition: 'transform 0.1s ease-out'
                    }}
                >
                    <div className='text-white text-2xl font-neue'>Play</div>
                    <div className='w-10 h-10 rounded-full bg-white'></div>
                </div>
            </div>
        </div>
    )
}

export default EyeBall;