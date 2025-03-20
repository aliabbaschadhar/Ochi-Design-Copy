import React from 'react'
import { Button, EyeBall } from "./"

function StartProject() {
    return (
        <section className='w-full bg-[#cdea68] p-[20vw]' >
            <div className='w-full flex flex-col items-center justify-center relative'>
                {["Ready to", "Start the", "Project ?"]
                    .map((item, index) => (
                        <h1
                            key={index}
                            className='text-[18vw] font-founders leading-none -mb-16 uppercase text-nowrap'>
                            {item}
                        </h1>
                    ))
                }
                <div className='absolute flex gap-[3vw]'>
                    <EyeBall eyeText="start" />
                    <EyeBall eyeText="start" />
                </div>
            </div>
            <div className='w-full flex justify-center mt-[15vw]'>
                <Button
                    text="Let's start the project"
                    styles='text-[2.5vw] font-bold tracking-tight px-[1.5vw] py-[1vw] hover:scale-105 transform transition-all duration-400'
                />
            </div>
        </section>
    )
}

export default StartProject;