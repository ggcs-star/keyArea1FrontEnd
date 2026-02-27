import React, { useState, useRef } from 'react';
import { Container } from '../../../../components/Layout';
import { FaStar, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { BsFillHouseFill, BsFillHouseDoorFill } from 'react-icons/bs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import { GradientText } from '../../../../components/Button/GradientText';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const localities = [
    {
        name: 'Satellite, Ahmedabad',
        overviewUrl: '/buy/satellite',
        projectsUrl: '/buy/satellite',
        projectsCount: 143,
        rating: 4.5,
        reviews: 68,
        buyPrice: 7500,
        buyProperties: 1120,
        rentPrice: 18000,
        rentProperties: 310
    },
    {
        name: 'Vastrapur, Ahmedabad',
        overviewUrl: '/buy/vastrapur',
        projectsUrl: '/buy/vastrapur',
        projectsCount: 76,
        rating: 4.4,
        reviews: 54,
        buyPrice: 6900,
        buyProperties: 980,
        rentPrice: 16000,
        rentProperties: 245
    },
    {
        name: 'Bopal, Ahmedabad',
        overviewUrl: '/buy/bopal',
        projectsUrl: '/buy/bopal',
        projectsCount: 92,
        rating: 4.6,
        reviews: 72,
        buyPrice: 6200,
        buyProperties: 1340,
        rentPrice: 15000,
        rentProperties: 390
    },
    {
        name: 'Maninagar, Ahmedabad',
        overviewUrl: '/buy/maninagar',
        projectsUrl: '/buy/maninagar',
        projectsCount: 58,
        rating: 4.3,
        reviews: 47,
        buyPrice: 5800,
        buyProperties: 870,
        rentPrice: 13500,
        rentProperties: 210
    }
];


const TopLocalities = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const sliderRef = useRef(null);

    // Custom arrow components
    const CustomPrevArrow = ({ onClick }) => (
        <button
            onClick={onClick}
    className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-100 hover:bg-white hover:text-gray-500 rounded-full p-2 shadow-md transition duration-200 ease-in-out z-10 focus:outline-none"
            aria-label="Previous locality"
        >
            <ChevronLeft size={28} />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button
            onClick={onClick}
    className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 md:translate-x-1/2 bg-gray-500 text-white bg-opacity-70 hover:bg-opacity-100 hover:bg-white hover:text-gray-500 rounded-full p-2 shadow-md transition duration-200 ease-in-out z-10 focus:outline-none"
            aria-label="Next locality"
        >
            <ChevronRight size={28} />
        </button>
    );

    // Slick settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    return (
        <section className="py-12 bg-gray-200">
            <Container>
                <div className="text-center lg:text-start mb-8">
                    <GradientText className="">
                        Top Localities for buying or renting properties
                    </GradientText>
                </div>

                <div 
                    className="relative px-4 md:px-8"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    ref={sliderRef}
                >
                    <Slider {...settings}>
                        {localities.map((locality, index) => (
                            <div key={index} className="px-2 ">
                                <div className="group cursor-pointer transform transition-all duration-300 ">
                                    <div className="border-t-8 border-red-400/50 mb-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                                        <div className="flex justify-between items-start p-2">
                                            <div>
                                                <a
                                                    href={locality.overviewUrl}
                                                    className="text-lg font-semibold text-gray-800 hover:text-primary flex items-center gap-1"
                                                >
                                                    {locality.name}
                                                    <FaExternalLinkAlt className="text-sm" />
                                                </a>
                                                <a
                                                    href={locality.projectsUrl}
                                                    className="text-sm text-primary cursor-pointer"
                                                >
                                                    {locality.projectsCount} Projects
                                                </a>
                                            </div>
                                            <div className="flex flex-col items-start text-yellow-500">
                                                <div className="flex items-center gap-1">
                                                    <span className="font-semibold text-black">{locality.rating}</span>
                                                    <FaStar />
                                                </div>
                                                <span className="text-gray-600 text-sm">{locality.reviews} Reviews</span>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="flex text-sm flex-1">
                                            {/* Buy Section */}
                                            <div className="flex-1 p-2 flex flex-col justify-between">
                                                <div className="flex flex-col items-start gap-2 mb-2">
                                                    <div className='flex'>
                                                    <BsFillHouseFill className="text-primary" />
                                                    <span className="font-semibold">Buy</span>
                                                    </div>
                                                    <span className="text-gray-600">₹{locality.buyPrice.toLocaleString()}/ sq.ft</span>
                                                </div>
                                                <a 
                                                    href={`/${locality.name.toLowerCase().replace(/\s+/g, '-')}-property/property-for-sale`}
                                                    className="text-sm text-primary flex flex-col items-start justify-start gap-1"
                                                >
                                                    {locality.buyProperties} Property for Sale in {locality.name}
                                                    <FaArrowRight className="text-xs" />
                                                </a>
                                            </div>

                                            <div className="w-px bg-gray-200 mx-2"></div>

                                            {/* Sell Section */}
                                            <div className="flex-1 p-2 flex flex-col justify-between">
                                                <div className="flex flex-col items-start gap-2 mb-2">
                                                    <div className='flex'>
                                                    <BsFillHouseDoorFill className="text-primary" />
                                                    <span className="font-semibold">Sell</span>
                                                    </div>
                                                    <span className="text-gray-600">₹{locality.rentPrice.toLocaleString()}/ sq.ft</span>
                                                </div>
                                                <a 
                                                    href={`/${locality.name.toLowerCase().replace(/\s+/g, '-')}-property/property-for-sell`}
                                                    className="text-sm text-primary flex flex-col items-start justify-start gap-1"
                                                >
                                                    {locality.rentProperties} Property for Sell in {locality.name}
                                                    <FaArrowRight className="text-xs" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </section>
    );
};

export default TopLocalities;