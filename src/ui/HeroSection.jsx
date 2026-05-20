import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const leftSlide = {
    hidden: {
        opacity: 0,
        x: -40,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};

const rightSlide = {
    hidden: {
        opacity: 0,
        x: 60,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.85,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};



export default function HeroSection() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[88vh] flex flex-col justify-center px-8 md:px-10 overflow-hidden"
        >
            {/* Ambient glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: [0, 20, 0],
                    y: [0, -10, 0],
                }}
                transition={{
                    opacity: { duration: 0.6 },
                    scale: { duration: 0.8 },
                    x: {
                        repeat: Infinity,
                        duration: 10,
                        ease: "easeInOut",
                    },
                    y: {
                        repeat: Infinity,
                        duration: 12,
                        ease: "easeInOut",
                    },
                }}
                className="absolute top-[-10rem] left-[-10rem] w-[28rem] h-[28rem] rounded-full bg-indigo-500/10 blur-3xl"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: [0, -20, 0],
                    y: [0, 10, 0],
                }}
                transition={{
                    opacity: { duration: 0.7 },
                    scale: { duration: 0.8 },
                    x: {
                        repeat: Infinity,
                        duration: 11,
                        ease: "easeInOut",
                    },
                    y: {
                        repeat: Infinity,
                        duration: 13,
                        ease: "easeInOut",
                    },
                }}
                className="absolute bottom-[-12rem] right-[-10rem] w-[30rem] h-[30rem] rounded-full bg-white/5 blur-3xl"
            />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Small top text */}
                <motion.span
                    variants={leftSlide}
                    initial="hidden"
                    animate="show"
                    className="inline-block text-[11px] font-mono uppercase tracking-[0.3em] text-indigo-800"
                >
                    Available for projects
                </motion.span>

                {/* Hero texts */}
                <div className="overflow-hidden">
                    <motion.h1
                        variants={rightSlide}
                        initial="hidden"
                        animate="show"
                        whileHover={{
                            x: 6,
                            transition: {
                                type: "spring",
                                stiffness: 250,
                                damping: 18,
                            },
                        }}
                        className="text-white/90 mt-6 font-display italic text-[clamp(3.5rem,12vw,13rem)] leading-[0.85] tracking-tight"
                    >
                        Abbas
                    </motion.h1>

                    <motion.h2
                        initial={{
                            opacity: 0,
                            x: 80,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 0.08,
                            ease: [0.25, 1, 0.5, 1],
                        }}
                        whileHover={{
                            x: -6,
                            transition: {
                                type: "spring",
                                stiffness: 250,
                                damping: 18,
                            },
                        }}
                        className="ml-[12%] text-stone-500 text-[clamp(3.5rem,12vw,13rem)] leading-[0.85]"
                    >
                        Olabode
                    </motion.h2>
                </div>

                {/* Bottom section */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -30,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.75,
                        delay: 0.2,
                        ease: [0.25, 1, 0.5, 1],
                    }}
                    className="mt-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-t border-border pt-8"
                >
                    <motion.p
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.3,
                        }}
                        className="max-w-[44ch] text-base md:text-lg leading-relaxed text-stone-600"
                    >
                        Frontend developer focused on building clean,
                        responsive, and user-friendly web applications with
                        React and Supabase.
                    </motion.p>

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.4,
                        }}
                        whileHover={{
                            y: -3,
                        }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <Link
                            to={"/work"}
                            className="inline-flex text-white items-center gap-3 text-sm font-mono uppercase tracking-widest transition-colors"
                        >
                            <motion.span
                                whileHover={{
                                    letterSpacing: "0.18em",
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                            >
                                VIEW WORK
                            </motion.span>

                            <motion.span
                                animate={{
                                    y: [0, 5, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeInOut",
                                }}
                            >
                                <FaArrowDown size={16} />
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.main>
    );
}