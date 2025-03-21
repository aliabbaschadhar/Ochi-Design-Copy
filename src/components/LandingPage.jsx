import React from 'react'
import { contentImage } from "../assets/Images/images"
import { FaArrowUpLong } from 'react-icons/fa6';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function LandingPage() {
    return (
        <main className='w-full h-screen overflow-hidden'>
            <div className='textStructure my-16 md:mt-40 px-4 md:px-10'>
                {
                    ["We create", "Eye-Opening", "Presentations"]
                        .map((item, index) => (
                            <div key={index}>
                                <div className='w-fit flex items-center justify-center overflow-hidden'>
                                    {index === 1 && (
                                        <motion.div
                                            className='mr-[1vw] w-[15vw] md:w-[8vw] rounded-md h-[11vw] md:h-[5.7vw] overflow-hidden flex items-center justify-center self-center'
                                            initial={{ width: 0 }}
                                            animate={{ width: "15vw", "@media (min-width: 780px)": { width: "8vw" } }}
                                            transition={{ ease: [0.85, 0, 0.15, 1], duration: 1.2, delay: 0.5 }}
                                        >
                                            <img src={contentImage} alt="content" className="w-full h-full object-cover" />
                                        </motion.div>
                                    )}
                                    <h1 className='uppercase text-[12vw] md:text-[8vw] leading-[10vw] md:leading-[6.5vw] tracking-tight font-founders flex items-center'>
                                        {item}
                                    </h1>
                                </div>
                            </div>
                        ))
                }
            </div>
            <div className='border-t-2 border-zinc-800 w-full mt-auto md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-10 py-3 md:py-[0.5vw] gap-3 md:gap-0 absolute bottom-0 left-0'>
                {
                    ["For public and private companies", "From the first pitch to IPO"]
                        .map((item, index) => (
                            <div
                                key={index}
                                className='textStructure font-neue text-sm md:text-base pl-0'
                            >
                                {item}
                            </div>
                        ))
                }
                <div className='start flex items-center gap-3 md:gap-4 group cursor-pointer'>
                    <div className='px-3 md:px-4 py-1.5 md:py-2 border-2 border-zinc-800 rounded-full uppercase font-neue text-xs md:text-sm group-hover:text-white group-hover:bg-zinc-800 transition-colors duration-300'>
                        Start the project
                    </div>
                    <div className='w-7 h-7 md:w-10 md:h-10 rounded-full border-2 border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 group-hover:text-white transition-colors duration-300'>
                        <span className='rotate-45'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LandingPage;