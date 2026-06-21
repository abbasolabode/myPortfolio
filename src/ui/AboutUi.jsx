import { motion } from "framer-motion";
import { FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { FiFramer } from "react-icons/fi";
import { SiVite, SiSupabase } from "react-icons/si";
import { IoLogoVercel, } from "react-icons/io5";

const frontendSkills = [
    {
        id: 1,
        skill: "React JS",
        icon: <FaReact className="text-[#61DBFB]" />,
    },

    {
        id: 2,
        skill: "JavaScript",
        icon: <DiJavascript className="text-yellow-400" />,
    },
];

const backendSkills = [
    {
        id: 1,
        skill: "Supabase",
        icon: <SiSupabase className="text-green-400" />,
    },
];

const toolingSkills = [
    {
        id: 1,
        skill: "Vite",
        icon: <SiVite className="text-purple-400" />,
    },

    {
        id: 2,
        skill: "Git / GitHub",
        icon: <FaGithub className="text-white" />,
    },

    {
        id: 3,
        skill: "Vercel",
        icon: <IoLogoVercel className="text-white" />,
    },
];

const styling = [
    {
        id: 1,
        skill: "CSS",
        icon: <IoLogoCss3 className="text-blue-500" />,
    },

    {
        id: 2,
        skill: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-cyan-400" />,
    },

    {
        id: 3,
        skill: "HTML",
        icon: <FaHtml5 className="text-orange-500" />,
    },

    {
        id: 4,
        skill: "Framer Motion",
        icon: <FiFramer className="text-pink-400" />,
    },
];

export default function AboutUi() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },

        show: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const stagger = {
        hidden: {},

        show: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=" md:px-10 py-20 overflow-hidden"
        >
            {/* HEADER */}
            <div className="max-w-7xl mx-auto">
                <motion.section
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.p
                        variants={fadeUp}
                        className="text-[11px] text-indigo-600 font-bold uppercase tracking-[0.3em]"
                    >
                        About
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        className="mt-6 text-white font-display italic text-5xl md:text-7xl leading-[0.95] max-w-4xl"
                    >
                        Building digital systems with focus on structure &
                        sensory experience.
                    </motion.h1>
                </motion.section>

                {/* CONTENT */}
                <section className="grid md:grid-cols-12 gap-12 mt-24">

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="md:col-span-4"
                    >
                        <motion.figure
                            whileHover={{
                                y: -10,
                                rotate: -1.5,
                                scale: 1.02,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 18,
                            }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-surface"
                        >

                            {/* Glow background */}
                            <motion.div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 transition duration-700 z-10" />

                            {/* Shine sweep */}
                            <motion.div
                                initial={{ x: "-120%" }}
                                whileHover={{ x: "120%" }}
                                transition={{
                                    duration: 1.4,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-y-0 w-[20%] bg-white/10 blur-2xl rotate-12 z-20"
                            />

                            {/* Image */}
                            <motion.img
                                loading="lazy"
                                src="./images/myPic-3.jpg"
                                alt="About Abbas"
                                whileHover={{
                                    scale: 1.12,
                                }}
                                transition={{
                                    duration: 1.2,
                                    ease: "easeOut",
                                }}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-700" />

                            {/* Bottom gradient */}
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        </motion.figure>
                    </motion.div>

                    {/* TEXT */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="md:col-span-8 space-y-6 text-white text-lg leading-relaxed"
                    >
                        {[
                            "I am a frontend developer who loves building fast and user friendly web applications. For me, good development is a mix of clean code and sharp design. I focus on the small details like typography, smooth animations, and responsiveness that make an interface feel natural to use. My main stack includes React, Supabase, and Tailwind CSS. Beyond the specific tools, my priority is always writing code that is scalable, accessible, and highly optimized. I have built projects ranging from sleek business websites to interactive web applications, focusing on creating great tools for users. Outside of coding, I am usually checking out new design trends, playing with interface animations, or learning new tech to sharpen my skills.",
                        ].map((text, index) => (
                            <motion.p
                                key={index}
                                variants={fadeUp}
                                className="text-stone-300"
                            >
                                {text}
                            </motion.p>
                        ))}
                    </motion.div>
                </section>
            </div>

            {/* CAPABILITIES */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="text-white px-6 md:px-10 py-24 mt-24  backdrop-blur-xl"
            >
                <div className="max-w-7xl mx-auto">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-semibold italic text-3xl md:text-4xl mb-16"
                    >
                        Capabilities
                    </motion.h2>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {[
                            {
                                title: "Frontend",
                                skills: frontendSkills,
                            },

                            {
                                title: "Backend",
                                skills: backendSkills,
                            },

                            {
                                title: "Styling",
                                skills: styling,
                            },

                            {
                                title: "Tooling",
                                skills: toolingSkills,
                            },
                        ].map((group, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 180,
                                }}
                                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg"
                            >
                                <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-6">
                                    {group.title}
                                </p>

                                <div className="space-y-4">
                                    {group.skills.map((skill) => (
                                        <motion.div
                                            key={skill.id}
                                            whileHover={{ x: 6 }}
                                            className="flex items-center gap-3 text-stone-300 hover:text-white transition"
                                        >
                                            <span className="text-xl">
                                                {skill.icon}
                                            </span>

                                            <p className="text-sm">
                                                {skill.skill}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}