import React from "react";

export * from "./GradientText";
export * from "./RadientBtn";
export * from "./SubmitBtn";

export function PrimaryBtn({ children, className, onClick, type, color }) {
    return (
        <button
        //     className={`relative px-4 py-2 text-white rounded-full
        // hover:bg-darkprimaryBtn transition-all duration-500 ease-out bg-primaryBtn  text-base hover:scale-105 cursor-pointer
        // hover:text-${color} flex items-center justify-center`}
            onClick={onClick}
            type={type}

            className={`${className} border-1 hover:border-transparent rounded-3xl p-2 px-4 cursor-pointer hover:bg-primary hover:text-white border-red-500 text-primary font-medium transition-colors duration-300`}

        >
            {children}
        </button>

    );
}









export function OutlinedBtn({ children, className, onClick }) {
    return (
        <button
            className={`px-6 py-2.5 text-lg font-semibold text-white border-2 rounded-full rounded-br-none hover:rounded-full hover:rounded-tl-none  hover:bg-opacity-95 transition-all duration-300 whitespace-nowrap ${className}`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
}
export function SecondaryBtn({ children, className, onClick }) {
    return (
        <button
            className={`px-4 py-2.5  text-sm !font-semibold bg-white border-2 border-gray-300 text-gray-700 outline-none rounded-full hover:bg-opacity-95 transition-all duration-300 ${className}`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
}

export const ApplyButton = ({ children, onClick }) => {
    return (
        <button
            className="group relative py-3 px-4 overflow-hidden rounded-full text-lg shadow border-2 border-primary hover:border-primary"
            onClick={onClick}
        >
            <div className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-primary group-hover:text-white font-semibold px-3">
                {children ?? "Franchises"}
            </span>
        </button>
    );
};
