import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useLocation, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/navbar/logo.png";
import Profiles from "./Profiles";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { navMenu } from "../../db";
import { navRoles } from "../../db";
import { PrimaryBtn } from "../../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { SubmitBtn } from "../../components/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";



export default function NavbarContent(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [expandedItem, setExpandedItem] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleMenuToggle = (name) => {
        setExpandedItem(expandedItem === name ? null : name);
    };

    const handleDropdownToggle = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    const handleSubmenuClose = () => {
        setExpandedItem(null);
        setActiveDropdown(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const topHeader = document.querySelector('.top-header');
            const topHeaderHeight = topHeader?.offsetHeight || 0;

            if (window.scrollY > topHeaderHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="font-montserratregular">
            {/* Top header section */}
            {/* <div className={`w-full border-b-[1px] border-solid border-gray-200 ${isScrolled ? 'fixed top-0 z-50 lg:relative' : 'relative'}`}>
                <div className="bg-white max-w-screen-lg lg:max-w-screen-xl mx-auto xl:px-0 lg:px-8">
                    <div className="flex flex-row justify-between items-center w-full py-2 lg:py-0 px-4 lg:px-0 border-b border-gray-200">
                        <Link to="/" className="flex pl-4">
                            <img
                                src={logo}
                                alt="Rera Approved"
                                className="h-20 w-48 object-cover"
                            />
                        </Link>

                        <div className="flex items-center gap-4">
                            <div className="hidden h-20 lg:flex items-center">
                                <ul className="flex items-center border-l border-gray-200">
                                    {navRoles.map((role, index) => (
                                        <li
                                            key={index}
                                            className={`h-20 cursor-pointer items-center flex list-none px-8 text-gray-400 text-lg
                                            ${index !== 0 ? 'border-l border-gray-200' : ''}
                                            ${index === navRoles.length - 1 ? 'border-r border-gray-200' : ''}
                                            `}
                                        >
                                            {role.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <SubmitBtn className="!w-20">
                                LOG IN
                            </SubmitBtn>

                            <div className="lg:hidden">
                                <span
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    className="text-black bg-transparent text-3xl cursor-pointer"
                                >
                                    {menuOpen ? <IoMdClose /> : <IoMdMenu />}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Mobile menu */}
            <div
                className={`lg:hidden fixed left-0 w-full bg-white z-40 transition-transform duration-300 ease-in-out transform ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                style={{
                    top: isScrolled ? '72px' : '72px',
                    overflowY: 'auto',
                    maxHeight: `calc(100vh - 72px)`,
                }}
            >
                <div className="">
                    {navMenu.map((item, index) => (
                        <div
                            key={item.id}
                            className={`relative flex flex-col items-start w-full justify-center py-3 ${
                                index !== navMenu.length - 1 ? 'border-b border-gray-200' : ''
                            }`}
                        >
                            <div className="flex items-center w-full">
                                <Link
                                    draggable="false"
                                    to={item.slug}
                                    onClick={() => {
                                        handleSubmenuClose();
                                        setMenuOpen(false);
                                    }}
                                    className={`text-black text-lg px-4 py-2 transition-colors duration-300 flex justify-start items-center ${
                                        location.pathname === item.slug ? 'text-primary' : ''
                                    }`}
                                >
                                    {item.label}
                                </Link>

                                {item.submenu && (
                                    <div
                                        className="ml-auto font-bold text-xl text-black cursor-pointer px-4"
                                        onClick={() => handleMenuToggle(item.id)}
                                    >
                                        {expandedItem === item.id ? '-' : '+'}
                                    </div>
                                )}
                            </div>

                            {item.submenu && expandedItem === item.id && (
                                <div className="w-full bg-white text-black mt-1">
                                    <ul className="space-y-1">
                                        {item.submenu.map((dropdownItem) => (
                                            <li key={dropdownItem.id}>
                                                {dropdownItem.cities ? (
                                                    // Special handling for cities submenu on mobile
                                                    <div className="px-4 py-2">
                                                        <h4 className="text-base font-semibold text-gray-800 mb-2">
                                                            {dropdownItem.label}
                                                        </h4>
                                                        <div className="grid grid-cols-2 gap-1">
                                                            {dropdownItem.cities.map((city) => (
                                                                <Link
                                                                    key={city.id}
                                                                    to={city.slug}
                                                                    onClick={() => {
                                                                        handleSubmenuClose();
                                                                        setMenuOpen(false);
                                                                    }}
                                                                    className={`text-xs block px-2 py-1 text-gray-700 hover:text-primary hover:underline transition-colors duration-300 rounded ${
                                                                        city.isViewAll ? 'font-semibold text-primary col-span-2' : ''
                                                                    }`}
                                                                >
                                                                    {city.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ) : dropdownItem.services ? (
                                                    // Special handling for services submenu on mobile
                                                    <div className="px-4 py-2">
                                                        <h4 className="text-base font-semibold text-gray-800 mb-2 border-b border-gray-200 pb-1">
                                                            {dropdownItem.label}
                                                        </h4>
                                                        <div className="space-y-1">
                                                            {dropdownItem.services.map((service) => (
                                                                <a
                                                                    key={service.id}
                                                                    href={service.slug}
                                                                    // target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    onClick={() => {
                                                                        handleSubmenuClose();
                                                                        setMenuOpen(false);
                                                                    }}
                                                                    className="text-sm block px-2 py-1 text-gray-700 hover:bg-primary/10 transition-colors duration-300 rounded"
                                                                >
                                                                    {service.label}
                                                                    {service.isNew && (
                                                                        <span className="ml-2 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded">New</span>
                                                                    )}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <Link
                                                        draggable="false"
                                                        to={dropdownItem.slug}
                                                        onClick={() => {
                                                            handleSubmenuClose();
                                                            setMenuOpen(false);
                                                        }}
                                                        className="block text-base px-4 py-2 text-black hover:bg-primary/10 transition-colors duration-300"
                                                    >
                                                        {dropdownItem.label}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main navbar section */}
            <div
                style={{ zIndex: 50 }}
                className={`bg-white w-full z-50 transition-all duration-300 border-b-[1px] ${isScrolled ? 'fixed top-0' : 'relative'} border-solid border-gray-200`}>
                <div className="flex w-full relative border-gray-200 bg-white max-w-screen-lg lg:max-w-screen-xl mx-auto xl:px-0 lg:px-8 py-4 lg:py-0 h-18">
                    {/* Mobile menu toggle */}
                    <div className="lg:hidden ml-auto">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-black bg-transparent text-3xl cursor-pointer p-2"
                        >
                            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
                        </button>
                    </div>
                    
                    {/* Left side navigation */}
                    <Link to="/" className="flex lg:pl-0 items-center gap-2">
                        <img
                            src={logo}
                            alt="Key Area 1"
                            className="h-8 lg:h-16 w-40 justify-center items-center object-contain object-left"
                        />
                        
                    </Link>
                    
                    <div className="flex-1">
                        <ul className="mt-2 hidden lg:flex lg:flex-row items-center lg:space-x-2 justify-center">
                            {navMenu.map((item, index) => (
                                <li key={item.id} className="relative flex justify-center items-center group lg:text-lg underline-hover" onMouseEnter={() => item?.submenu && setActiveDropdown(index)}
                                    onMouseLeave={() => item?.submenu && setActiveDropdown(null)}>
                                    <Link
                                        to={item.slug}
                                        draggable="false"
                                        onClick={() => {
                                            if (item.submenu) {
                                                handleDropdownToggle(index);
                                            } else {
                                                navigate(item.slug);
                                            }
                                        }}
                                        onMouseEnter={() => item?.submenu && setActiveDropdown(index)}
                                        onMouseLeave={() => item?.submenu && setActiveDropdown(null)}
                                        className={`px-3 gap-1 flex bottom-0 top-2 mt-2 text-base items-center text-black h-14 ${
                                            activeDropdown === index ? 'bg-primary text-white rounded-t-2xl' : 'hover:text-primary'
                                        }`}
                                    >
                                        <span className={`h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
                                        {item.label}
                                        {item.submenu && (
                                            <span className="ml-1 pb-2">
                                                <span className="inline-block group-hover:hidden h-0.5 pb-2">
                                                    {/* <FontAwesomeIcon icon={faCaretDown} className="h-1.5 w-1.5 block pt-3" /> */}
                                                    <IoIosArrowDown />
                                                </span>
                                                <span className="hidden group-hover:inline-block h-0.5 pb-2">
                                                    <IoIosArrowUp />
                                                </span>
                                            </span>
                                        )}
                                    </Link>

                                    {item.submenu && activeDropdown === index && item.label !== "Services" && (
                                        <div
                                            className="border-t-2 border-primary/70 absolute top-full bg-white shadow-lg z-10 block min-w-max"
                                            style={{ 
                                                left: '50%',
                                                transform: 'translateX(-50%)'
                                            }}
                                            onMouseEnter={() => setActiveDropdown(index)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <ul className="space-y-2">
                                                {item.submenu.map((dropdownItem) => (
                                                    <li key={dropdownItem.id}>
                                                        {dropdownItem.cities ? (
                                                            // Special handling for cities submenu
                                                            <div className="p-4">
                                                                <h3 className="text-lg font-semibold text-gray-800 mb-3 px-2">
                                                                    {dropdownItem.label}
                                                                </h3>
                                                                <div className="grid grid-cols-3 gap-[0.5]">
                                                                    {dropdownItem.cities.map((city) => (
                                                                        <Link
                                                                            key={city.id}
                                                                            to={city.slug}
                                                                            onClick={() => {
                                                                                handleSubmenuClose();
                                                                                setMenuOpen(false);
                                                                            }}
                                                                            className={`text-sm block px-2 py-1 text-gray-700 hover:text-primary hover:underline transition-colors duration-300 rounded ${
                                                                                city.isViewAll ? 'font-semibold text-primary hover:bg-primary hover:text-white' : ''
                                                                            }`}
                                                                        >
                                                                            {city.label}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ) : dropdownItem.services ? (
                                                            // Special handling for services submenu
                                                            <div className="p-4">
                                                                <h3 className="text-lg font-semibold text-gray-800 mb-3 px-2">
                                                                    {dropdownItem.label}
                                                                </h3>
                                                                <div className="grid grid-cols-1 gap-1">
                                                                    {dropdownItem.services.map((service) => (
                                                                        <a
                                                                            key={service.id}
                                                                            href={service.slug}
                                                                            // target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="text-sm block px-2 py-1 text-gray-700 hover:text-primary hover:underline transition-colors duration-300 rounded"
                                                                        >
                                                                            {service.label}
                                                                            {service.isNew && (
                                                                                <span className="ml-2 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded">New</span>
                                                                            )}
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            // Regular submenu item
                                                            <Link
                                                                draggable="false"
                                                                to={dropdownItem.slug}
                                                                onClick={handleSubmenuClose}
                                                                className="text-base block px-6 py-3 text-black hover:text-primary hover:underline transition-colors duration-300"
                                                            >
                                                                {dropdownItem.label}
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Special handling for Services submenu - Row layout */}
                                    {item.submenu && activeDropdown === index && item.label === "Services" && (
                                        <div
                                            className="border-t-2 border-primary/70 absolute top-full bg-white shadow-lg z-10 block min-w-max"
                                            style={{ 
                                                left: '50%',
                                                transform: 'translateX(-50%)'
                                            }}
                                            onMouseEnter={() => setActiveDropdown(index)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <div className="p-4">
                                                <div className="grid grid-cols-3 gap-6">
                                                    {item.submenu.map((dropdownItem) => (
                                                        <div key={dropdownItem.id} className="space-y-2">
                                                            <h3 className="text-lg font-semibold text-gray-800 mb-3 px-2 border-b border-gray-200 pb-2">
                                                                {dropdownItem.label}
                                                            </h3>
                                                            <div className="space-y-1">
                                                                {dropdownItem.services?.map((service) => (
                                                                    <a
                                                                        key={service.id}
                                                                        href={service.slug}
                                                                        // target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-sm block px-2 py-1 text-gray-700 hover:text-primary hover:underline transition-colors duration-300 rounded"
                                                                    >
                                                                        {service.label}
                                                                        {service.isNew && (
                                                                            <span className="ml-2 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded">New</span>
                                                                        )}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right side profile */}
                    <div className="flex items-center gap-4">
                        {/* Post Property Button */}
                        <a href="/reels" className="text-sm lg:text-lg flex items-center gap-1 px-2 py-1 mx-2 lg:mx-0 bg-primary text-white rounded-3xl hover:bg-primary/90 transition-colors">
                           Reels <span className="font-bold relative">
                                
                                <span className="absolute -top-4 lg:-top-6 right-4 bg-red-500 text-white px-2 text-[6px] lg:text-[10px] rounded-full">PRO</span>
                            </span>
                        </a>

                        {/* Help Dropdown */}
                        <div className="hidden md:flex relative group">
                            <button className="flex items-center p-2 hover:bg-gray-100 rounded-full">
                                <img src="https://static.realestateindia.com/rei/images/help-icon.jpg" alt="Help" className="w-5 h-5" />
                            </button>
                            <div className="absolute right-0 top-full w-72 bg-white shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                                <ul className="space-y-2 mb-4">
                                    <li><a href="/help" className="text-gray-700 hover:text-primary">Help Center</a></li>
                                    <li><a href="/contact" className="text-gray-700 hover:text-primary">Sales Enquiry</a></li>
                                </ul>
                                <div className="border-t pt-4">
                                    <a href="tel:+91-8929175327" className="flex items-center gap-2 text-gray-700 hover:text-primary">
                                        <span>9:30AM to 6:00PM IST</span>
                                        <i className="fas fa-phone"></i>
                                        <span>+91-8929175327</span>
                                    </a>
                                    <button className="w-full mt-2 text-left text-gray-700 hover:text-primary">
                                        <i className="fas fa-phone mr-2"></i>Request A Call Back
                                    </button>
                                    <p className="mt-2 text-sm text-gray-500">
                                        To share your queries. <a href="/feedback" className="text-primary hover:underline">Click here!</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sign In Dropdown */}
                        <div className="hidden md:flex relative group">
                            <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                                <img src="https://static.realestateindia.com/rei/images/login-register-icon.jpg" alt="Sign In" className="w-6 h-6" />
                                <div className="text-left">
                                    <span className="block text-sm font-medium">Sign In</span>
                                    <span className="block text-xs text-gray-500">Join Free</span>
                                </div>
                            </button>
                            <div className="absolute right-0 top-full w-72 bg-white shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                                <div className="mb-4">
                                    <a href="/login" className="block w-full text-center py-2 bg-primary text-white rounded-md hover:bg-primary/90 mb-2">Login</a>
                                    <p className="text-sm text-gray-600">New to RealEstate? <a href="/register" className="text-primary hover:underline">Sign Up</a></p>
                                </div>
                                {/* <ul className="space-y-2">
                                    <li><a href="/subuser-login" className="flex items-center gap-2 text-gray-700 hover:text-primary"><i className="fas fa-sign-in"></i> Sub User Login</a></li>
                                    <li><a href="/profile" className="flex items-center gap-2 text-gray-700 hover:text-primary"><i className="fas fa-user"></i> Profile</a></li>
                                    <li><a href="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-primary"><i className="fas fa-dashboard"></i> My Dashboard</a></li>
                                    <li><a href="/enquiries" className="flex items-center gap-2 text-gray-700 hover:text-primary"><i className="fas fa-laptop"></i> My Enquiry</a></li>
                                    <li><a href="/post-property" className="flex items-center gap-2 text-gray-700 hover:text-primary"><i className="fas fa-paper-plane"></i> Post Property</a></li>
                                    <li><a href="/my-properties" className="flex items-center gap-2 text-gray-700 hover:text-primary"><i className="fas fa-building"></i> My Property</a></li>
                                    <li><a href="/property-leads" className="flex items-center gap-2 text-gray-700 hover:text-primary"><i className="fas fa-building"></i> Property Leads <span className="ml-1 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded">New</span></a></li>
                                    <li><a href="/advertise" className="flex items-center gap-2 text-gray-700 hover:text-primary"><i className="fas fa-picture-o"></i> Advertise with us</a></li>
                                    <li><a href="/property-search" className="flex items-center gap-2 text-gray-700 hover:text-primary"><i className="fas fa-search"></i> Search by Property ID</a></li>
                                    <li><a href="/download-app" className="flex items-center gap-2 text-gray-700 hover:text-primary"><i className="fas fa-download"></i> Download App</a></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}