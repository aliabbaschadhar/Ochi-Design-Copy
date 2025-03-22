import React from 'react'
import { motion } from 'framer-motion'

function Card({ cardName, cardImg, links, position, animationControls }) {
    return (
        <section className='w-full uppercase'>
            <div className='w-full flex items-center justify-start gap-2 font-neue ml-2 md:ml-3'>
                <span className='w-2 h-2 md:w-[.6vw] md:h-[.6vw] rounded-full bg-black'></span>
                <h1 className='text-sm sm:text-base md:text-[1.1vw]'>{cardName}</h1>
            </div>
            <motion.div
                className='cursor-pointer w-full mt-2 sm:mt-3 md:mt-4 h-[60vw] sm:h-[50vw] md:h-[36vw] relative my-8 sm:my-12 md:my-16 lg:my-20'
                onHoverStart={() => animationControls.start({ y: "0" })}
                onHoverEnd={() => animationControls.start({ y: "100%" })}
            >
                <div className={`w-fit overflow-hidden text-[8vw] sm:text-[6vw] md:text-[8vw] text-[#cdea68] font-founders absolute top-[40%] md:top-1/2 transform -translate-y-1/2 z-10 text-nowrap 
                ${position === 'left'
                        ? 'left-1/2 -translate-x-1/2 md:left-full md:-translate-x-1/2'
                        : 'left-1/2 -translate-x-1/2 md:right-full md:translate-x-1/2 md:left-auto'}`}>
                    {cardName.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ y: "100%" }}
                            animate={animationControls}
                            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                            className="inline-block"
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </div>

                {/* Removing the static mobile label since we're using animation on all devices now */}

                <img
                    src={cardImg}
                    alt={cardName}
                    className='rounded-xl object-cover mb-3 md:mb-4 hover:scale-[0.95] transition-all duration-700 w-full h-[50vw] sm:h-[40vw] md:h-auto'
                />
                <div className='flex flex-wrap items-center justify-start gap-2 sm:gap-3 md:gap-4 font-neue'>
                    {links.map((link, index) => (
                        <div
                            key={index}
                            className='text-xs sm:text-sm md:text-[1vw] px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full border-black border-2 hover:bg-black hover:text-white cursor-pointer transition-all duration-700'
                        >{link}</div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Card;