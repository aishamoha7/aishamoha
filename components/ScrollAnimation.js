'use client';

import { motion } from "framer-motion";

export default function ScrollAnimation({
    children,
    className = "",
    delay = 0,
    variant = 'fadeUp', // 'fadeUp', 'fadeIn', 'slideRight', 'slideLeft'
    ...props
}) {

    const variants = {
        fadeUp: {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        slideRight: {
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 }
        },
        slideLeft: {
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 }
        }
    };

    return (
        <motion.div
            variants={variants[variant]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: "easeOut"
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
