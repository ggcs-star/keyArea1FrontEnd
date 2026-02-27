import React from "react";

export const Container = ({ children, className }) => {
    return (
        <div
            className={`max-w-screen-lg lg:max-w-screen-xl mx-auto xl:px-0 lg:px-8 sm:px-5 px-3 ${className}`}
        >
            {children}
        </div>
    );
};

