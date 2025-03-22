import React from 'react'
import { Eyesbg } from '../assets/Images/images'
import { EyeBall } from './'

function Eyes() {
    return (
        <section className='eyes w-full h-screen overflow-hidden'>
            <div
                data-scroll
                data-scroll-speed='-.7'
                className='cursor-pointer relative w-full h-full bg-cover bg-center'
                style={{ backgroundImage: `url(${Eyesbg})` }}
                aria-label="Top view of a desk with design materials">
                <div className='absolute flex items-center justify-center 
                    gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4'>
                    <EyeBall eyeText="Play" />
                    <EyeBall eyeText="Play" />
                </div>
            </div>
        </section>
    )
}

export default Eyes;