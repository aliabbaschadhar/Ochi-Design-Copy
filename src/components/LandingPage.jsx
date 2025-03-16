import React from 'react'
import { contentImage } from "../assets/Images/images"
import Button from './Button'

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
                    ["For public and private companies", "From the first pitch to IPO", <Button />]
                        .map((item, index) => (
                            <div
                                key={index}
                                className='textStructure font-neue'
                            >
                                {item}
                            </div>
                        ))
                }
            </div>
        </main >
    )
}

export default LandingPage