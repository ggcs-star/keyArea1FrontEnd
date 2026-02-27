
import React from "react";

export function GradientHeadingText({ children, className }) {
    return (
        <span
            className={`text-4xl font-medium inline-block bg-gradient-to-r from-[#bf1112] to-black bg-clip-text text-transparent ${className}`}
        >
            {children}
        </span>
    );
}
