import React from "react";

export function ReadMoreBtn({ children, className }) {
    return <button className={`hover:bg-primary hover:text-white py-2 px-2 border-1 border-red-500 hover:border-transparent text-primary cursor-pointer my-4 flex items-center justify-center rounded-lg font- ${className}`}>{children}</button>;
}
