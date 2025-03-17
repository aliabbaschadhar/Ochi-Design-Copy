import React from 'react'

function Marquee() {
    return (
        <div
            className='w-full h-[68vh] bg-[#004d43] rounded-t-3xl py-20 pb-4'
        >
            <div className='border-y-2 border-zinc-300 flex whitespace-nowrap overflow-hidden py-3'>
                {['We are ochi', 'We are ochi', 'We are Ochi', 'We are ochi', 'We are ochi', 'We are ochi'].map((text, index) => (
                    <h1
                        key={index}
                        className='text-[20vw] leading-none font-founders uppercase mb-[1vw] pr-[2vw] text-white'
                    >
                        {text}
                    </h1>
                ))}
            </div>
        </div>
    )
}

export default Marquee;