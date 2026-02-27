import React from 'react'

function Profiles({ className }) {
    return (
        <div className='font-helvetica '>
            <ul className="flex xs:gap-4 xs:py-0 md:gap-4 2xs:gap-2 items-center text-center ">
                <li>
                    <a href="" draggable="false" target="_blank" rel="noopener noreferrer"
                        className={`rounded-full 2xs:h-8 2xs:w-8 xs:h-10 xs:w-10 lg:h-10 lg:w-10 flex items-center justify-center border transition-all duration-300 ${className}`}>
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="" draggable="false" target="_blank" rel="noopener noreferrer"
                        className={`rounded-full 2xs:h-8 2xs:w-8 xs:h-10 xs:w-10 lg:h-10 lg:w-10 flex items-center justify-center border transition-all duration-300 ${className}`}>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="" draggable="false" target="_blank" rel="noopener noreferrer"
                        className={`rounded-full 2xs:h-8 2xs:w-8 xs:h-10 xs:w-10 lg:h-10 lg:w-10 flex items-center justify-center border transition-all duration-300 ${className}`}>
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank" rel="noopener noreferrer"
                        className={`rounded-full 2xs:h-8 2xs:w-8 xs:h-10 xs:w-10 lg:h-10 lg:w-10 flex items-center justify-center border transition-all duration-300 ${className}`}>
                        <i className="fa-solid fa-globe"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Profiles;
