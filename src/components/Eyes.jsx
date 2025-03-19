import React from 'react'
import { Eyesbg } from '../assets/Images/images'

function Eyes() {
    return (
        <div className='w-full h-screen overflow-hidden'>
            <div className={` w-full h-full bg-cover bg-center bg-${Eyesbg}`}></div>
        </div>
    )
}

export default Eyes;