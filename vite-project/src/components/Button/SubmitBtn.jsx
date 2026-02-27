import React from "react";

export function SubmitBtn({ children, className }) {
    return <button className={`py-2 px-2 bg-primary hover:bg-secondary cursor-pointer font-montserratbold text-white my-4 uppercase flex items-center justify-center rounded-lg font-bold ${className}`}>{children}</button>;
}
