import React from 'react'
import { FLogo1, FLogo2, FLogo3 } from "./../assets/Images/images"

function BeforeFooter() {
    return (
        <section className='w-full min-h-screen py-16 px-5 sm:px-8 md:px-10'>
            <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-5 h-full'>
                {/* First card - full width on md, 1/2 on lg */}
                <div className='w-full lg:w-1/2 h-[40vh] lg:h-[60vh] mb-5 lg:mb-0'>
                    <div className='card w-full h-full bg-[#004d43] rounded-xl flex items-center justify-center p-6 transition-all hover:scale-[0.98]'>
                        <img src={FLogo1} alt="Logo 1" className='w-auto max-h-[60%] object-contain' />
                    </div>
                </div>

                {/* Container for second and third cards */}
                <div className='w-full lg:w-1/2 flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5 h-auto md:h-[40vh] lg:h-[60vh]'>
                    {/* Second card */}
                    <div className='w-full md:w-1/2 h-[40vh] md:h-full mb-5 md:mb-0'>
                        <div className='card w-full h-full bg-[#1a2d2b] rounded-xl flex justify-center items-center p-6 transition-all hover:scale-[0.98]'>
                            <img src={FLogo2} alt="Logo 2" className='w-auto max-h-[60%] object-contain' />
                        </div>
                    </div>

                    {/* Third card */}
                    <div className='w-full md:w-1/2 h-[40vh] md:h-full'>
                        <div className='card w-full h-full bg-[#172624] rounded-xl flex items-center justify-center p-6 transition-all hover:scale-[0.98]'>
                            <img src={FLogo3} alt="Logo 3" className='w-auto max-h-[60%] object-contain' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BeforeFooter