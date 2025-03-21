import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { OchiSvg } from "../assets/Images/images"

function Navbar() {
    const [hidden, setHidden] = useState(false)
    const { scrollY } = useScroll() // This hook is used to get the scrollY value and check the progress of the scroll

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() // To get the previous value of the scrollY
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <motion.nav
            className='w-full px-20 py-8 flex items-center justify-between font-neue fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md'
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            // Variants are used here like if hidden is true then apply the animation of hidden: {y: "-100%"} else visible: { y: 0} in variants object
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <div className='w-[72px] h-[30px] cursor-pointer'>
                <OchiSvg className="hover:scale-110 transition-transform duration-300" />
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
        </motion.nav>
    )
}

export default Navbar