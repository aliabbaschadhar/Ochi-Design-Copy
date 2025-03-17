import React from 'react'

function About() {
    return (
        <section className='w-full bg-[#cdea68] rounded-t-3xl z-50 -translate-y-4'>
            <h1 className='w-full p-20 text-left text-[4.5vw] font-neue leading-none'>
                Ochi is a strategic partner for fast-growing tech businesses that need to
                <u>raise funds, sell products, explain complex ideas,</u> and <u>hire great people</u>
            </h1>

            <div className='w-full flex items-start justify-between border-t-[2px] border-[#909c9a] mt-20 pt-10 px-20 font-neue text-zinc-800 pb-[15vh]'>
                <h4 className='w-[50vw] text-[1.2vw]'>What you can expect:</h4>
                <div className='w-[50vw] text-[1.2vw] flex justify-between'>
                    <div className='w-1/2 flex flex-col gap-8 leading-normal'>
                        <p>We partner with the companies and startups who make the world go round - they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-stared resturants.</p>
                        <p>We believe in the mix of strategy and design (with a bit of a coffee) is what makes you message clear, convicing, and captivating.</p>
                    </div>
                    <div className='text-[1.2vw] font-neue flex flex-col items-start justify-end gap-4 leading-normal'>
                        <h5>S:</h5>
                        <ul>
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
        </section>
    )
}

export default About