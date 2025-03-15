import React from 'react'
import { OchiSvg } from "../assets/Images/images"

function Navbar() {
    return (
        <nav className='w-full px-20 py-8 flex items-center justify-between font-neue fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md'>
            <div className='text-2xl font-bold cursor-pointer'>
                <OchiSvg />
            </div>
            <div className='flex items-center'>
                {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
                    <div
                        key={index}
                    >
                        <a
                            className={`text-lg font-neue capitalize px-4 py-2 hover:cursor-pointer relative group ${index === 4 ? "ml-32" : "mr-2"}`}
                        >
                            {item}
                            <span className={`absolute h-[2px] bg-black left-0 right-0 bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></span>
                        </a>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;