import React from 'react'
import { motion } from 'framer-motion';

function Marquee() {
    return (
        <div
            className='w-full h-[68vh] bg-[#004d43] rounded-t-3xl py-20 pb-4'
        >
            <div className='border-y-2 border-zinc-300 flex whitespace-nowrap overflow-hidden py-3'>
                {['We are ochi', 'We are ochi', 'We are Ochi', 'We are ochi', 'We are ochi', 'We are ochi'].map((text, index) => (
                    <motion.h1
                        key={index}
                        className='text-[20vw] leading-none font-founders uppercase mb-[1vw] pr-[2vw] text-white'
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                    >
                        {text}
                    </motion.h1>
                ))}
            </div>
        </div>
    )
}

export default Marquee;