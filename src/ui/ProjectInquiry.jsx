import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

export default function ProjectInquiry() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden px-6 md:px-10 py-32 border-t border-border"
        >
            {/* Ambient background glow */}
            <motion.div
                animate={{
                    x: [0, 40, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                }}
                className="absolute top-[-6rem] left-[-6rem] w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl"
            />

            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-8rem] right-[-6rem] w-80 h-80 rounded-full bg-white/5 blur-3xl"
            />

            <div className="max-w-5xl mx-auto text-center flex flex-col space-y-7 relative z-10">
                {/* Heading animation */}
                <motion.h2
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="italic text-5xl md:text-7xl leading-tight text-white"
                >
                    Have a project in mind?
                </motion.h2>

                {/* Button animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            y: -4,
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 16,
                        }}
                        className="inline-flex"
                    >
                        <Link
                            to="/contact"
                            className="group relative overflow-hidden bg-white mx-auto inline-flex items-center hover:text-black gap-3 px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest transition-colors"
                        >
                            {/* Animated background */}
                            <motion.span
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "0%" }}
                                transition={{
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute inset-0 bg-indigo-600"
                            />

                            {/* Text */}
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                                Start a conversation
                            </span>

                            {/* Icon */}
                            <motion.span
                                animate={{
                                    x: [0, 4, 0],
                                    y: [0, -2, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.8,
                                    ease: "easeInOut",
                                }}
                                className="relative z-10 group-hover:text-black hover:"
                            >
                                <MdArrowOutward size={18} />
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}