import React from "react";
import { motion } from "framer-motion";

export function H1Animate({ className, children, effect = true }) {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.025,
                ease: "linear",
            },
        }),
    };
    return (
        <motion.h1
            className={`md:text-[45px] text-3xl leading-[3.5rem] font-bold mb-3 ${className}`}
            // variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
        >
            {children}
        </motion.h1>
    );
}

export function TextAnimate({ className, children }) {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            x: 100,
        },
        animate: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.025,
                ease: "linear",
            },
        }),
    };
    return (
        <motion.p
            className={`!text-xl font-semibold [letter-spacing:-0.3px] text-transparent bg-gradient-to-r fro-g1 va-g2 t-g3 bg-clip-text !bg-[#7d7c83] ${className} `}
            // variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            // custom={index}
        >
            {children}
        </motion.p>
    );
}

export const SubHeading = ({ className, children }) => {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            x: 100,
        },
        animate: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.025,
                ease: "linear",
            },
        }),
    };
    return (
        <motion.p
            className={`sm:text-[20px] text-lg font-axiMedium mb-1 [letter-spacing:0.4px] text-gray-400 ${className}`}
            // variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
        >
            {children}
        </motion.p>
    );
};

export const Desc = ({ className, children, ...props }) => {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            x: 100,
        },
        animate: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.025,
                ease: "linear",
            },
        }),
    };
    return (
        <motion.p
            className={`md:text-[17px] text-base font-axiMedium text-gray-500 ${className}`}
            // variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            {...props}
        >
            {children}
        </motion.p>
    );
};

export function P({ className, children }) {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            x: 100,
        },
        animate: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.025,
                ease: "linear",
            },
        }),
    };
    return (
        <motion.p
            className={`lg:text-[17px] text-[15px] [letter-spacing:0.1px] text-gray-400 ${className}`}
            // variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
        >
            {children}
        </motion.p>
    );
}
