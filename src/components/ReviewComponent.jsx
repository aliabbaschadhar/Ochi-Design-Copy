import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function ReviewComponent({
    linkSite,
    name,
    image,
    service1,
    service2,
    review,
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            whileHover={{ backgroundColor: "whitesmoke" }}
            animate={{
                height: isExpanded ? "auto" : "55px",
                minHeight: isExpanded ? "450px" : "55px",
                maxHeight: isExpanded ? "650px" : "55px",
            }}
            className="w-full border-t border-zinc-600 p-2 pt-4 relative"
        >
            {/* Mobile button */}
            <div className="absolute right-4 top-4 md:hidden z-10">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-zinc-900 underline underline-offset-2 tracking-tight cursor-pointer text-sm font-normal"
                >
                    {isExpanded ? "CLOSE" : "READ"}
                </button>
            </div>

            <div className="flex flex-wrap justify-between ">
                {/* Link Section */}
                <motion.div
                    animate={{ height: isExpanded ? "auto" : "60px" }}
                    className="w-3/4 md:w-1/4 flex gap-2 md:gap-4 mx-2"
                >
                    {linkSite && (
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            className="text-sm md:text-base lg:text-lg underline underline-offset-4 text-zinc-900 tracking-tight"
                            href={linkSite}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {linkSite}
                        </motion.a>
                    )}
                </motion.div>

                {/* Desktop button - always visible */}
                <div className="hidden md:block md:w-[8%] text-center ">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-zinc-900 underline underline-offset-4 tracking-tight cursor-pointer text-base lg:text-lg font-normal"
                    >
                        {isExpanded ? "CLOSE" : "READ"}
                    </button>
                </div>

                {/* When expanded, show content */}
                {isExpanded && (
                    <div className="w-full flex flex-col mt-10 md:flex-row md:justify-between md:mt-8 md:gap-10 lg:justify-center">
                        {/* Services Section */}
                        <div className="w-full md:w-1/4 text-sm md:text-base lg:text-lg text-zinc-900 px-2 md:px-0 tracking-tight mb-6 md:mb-0">
                            <p className="font-normal tracking-tight text-xs md:text-sm lg:text-base">Services:</p>
                            <div className="mt-2 md:mt-4 flex flex-col gap-3">
                                <Services text={service1} />
                                <Services text={service2} />
                            </div>
                        </div>

                        {/* Review Content */}
                        <div className="w-full md:w-[45%] flex flex-col gap-3 md:gap-6 overflow-y-auto px-2">
                            <p className="text-zinc-900 text-sm md:text-base">{name}</p>
                            <div className="pb-6">
                                <img
                                    className="my-4 md:my-6 h-16 md:h-24 lg:h-28 rounded-2xl tracking-tight object-cover"
                                    src={image}
                                    alt={`${name} profile`}
                                />
                                <p className="text-zinc-900 text-xs md:text-sm lg:text-base max-w-full md:max-w-[95%]">
                                    {review}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default ReviewComponent;

export function Services({ text = "defaultTag" }) {
    return (
        <div className="arrowlink w-fit py-1">
            <a href="#" className="flex items-center gap-2 md:gap-3 group">
                <div className="uppercase text-xs md:text-sm mt-1 font-medium text-zinc-900 w-fit px-3 md:px-5 py-1 md:py-2 rounded-full border border-zinc-900 bg-white transition-all duration-300 group-hover:text-white group-hover:bg-zinc-900 text-nowrap">
                    {text}
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-white border border-zinc-900 rounded-full transition-all duration-300 group-hover:bg-zinc-900">
                    <FaArrowUpLong className="rotate-45 text-zinc-900 transition-all duration-300 group-hover:text-white" />
                </div>
            </a>
        </div>
    );
}
