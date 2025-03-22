import React from 'react'
import { contentImage, Salience_Website, Vise, CS_Website, ATG, Fyde } from "../assets/Images/images"
import { FaArrowUpLong } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function LandingPage() {
    const companiesData = [
        {
            name: "Salience Labs",
            image: Salience_Website
        },
        {
            name: "Vise",
            image: Vise
        },
        {
            name: "CardBoard Ship",
            image: CS_Website
        },
        {
            name: "All Things Good",
            image: ATG
        },
        {
            name: "Fyde",
            image: Fyde
        }
    ];
    return (
        <main className='w-full pt-1 bg-white'>
            {/* First section with padding */}
            <div className='textStructure mt-20 sm:mt-28 md:mt-40 px-5 sm:px-10 md:px-20'>
                {
                    ["We create", "Eye-Opening", "Presentations"]
                        .map((item, index) => (
                            <div key={index}>
                                <div className='w-fit flex items-end overflow-hidden'>
                                    {index === 1 && (
                                        <motion.div
                                            className='mr-[2vw] sm:mr-[1.5vw] md:mr-[1vw] w-[16vw] sm:w-[12vw] md:w-[8vw] rounded-md h-[11vw] sm:h-[8vw] md:h-[5.7vw] overflow-hidden flex items-center justify-center shadow-md'
                                            initial={{ width: 0 }}
                                            animate={{ width: "16vw", "@media (min-width: 640px)": { width: "12vw" }, "@media (min-width: 768px)": { width: "8vw" } }}
                                            transition={{ ease: [0.85, 0, 0.15, 1], duration: 1.2, delay: 0.5 }}
                                        >
                                            <img src={contentImage} alt="content" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                                        </motion.div>
                                    )}
                                    <motion.h1
                                        className='uppercase text-[11vw] sm:text-[9vw] md:text-[7.5vw] leading-[10vw] sm:leading-[8vw] md:leading-[6.5vw] tracking-tight font-founders'
                                        initial={{ y: index * 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                    >
                                        {item}
                                    </motion.h1>
                                </div>
                            </div>
                        ))
                }
                <motion.p
                    className="mt-6 max-w-xl text-sm sm:text-base md:text-lg text-zinc-600 font-neue hidden sm:block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    We craft compelling visual stories for businesses that want to make an impact.
                </motion.p>
            </div>

            {/* Border section */}
            <motion.div
                className='border-t-2 border-zinc-800 w-full mt-10 sm:mt-16 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 md:px-20 py-4 sm:py-[0.5vw]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
            >
                <div className="mb-6 sm:mb-0 space-y-2 sm:space-y-0">
                    {
                        ['For public and private companies', 'From the first pitch to IPO']
                            .map((item, index) => (
                                <h4
                                    key={index}
                                    className='text-sm sm:text-[1vw] leading-normal sm:leading-[3.5vw] font-neue'
                                >
                                    {item}
                                </h4>
                            ))
                    }
                </div>
                <div className='start flex items-center gap-4 group cursor-pointer'>
                    <motion.div
                        className='px-4 py-2 border-2 border-zinc-800 rounded-full uppercase font-neue text-sm group-hover:text-white group-hover:bg-zinc-800 transition-colors duration-300'
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        Start the project
                    </motion.div>
                    <motion.div
                        className='w-10 h-10 rounded-full border-2 border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 group-hover:text-white transition-colors duration-300'
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className='rotate-45'>
                            <FaArrowUpLong />
                        </span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Client logos section - improves credibility */}
            <motion.div
                className=" lg:invisible w-full px-5 sm:px-10 md:px-20 py-10 mt-8 sm:mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
            >
                <h3 className="text-zinc-500 uppercase text-sm font-neue mb-6">Trusted by industry leaders</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                    {companiesData
                        .map((logo, i) => (
                            <div key={i} className="flex items-center justify-center group transition-all duration-300 hover:opacity-60">
                                <img
                                    src={logo.image}
                                    alt={`${logo.name} logo`}
                                    className="max-h-24 w-auto object-contain rounded-2xl transition-all duration-500 cursor-pointer hover:scale-105"
                                />
                            </div>
                        ))}
                </div>
            </motion.div>
        </main>
    )
}

export default LandingPage;