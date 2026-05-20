import { FaReact } from "react-icons/fa6";
import Archive from "../reuseables/Archive";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSupabase } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";


const projectCards = [
    {
        id: 1,
        image: "/images/Screenshot-3.jpg",
        label: "Radiant Health",
        year: 2025,
        url: "https://radiant-health-ea74.vercel.app",
        tool: [
            <FaReact className="text-blue-500" />,
            <RiTailwindCssFill className="text-sky-400" />,
            <SiSupabase className="text-green-400" />,
            <TbBrandFramerMotion className="text-pink-400" />,
        ],

        toolNames: ["React", "Tailwind", "Supabase", "Framer motion"],
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
        image: "/images/Screenshot-2.jpg",
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
        ]
    },
];





export default function WorkUi() {
    return (
        <main className="px-">
            <header className="px-6 md:px-10 py-20">
                <div className="max-w-7xl mx-auto">
                    <span className="text-[11px] text-indigo-600 uppercase tracking-[0.3em]">Work - 2025- 2026</span>
                    <h1 className="mt-6 text-white italic text-5xl md:text-7xl leading-[0.95] max-w-4xl">A small archive of Projects I've shipped.</h1>
                </div>
            </header>

            {/* Body of contents */}
            <div className="px-6">
                <Archive projectCards={projectCards} />
            </div>
        </main>
    )
}
