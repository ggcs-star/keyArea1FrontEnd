import React from 'react';
import { FiDownload, FiHeart, FiTrendingUp } from 'react-icons/fi';
import { FaFire } from "react-icons/fa";


const KeyHighlights = () => {
    const highlights = [
        "Tallest residential towers in miyapur offering breathtaking skyline views",
        "Massive 40,307 sq. ft. clubhouse spread over seven levels, packed with world class amenities",
        "75% open space ensuring a green and spacious environment for a serene lifestyle",
        "Boom barrier security with RFID access ensuring seamless and secure entry for residents"
    ];

    return (
        <div className="h-max sticky top-20 rounded-2xl overflow-hidden p-5 border border-gray-200 shadow-lg">
            {/* Heading */}
            <div className="flex flex-col mb-5">
                <span className="text-xl text-gray-800">Why you should buy</span>
                <span className="text-2xl font-extrabold text-gray-900">Devkunj 80?</span>
            </div>

            {/* New Launch Info */}
            <div className="rounded-xl border border-gray-100 overflow-hidden mb-4">
                <div className="bg-gray-100 px-3 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="border border-yellow-800 rounded-full p-0.5">
                            <div className="h-6 w-6 rounded-full bg-amber-400 flex items-center justify-center">
                                <img src="https://static.99acres.com/universalxid/img/NLBrown.gif" alt="New Launch" className="h-5 w-5" />
                            </div>
                        </div>
                        <div className="text-gray-800 ml-2 mr-1 font-bold"><em>NEW LAUNCH</em></div>
                        <div className="text-base text-gray-700"><em>Benefits</em></div>
                        <a href="#" className="ml-auto underline cursor-pointer text-sm font-semibold text-gray-700">
                            <span>Learn more</span>
                        </a>
                    </div>
                    <div className="flex items-center mt-2.5 text-sm">
                        <div className="text-gray-800">Best Prices</div>
                        <span className="mx-1.5 text-gray-400">•</span>
                        <div className="text-gray-800">Unit of Choice</div>
                        <span className="mx-1.5 text-gray-400">•</span>
                        <div className="text-gray-800">Easy Payment Plans</div>
                    </div>
                </div>
            </div>

            {/* Highlights List */}
            <ul className="list-none space-y-2.5">
                {highlights.slice(0, 3).map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700 text-sm leading-snug">
                        <span className="mr-3 mt-1 text-gray-400">•</span>
                        <span>{item}</span>
                    </li>
                ))}
                <li className="flex items-start text-gray-700 text-sm">
                     <span className="mr-3 mt-1 text-gray-400">•</span>
                     <span className="truncate">{highlights[3]}</span>
                     <a href="#" className="ml-1 text-primary underline whitespace-nowrap font-semibold">+ 1 more</a>
                </li>
            </ul>

            {/* Buttons */}
            <div className="mt-8">
                <button className="w-full mb-2 h-11 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors">
                    Contact Builder
                </button>
                <div className="flex justify-between gap-2">
                    <button className="flex-1 h-11 rounded-lg border border-primary text-primary flex items-center justify-center gap-2 font-semibold text-sm hover:bg-primary/5 transition-colors">
                        <FiDownload />
                        <span>Brochure</span>
                    </button>
                    <button className="flex-1 h-11 rounded-lg border border-primary text-primary flex items-center justify-center gap-2 font-semibold text-sm hover:bg-primary/5 transition-colors">
                        <FiHeart />
                        <span>Shortlist</span>
                    </button>
                </div>
            </div>

            {/* FOMO Section */}
            <div className="mt-4 flex items-center justify-center text-sm">
                 <FaFire className="text-yellow-500 mr-1.5"/>
                <span className="font-semibold text-gray-700">89 families showed interest yesterday.</span>
            </div>

        </div>
    );
};

export default KeyHighlights; 