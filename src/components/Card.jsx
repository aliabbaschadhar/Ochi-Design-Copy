import React from 'react'
import { motion } from 'framer-motion'

function Card({ cardName, cardImg, links, position, animationControls }) {
    return (
        <section className='w-[46vw] uppercase'>
            <div className='w-full flex items-center justify-start gap-2 font-neue ml-3'>
                <span className='w-[.6vw] h-[.6vw] rounded-full bg-black'></span>
                <h1 className='text-[1.1vw]'>{cardName}</h1>
            </div>
            <motion.div
                className='cursor-pointer w-full mt-4 h-[36vw] relative my-20'
                onHoverStart={() => animationControls.start({ y: "0" })}
                onHoverEnd={() => animationControls.start({ y: "100%" })}
            >
                <div className={`w-fit overflow-hidden text-[8vw] text-[#cdea68] font-founders absolute top-1/2 transform -translate-y-1/2 z-10 text-nowrap ${position === 'left' ? 'left-full -translate-x-1/2' : 'right-full translate-x-1/2'}`}>
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
                <img
                    src={cardImg}
                    alt={cardName}
                    className='rounded-xl object-cover mb-4 hover:scale-90 transition-all duration-700'
                />
                <div className='flex items-center justify-start gap-4 font-neue'>
                    {links.map((link, index) => (
                        <div
                            key={index}
                            className='text-[0.9vw] px-4 py-2 rounded-full border-black border-2 hover:bg-black hover:text-white cursor-pointer transition-all duration-700'
                        >{link}</div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Card