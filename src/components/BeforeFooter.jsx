
import React from 'react'
import { FLogo1, FLogo2, FLogo3 } from "./../assets/Images/images"
function BeforeFooter() {
    return (
        <section
            className='w-full h-screen flex items-center px-10 gap-5 '>
            <div className='cardcontainer w-1/2 h-[60vh] '>
                <div className='card w-full h-full bg-[#004d43] rounded-xl flex items-center justify-center'>
                    <img src={FLogo1} alt="" />
                </div>
            </div>
            <div className='cardcontainer w-1/2 h-[60vh] flex gap-5'>
                <div className='card rounded-xl w-1/2 h-full bg-[#1a2d2b] flex justify-center items-center'>
                    <img src={FLogo2} alt="" />
                </div>
                <div className='card rounded-xl w-1/2 h-full bg-[#172624] flex items-center justify-center'>
                    <img
                        className='w-1/3'
                        src={FLogo3}
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}

export default BeforeFooter