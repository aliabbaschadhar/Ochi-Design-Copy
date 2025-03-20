import React from 'react'
import { Eyesbg } from '../assets/Images/images'
import { EyeBall } from './'

function Eyes() {
    return (
        <section className='eyes w-full h-screen overflow-hidden'>
            <div
                className='cursor-pointer relative w-full h-full bg-cover bg-center '
                style={{ backgroundImage: `url(${Eyesbg})` }}
                aria-label="Top view of a desk with design materials">
                <div className='absolute flex items-center justify-center gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <EyeBall eyeText="Play" />
                    <EyeBall eyeText="Play" />
                </div>
            </div>
        </section>
    )
}

export default Eyes; 