import React from 'react'
import { contentImage } from "../assets/Images/images"
import { FaArrowUpLong } from 'react-icons/fa6';

function LandingPage() {
    return (
        <main className='w-full h-screen pt-1'>
            <div className='textStructure mt-40 px-20'>
                {
                    ["We create", "Eye-Opening", "Presentations"]
                        .map((item, index) => (
                            <div
                                key={index}
                            >
                                <div
                                    className='w-fit flex items-end overflow-hidden'
                                >
                                    {index === 1 && (
                                        <div
                                            className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] overflow-hidden flex items-center justify-center self-center'
                                        >
                                            <img src={contentImage} alt="content" className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                    <h1
                                        className='uppercase text-[7.5vw] leading-[6.5vw] tracking-tight font-founders'
                                    >
                                        {item}
                                    </h1>
                                </div>
                            </div>
                        ))
                }
            </div>
            <div
                className='border-t-2 border-zinc-800 w-full mt-20 flex items-center justify-between px-20 py-[0.5vw]'
            >
                {
                    ["For public and private companies", "From the first pitch to IPO"]
                        .map((item, index) => (
                            <div
                                key={index}
                                className='textStructure font-neue'
                            >
                                {item}
                            </div>
                        ))
                }
                <div
                    className='start flex items-center gap-4 group cursor-pointer'
                >
                    <div
                        className='px-4 py-2 border-2 border-zinc-800 rounded-full uppercase font-neue text-sm group-hover:text-white group-hover:bg-zinc-800 transition-colors duration-300'
                    >
                        Start the project
                    </div>
                    <div
                        className='w-10 h-10 rounded-full border-2 border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 group-hover:text-white transition-colors duration-300'
                    >
                        <span
                            className='rotate-45'
                        >
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default LandingPage;