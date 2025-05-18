import React, { useState } from 'react'
import { Button } from "./"
import { FounderImage } from '../assets/Images/images'

function About() {
    // State to track button hover - controls image scaling
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    // When button is hovered, set state to true to trigger image scale down
    const handleButtonMouseEnter = () => setIsButtonHovered(true);

    // When button hover ends, set state to false to return image to original size
    const handleButtonMouseLeave = () => setIsButtonHovered(false);

    return (
        <section className='w-full bg-[#cdea68] lg:rounded-t-3xl z-50'>
            <h1 className='w-full p-5 sm:p-10 md:p-20 text-left text-2xl sm:text-3xl md:text-4xl lg:text-[5vw] font-neue leading-tight md:leading-none'>
                Ochi is a strategic partner for fast-growing tech businesses that need to
                <u>raise funds, sell products, explain complex ideas,</u> and <u>hire great people</u>
            </h1>

            <div className='w-full flex flex-col md:flex-row items-start justify-between border-t-[2px] border-[#909c9a] mt-10 md:mt-20 pt-5 md:pt-10 px-5 md:px-10 font-neue text-zinc-800 pb-10 md:pb-[15vh]'>
                <h4 className='w-full md:w-[40%] lg:w-[30%] text-xl sm:text-2xl lg:text-[1.5vw] mb-5 md:mb-0'>What you can expect:</h4>
                <div className='w-full md:w-[60%] lg:w-[70%] text-base sm:text-lg lg:text-[1.5vw] flex flex-col md:flex-row justify-between'>
                    <div className='w-full md:w-1/2 pr-0 md:pr-4 flex flex-col gap-4 md:gap-8 leading-normal mb-5 md:mb-0'>
                        <p>We partner with the companies and startups who make the world go round - they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-stared resturants.</p>
                        <p>We believe in the mix of strategy and design (with a bit of a coffee) is what makes you message clear, convicing, and captivating.</p>
                    </div>
                    <div className='text-base sm:text-lg lg:text-[1.5vw] font-neue flex flex-col items-start justify-end gap-4 leading-normal'>
                        <h5>S:</h5>
                        <ul className='flex flex-col gap-1'>
                            {['Instagram', 'Behance', 'Facebook', 'LinkedIn'].map((item, index) => (
                                <li key={index} className='group relative cursor-pointer'>
                                    <span>{item}</span>
                                    <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-zinc-800 transition-all duration-300 group-hover:w-full'></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row items-start border-t-[1px] border-[#889593] mt-10 md:mt-20 pt-5 md:pt-10 pb-10 md:pb-20 px-5 md:px-10 group'>
                <div className='w-full md:w-1/2 font-neue mb-5 md:mb-0'>
                    <h1 className='text-2xl sm:text-3xl md:text-[4vw] mb-4'>Our Approach</h1>
                    {/* Button component with hover handlers that affect the image */}
                    <Button
                        text='Read More'
                        styles=""
                        onMouseEnter={handleButtonMouseEnter}
                        onMouseLeave={handleButtonMouseLeave}
                    />
                </div>
                <div className='w-full md:w-1/2'>
                    {/* Image scales down to 95% when button is hovered */}
                    <img
                        className={`w-full rounded-2xl transition-transform duration-300 ${isButtonHovered ? 'scale-95' : 'scale-100'}`}
                        src={FounderImage}
                        alt="foundersImage"
                    />
                </div>
            </div>
        </section>
    )
}

export default About