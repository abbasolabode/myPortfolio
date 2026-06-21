import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";


const socials = [
    {
        icon: <FaLinkedin className="text-2xl" />,
        label: "LinkedIn",
        href: "https://linkedin.com/in/your-profile",
        color: "hover:text-blue-600",
        bgColor: "hover:bg-blue-100",
    },
    {
        icon: <FaGithub className="text-2xl" />,
        label: "GitHub",
        href: "https://github.com/your-profile",
        color: "hover:text-gray-800",
        bgColor: "hover:bg-gray-100",
    },
    {
        icon: <FaXTwitter className="text-2xl" />,
        label: "Twitter",
        href: "https://twitter.com/your-profile",
        color: "hover:text-black",
        bgColor: "hover:bg-gray-100",
    },
    {
        icon: <MdEmail className="text-2xl" />,
        label: "Email",
        href: "mailto:your-email@example.com",
        color: "hover:text-red-600",
        bgColor: "hover:bg-red-100",
    },
    {
        icon: <MdPhone className="text-2xl" />,
        label: "Phone",
        href: "tel:+1234567890",
        color: "hover:text-green-600",
        bgColor: "hover:bg-green-100",
    },
];



// Animation variants for the slider tray
const trayVariants = {
    hidden: {
        x: -120,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.6,
        },
    },
    exit: {
        x: -120,
        opacity: 0,
        transition: {
            duration: 0.4,
        },
    },
};

// Animation variants for individual social items
const itemVariants = {
    hidden: {
        opacity: 0,
        x: -20,
    },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.4,
        },
    }),
};

export default function SocialSliderTray() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsVisible((current) => !current);
        }, 20000);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            className="fixed bottom-10 left-0 z-40"
            variants={trayVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            exit="exit"
        >
            {/* Main Tray Container */}
            <div className="flex items-center gap-4 px-5 py-6 bg-white rounded-r-2xl shadow-2xl backdrop-blur-sm border border-gray-200">
                {/* Vertical Divider Line */}
                <div className="w-1 h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent rounded-full"></div>

                {/* Social Links Container */}
                <div className="flex flex-col gap-3">
                    {socials.map((social, i) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target={social.label !== "Email" && social.label !== "Phone" ? "_blank" : "_self"}
                            rel={social.label !== "Email" && social.label !== "Phone" ? "noopener noreferrer" : ""}
                            className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-gray-700 transition-all duration-300 ${social.bgColor} ${social.color} shadow-md hover:shadow-lg`}
                            variants={itemVariants}
                            custom={i}
                            whileHover={{
                                scale: 1.15,
                                y: -5,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            title={social.label}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                {/* Vertical Divider Line */}
                <div className="w-1 h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent rounded-full"></div>

                {/* Side Label (Optional) */}
                <div className="hidden md:flex flex-col items-center gap-1 ml-2">
                    <span className="text-xs font-semibold text-gray-600 tracking-widest">CONNECT</span>
                    <div className="w-6 h-0.5 bg-gradient-to-r from-gray-400 to-transparent"></div>
                </div>
            </div>

        </motion.div>
    )
}
