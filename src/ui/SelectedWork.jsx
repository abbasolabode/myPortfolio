import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSupabase } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import Archive from "../reuseables/Archive";

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
            {/* <SiSupabase className="text-green-400" />, */ },
            <TbBrandFramerMotion className="text-pink-400" />,
        ],
    },


    {
        id: 3,
        image: "/images/iPhone-14.png",
        label: "AI Integration",
        year: 2026,
        url: "https://ai-integration-rho.vercel.app/",
        tool: [
            <FaReact className="text-blue-500" />,
            <RiTailwindCssFill className="text-sky-400" />,
            <SiSupabase className="text-green-400" />,
            <TbBrandFramerMotion className="text-pink-400" />,
        ],
    },
];

const leftSlide = {
    hidden: {
        opacity: 0,
        x: -40,
        y: 20,
    },

    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};

export default function SelectedWork() {
    return (
        <section className="px-6 md:px-10 py-10 border-b border-stone-500">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex justify-between items-baseline mb-4 pb-8">
                    <h2 className="font-display italic text-4xl md:text-5xl text-white px-4 py-6">
                        Selected Work
                    </h2>

                    <span className="text-[10px] whitespace-nowrap uppercase tracking-widest text-stone-500">
                        (01 - 03)
                    </span>
                </div>

                {/* GRID */}
                <Archive projectCards={projectCards} leftSlide={leftSlide} />

                {/* Navigation */}
                <div className="flex justify-center items-center mt-10">
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            y: -3,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 18,
                        }}
                    >
                        <Link
                            to="/work"
                            className="inline-flex text-white items-center gap-2 text-sm uppercase tracking-widest transition-colors"
                        >
                            ALL PROJECTS <MdArrowOutward />
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}