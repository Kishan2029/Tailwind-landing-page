import React from 'react'
import heading from "../assets/image-1.png"

function Header() {
    return (
        <div>
            <img src={heading} className='w-full h-90 md:h-full' />
            <div className='w-full bg-black '>
                <div className='py-3 text-xl text-gray-50 md:text-6xl md:py-10 text-center'>
                    Work, I Can Do For
                    <span className='text-3xl md:text-8xl'>
                        {` You`}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header