import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { OchiSvg } from "../assets/Images/images"

function Navbar() {
    const [hidden, setHidden] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll() // This hook is used to get the scrollY value and check the progress of the scroll

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() // To get the previous value of the scrollY
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    const menuItems = ["Services", "Our Work", "About Us", "Insights", "Contact"]

    // Animation variants for staggered menu items
    const menuVariants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: { y: { stiffness: 1000, velocity: -100 } }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: { y: { stiffness: 1000 } }
        }
    };

    return (
        <motion.nav
            className='w-full px-3 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8 flex items-center justify-between font-neue fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md'
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            // Variants are used here like if hidden is true then apply the animation of hidden: {y: "-100%"} else visible: { y: 0} in variants object
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <div className='w-[50px] h-[21px] sm:w-[60px] sm:h-[25px] md:w-[72px] md:h-[30px] cursor-pointer'>
                <OchiSvg className="hover:scale-110 transition-transform duration-300 w-full h-full" />
            </div>

            {/* Desktop Menu */}
            <div className='hidden lg:flex items-center'>
                {menuItems.map((item, index) => (
                    <div key={index}>
                        <a className={`text-lg font-neue capitalize px-4 py-2 hover:cursor-pointer relative group ${index === 4 ? "ml-32" : "mr-2"}`}>
                            {item}
                            <span className={`absolute h-[2px] bg-black left-0 right-0 bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></span>
                        </a>
                    </div>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className='lg:hidden p-1 sm:p-2 relative z-[100]'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <div className={`w-6 sm:w-7 h-[2px] bg-${mobileMenuOpen ? 'white' : 'black'} transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[6px] sm:translate-y-[7px]' : ''}`}></div>
                <div className={`w-6 sm:w-7 h-[2px] bg-${mobileMenuOpen ? 'white' : 'black'} my-[5px] sm:my-[6px] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 sm:w-7 h-[2px] bg-${mobileMenuOpen ? 'white' : 'black'} transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px] sm:-translate-y-[7px]' : ''}`}></div>
            </button>

            {/* Mobile Menu */}
            <motion.div
                className={`lg:hidden fixed inset-0 w-full h-screen z-[99] ${mobileMenuOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: mobileMenuOpen ? 1 : 0
                }}
                transition={{ duration: 0.4 }}
                style={{ display: mobileMenuOpen ? 'block' : 'none' }}
            >
                {/* Backdrop gradient */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-800 backdrop-blur-lg"></div>

                {/* Menu content */}
                <motion.div
                    className='flex flex-col items-center justify-center h-full w-full relative z-10'
                    variants={menuVariants}
                    initial="closed"
                    animate={mobileMenuOpen ? "open" : "closed"}
                >
                    {menuItems.map((item, index) => (
                        <motion.a
                            key={index}
                            variants={itemVariants}
                            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-founders text-white capitalize py-3 sm:py-4 md:py-5 relative group overflow-hidden cursor-pointer'
                            onClick={() => setMobileMenuOpen(false)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item}
                            <motion.span
                                className='absolute h-[2px] bg-white left-0 right-0 bottom-1 sm:bottom-2'
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            ></motion.span>
                        </motion.a>
                    ))}

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full bg-gradient-to-br from-zinc-700/20 to-transparent"></div>
                    <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-4 sm:left-6 md:left-8 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full bg-gradient-to-tr from-zinc-600/20 to-transparent"></div>
                </motion.div>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar;