import React from 'react'

function Profiles({ className }) {
    return (
        <div>
            <ul className="flex items-center text-center px-2 gap-2 justify-end">
                <li className="bg-[#3b5999] rounded-full">
                    <a href="https://www.facebook.com/" draggable="false" target="_blank" rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center  transition-all duration-300 ${className}`}>
                        <i className="fa-brands fa-facebook-f text-sm"></i>
                    </a>
                </li>
                <li className="bg-[#1da1f4] rounded-full">
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center  transition-all duration-300 ${className}`}>
                        <i className="fa-brands fa-twitter text-sm"></i>

                    </a>
                </li>
                <li className="bg-[#0076b4] rounded-full">
                    <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center  transition-all duration-300 ${className}`}>
                        <i className="fa-brands fa-linkedin-in text-sm"></i>

                    </a>
                </li>
                <li className="bg-[#ce201f] rounded-full">
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center  transition-all duration-300 ${className}`}>
                        <i className="fa-brands fa-youtube text-sm"></i>

                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Profiles;
