import { FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { SiSupabase } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { motion } from "framer-motion";


const stack = [
    {
        id: 1,
        tool: "JavaScript",
        icon: <DiJavascript />,
        color: "#F7DF1E"
    },
    {
        id: 2,
        tool: "Tailwind",
        icon: <RiTailwindCssFill />,
        color: "#06B6D4"
    },
    {
        id: 3,
        tool: "React",
        icon: <FaReact />,
        color: "#61DAFB"
    },
    {
        id: 4,
        tool: "HTML5",
        icon: <FaHtml5 />,
        color: "#E34C26"
    },
    {
        id: 5,
        tool: "GitHub",
        icon: <FaGithub />,
        color: "#FFFFFF"
    },
    {
        id: 6,
        tool: "CSS3",
        icon: <IoLogoCss3 />,
        color: "#264BDC"
    },
    {
        id: 7,
        tool: "Supabase",
        icon: <SiSupabase />,
        color: "#3ECF8E"
    },
    {
        id: 8,
        tool: "Vercel",
        icon: <IoLogoVercel />,
        color: "#FFFFFF"
    },
];

const headerVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function StackUi() {
    return (
        <section className="relative w-full px-5 py-20 md:px-10 md:py-32 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    className="mb-16 md:mb-24"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                        Stack
                    </h2>
                    <p className="text-sm md:text-base font-medium text-slate-400 uppercase tracking-widest">
                        Tools of the trade
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {stack.map((tool) => (
                        <motion.div
                            key={tool.id}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                transition: {
                                    duration: 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            }}
                            className="group relative p-6 md:p-8 bg-slate-800/50 backdrop-blur-sm border border-indigo-500/10 rounded-2xl flex flex-col items-center justify-center gap-3 md:gap-4 cursor-pointer transition-all duration-300 hover:bg-slate-800/80 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10"
                        >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                            </div>

                            {/* Icon wrapper */}
                            <motion.div
                                className="relative z-10 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-xl border border-indigo-500/20 group-hover:from-indigo-500/20 group-hover:to-blue-500/20 group-hover:border-indigo-500/40 transition-all duration-300"
                                whileHover={{
                                    y: -2,
                                }}
                            >
                                <motion.div
                                    className="text-2xl md:text-3xl"
                                    style={{ color: tool.color }}
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 5,
                                        transition: {
                                            duration: 0.3,
                                            ease: [0.22, 1, 0.36, 1],
                                        },
                                    }}
                                >
                                    {tool.icon}
                                </motion.div>
                            </motion.div>

                            {/* Label */}
                            <p className="relative z-10 text-xs md:text-sm font-semibold text-slate-300 text-center tracking-wide group-hover:text-slate-100 transition-colors duration-300">
                                {tool.tool}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
