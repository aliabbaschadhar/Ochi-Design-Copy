import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { OchiSvg } from "../assets/Images/images"
import { RxHamburgerMenu } from 'react-icons/rx'

function Navbar() {
    const [hidden, setHidden] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const { scrollY } = useScroll() // This hook is used to get the scrollY value and check the progress of the scroll

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() // To get the previous value of the scrollY
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    return (
        <>
            <motion.nav
                className='w-full px-4 py-2 sm:px-6 sm:py-4 md:px-10 md:py-8 flex items-center justify-between font-neue fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md'
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" }
                }}
                // Variants are used here like if hidden is true then apply the animation of hidden: {y: "-100%"} else visible: { y: 0} in variants object
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
            >
                <div className='w-[60px] h-[24px] sm:w-[72px] sm:h-[30px] cursor-pointer'>
                    <OchiSvg className="hover:scale-110 transition-transform duration-300" />
                </div>
                {/* Desktop Menu */}
                <div className='hidden md:flex items-center'>
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
                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <RxHamburgerMenu
                        className={`w-6 h-6 cursor-pointer ${mobileMenu ? "text-zinc-100" : "text-black"}`}
                        onClick={toggleMobileMenu}
                    />
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {mobileMenu && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 text-zinc-100 bg-opacity-50 z-40 md:hidden"
                >
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            type: "tween",
                            duration: 0.4,
                            ease: [0.32, 0.72, 0, 1]
                        }}
                        className="bg-zinc-800 h-full w-[70%] float-right p-10"
                    >
                        <div className="flex flex-col mt-20">
                            {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
                                <motion.a
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1,
                                        ease: [0.32, 0.72, 0, 1]
                                    }}
                                    className="text-[8vw] font-founders uppercase hover:text-gray-600 transition-colors cursor-pointer"
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}

export default Navbar