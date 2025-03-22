import React from 'react'
import { Button, EyeBall } from "./"

function StartProject() {
    return (
        <section className='w-full bg-[#cdea68] px-6 py-16 sm:p-14 md:p-20 lg:p-24 xl:p-[10vw] 2xl:p-[18vw] rounded-t-xl'>
            <div className='w-full flex flex-col items-center justify-center relative'>
                {["Ready to", "Start the", "Project ?"]
                    .map((item, index) => (
                        <h1
                            key={index}
                            className='text-8xl sm:text-9xl md:text-8xl lg:text-[10vw] xl:text-[14vw] 2xl:text-[18vw] font-founders leading-[0.85] sm:leading-[0.9] md:leading-none -mb-2 sm:-mb-4 md:-mb-8 lg:-mb-12 xl:-mb-16 uppercase'>
                            {item}
                        </h1>
                    ))
                }
                <div className='absolute flex gap-4 sm:gap-6 md:gap-10 lg:gap-16 xl:gap-[3vw] mt-10 sm:mt-20 md:mt-32 lg:mt-48 xl:mt-60'>
                    <EyeBall eyeText="start" />
                    <EyeBall eyeText="start" />
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center mt-24 sm:mt-32 md:mt-40 lg:mt-52 xl:mt-[15vw] gap-2'>
                <Button
                    text="Let's start the project"
                    styles='text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 bg-zinc-900 hover:bg-zinc-800 hover:scale-105 transform transition-all duration-400 mb-0'
                />

                <h1 className='font-neue text-sm sm:text-base md:text-lg my-2'>OR</h1>

                <Button
                    text="hello@ochi.design"
                    styles='text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 border-2 border-zinc-900 bg-transparent hover:bg-zinc-900 hover:text-white hover:scale-105 transform transition-all duration-400 lowercase mb-0'
                />
            </div>
        </section>
    )
}

export default StartProject;