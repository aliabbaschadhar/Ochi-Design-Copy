import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Marquee() {
    const [animationDuration, setAnimationDuration] = useState(15);

    useEffect(() => {
        // Function to update animation duration based on screen width
        const updateDuration = () => {
            if (window.innerWidth < 768) {
                setAnimationDuration(15); // Mobile
            } else if (window.innerWidth < 1024) {
                setAnimationDuration(12); // Tablet
            } else {
                setAnimationDuration(25); // Desktop
            }
        };

        // Set initial duration
        updateDuration();

        // Add resize listener
        window.addEventListener('resize', updateDuration);

        // Clean up
        return () => window.removeEventListener('resize', updateDuration);
    }, []);
    const marqueeText = [
        "We are ochi",
        "We are ochi",
        "We are ochi",
        "We are ochi",
        "We are ochi",
        "We are ochi",
        "We are ochi",
    ];

    return (
        <div className='w-full h-[26vh] md:h-[38vh] lg:h-[70vh]  bg-[#004d43] lg:rounded-t-3xl py-8 pb-2'>
            <div className='border-y-2 border-zinc-300 overflow-hidden py-2 relative'>
                <div className='flex whitespace-nowrap gap-2'>
                    {/* First set of text */}
                    {marqueeText.map((text, index) => (
                        <motion.h1
                            key={`first-${index}`}
                            className='text-[20vw] md:text-[16vw] lg:text-[23vw] leading-none font-founders uppercase pr-[2vw] text-white inline-block'
                            initial={{ x: "0%" }}
                            animate={{ x: "-100%" }}
                            transition={{
                                repeat: Infinity,
                                duration: animationDuration,
                                ease: 'linear',
                                repeatType: "loop"
                            }}
                        >
                            {text}
                        </motion.h1>
                    ))}

                    {/* Second set for seamless loop */}
                    {/* {marqueeText.map((text, index) => (
                        <motion.h1
                            key={`second-${index}`}
                            className='text-[20vw] md:text-[23vw] lg:text-[12vw] leading-none font-founders uppercase pr-[1vw] text-white inline-block'
                            initial={{ x: "0%" }}
                            animate={{ x: "-100%" }}
                            transition={{
                                repeat: Infinity,
                                duration: animationDuration,
                                ease: 'linear',
                                repeatType: "loop"
                            }}
                        >
                            {text}
                        </motion.h1>
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export default Marquee;
