import React from "react";

export function GradientText({ children, className }) {
    return (
        <span
            className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r from-black to-[#bf1112] bg-clip-text text-transparent inline-block leading-tight ${className}`}
        >
            {children}
        </span>
    );
}
