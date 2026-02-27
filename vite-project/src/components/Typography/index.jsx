export * from "./Animation";

export const H2 = ({ children, className }) => {
    return (
        <h2
            className={`text-2xl lg:text-4xl text-primary font-bold ${className}`}
        >
            {children}
        </h2>
    );
};


export const H3 = ({ children, className }) => {
    return (
        <h3 className={`text-md lg:text-xl text-slate-500 leading-8 ${className}`}>
            {children}
        </h3>
    );
};
export const H4 = ({ children, className }) => {
    return (
        <h4 className={`text-[25px] font-axiSemiBold ${className}`}>
            {children}
        </h4>
    );
};
export const H5 = ({ children, className }) => {
    return (
        <h5 className={`text-[20px] font-semibold  ${className}`}>
            {children}
        </h5>
    );
};
export const H6 = ({ children, className }) => {
    return (
        <h6 className={`text-[16px] font-axiMedium text-gray-600 ${className}`}>
            {children}
        </h6>
    );
};
export const P4 = ({ children, className }) => {
    return (
        <p className={`text-xl font-axiMedium font-semibold ${className}`}>
            {children}
        </p>
    );
};
export const P5 = ({ children, className }) => {
    return (
        <p className={`text-lg font-axiMedium font-semibold ${className}`}>
            {children}
        </p>
    );
};
export const P6 = ({ children, className }) => {
    return (
        <p className={`text-[16px] font-axiMedium font-semibold ${className}`}>
            {children}
        </p>
    );
};

export const Mail = ({ children, className }) => {
    return (
        <a
            className={`text-2xl font-axiMedium text-primary ${className}`}
            href="mailto:ggcs@globalgarner.com"
        >
            {children}
        </a>
    );
};
export const Telephone = ({ children, className }) => {
    return (
        <a
            className={`text-2xl font-axiMedium text-primar ${className}`}
            href="tel:+916354917511"
        >
            {children}
        </a>
    );
};
