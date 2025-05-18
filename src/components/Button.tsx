import React, { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6';

function Button({ text, styles, onMouseEnter, onMouseLeave }) {
    // Internal state to control button's own hover effects
    const [isHovering, setIsHovering] = useState(false);

    // When button is hovered:
    // 1. Update local state for button animation
    // 2. Execute any parent component hover handler (used for image scaling in About)
    const handleMouseOver = () => {
        setIsHovering(true);
        if (onMouseEnter) onMouseEnter();
    };

    // When button hover ends:
    // 1. Reset local state for button animation
    // 2. Execute any parent component hover end handler
    const handleMouseOut = () => {
        setIsHovering(false);
        if (onMouseLeave) onMouseLeave();
    };

    return (
        <div>
            <button
                className={` flex items-center justify-evenly pl-[2vw] px-[0.7vw] py-[0.4vw] sm:text-sm md:text-base lg:text-lg font-neue rounded-full bg-zinc-800 hover:bg-zinc-900 text-white gap-4 mb-4 uppercase ${styles}`}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <h4>{text}</h4>
                <div className='w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-evenly'>
                    {
                        isHovering ? (
                            // When button is hovered, show arrow icon
                            <div className='w-full h-full bg-zinc-100 rounded-full transition-all text-black flex items-center justify-center'>
                                <span className='rotate-45'>
                                    <FaArrowUp />
                                </span>
                            </div>
                        ) : (
                            // When button is not hovered, show small dot
                            <div className='w-3 h-3 bg-zinc-100 rounded-full transition-all'></div>
                        )
                    }
                </div>
            </button>
        </div>
    )
}

export default Button;