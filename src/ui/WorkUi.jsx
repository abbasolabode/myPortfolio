import { FaReact } from "react-icons/fa6";
import Archive from "../reuseables/Archive";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSupabase } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion";

const projectCards = [
    {
        id: 1,
        image: "/images/iPhone-14-radiant-health.png",
        label: "Radiant Health",
        year: 2025,
        url: "https://radiant-health-ea74.vercel.app",
        tool: [
            <FaReact className="text-blue-500" />,
            <RiTailwindCssFill className="text-sky-400" />,
            <SiSupabase className="text-green-400" />,
            <TbBrandFramerMotion className="text-pink-400" />,
        ],
        toolNames: [
            {
                id: 1,
                label: "React",
                icon: <FaReact className="text-blue-500" />,
            },
            {
                id: 2,
                label: "Tailwind",
                icon: <RiTailwindCssFill className="text-blue-500" />,
            },
            {
                id: 3,
                label: "Supabase",
                icon: <SiSupabase className="text-green-300" />,
            },
        ],
    },
    {
        id: 2,
        image: "/images/iPhone-reinaflo.png",
        label: "Reina Flo",
        year: 2026,
        url: "https://reinaflo.vercel.app",
        tool: [
            <FaReact className="text-blue-500" />,
            <RiTailwindCssFill className="text-sky-400" />,
            <SiSupabase className="text-green-400" />,
            <TbBrandFramerMotion className="text-pink-400" />,
        ],
        toolNames: [
            {
                id: 1,
                label: "React",
                icon: <FaReact className="text-blue-500" />,
            },
            {
                id: 2,
                label: "Tailwind",
                icon: <RiTailwindCssFill className="text-blue-500" />,
            },
            {
                id: 3,
                label: "Supabase",
                icon: <SiSupabase className="text-green-400" />,
            },
        ],
    },
    {
        id: 3,
        image: "/images/iPhone-14.png",
        label: "AI-Integration",
        year: 2026,
        url: "https://ai-integration-rho.vercel.app/",
        tool: [
            <FaReact className="text-blue-500" />,
            <RiTailwindCssFill className="text-sky-400" />,
            <SiSupabase className="text-green-400" />,
            <TbBrandFramerMotion className="text-pink-400" />,
        ],
        toolNames: [
            {
                id: 1,
                label: "React",
                icon: <FaReact className="text-blue-500" />,
            },
            {
                id: 2,
                label: "Tailwind",
                icon: <RiTailwindCssFill className="text-blue-500" />,
            },
            {
                id: 3,
                label: "Supabase",
                icon: <SiSupabase className="text-green-400" />,
            },
        ],
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

const words = "A small archive of projects I've shipped.".split(" ");

export default function WorkUi() {
    return (
        <main>
            <header className="px-6 md:px-10 py-20">
                <div className="max-w-7xl mx-auto">

                    {/* Eyebrow */}
                    <motion.div
                        variants={fadeUp}
                        custom={0}
                        initial="hidden"
                        animate="show"
                        className="flex items-center gap-3 mb-8"
                    >
                        <span className="block w-8 h-[1px] bg-indigo-500"></span>
                        <span className="text-[11px] text-indigo-400 uppercase tracking-[0.3em] font-medium">
                            Work — 2025 – 2026
                        </span>
                    </motion.div>

                    {/* Heading — word by word */}
                    <h1 className="text-white text-5xl md:text-7xl leading-[1.05] max-w-4xl font-light tracking-tight flex flex-wrap gap-x-4">
                        {words.map((word, i) => (
                            <span key={i} className="overflow-hidden inline-block">
                                <motion.span
                                    className="inline-block"
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.2 + i * 0.08,
                                        duration: 0.65,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                >
                                    {word === "projects" ? (
                                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-300 to-white">
                                            {word}
                                        </span>
                                    ) : word}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    {/* Subtext */}
                    <motion.p
                        variants={fadeUp}
                        custom={2}
                        initial="hidden"
                        animate="show"
                        className="mt-6 text-stone-500 text-base md:text-lg font-light leading-relaxed max-w-xl tracking-wide"
                    >
                        Selected work across frontend development — from healthcare platforms to personal brand showcases.
                    </motion.p>

                    {/* Divider — draw animation */}
                    <motion.div
                        className="mt-12 h-[0.5px] bg-gradient-to-r from-white/10 via-indigo-500/30 to-transparent"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.9, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    />

                </div>
            </header>

            {/* Body of contents */}
            <div className="px-6 py-8">
                <Archive projectCards={projectCards} />
            </div>
        </main>
    );
}