import { motion } from "framer-motion";

export default function ResumeButton({ onClick }) {
    const handleClick = (e) => {
        e && e.preventDefault();
        if (typeof onClick === "function") onClick(e);
        const link = document.createElement("a");
        link.href = "/resume/abbas-olabode-resume.pdf";
        link.download = "Abbas_Resume.pdf";
        link.click();

    };

    return (
        <motion.button
            onClick={handleClick}
            aria-label="Download resume"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }}
            whileHover={{ y: -4, scale: 1.02, boxShadow: "0 18px 40px rgba(0,0,0,0.6)" }}
            whileTap={{ scale: 0.98 }}
            className={
                "inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white focus:outline-none transition-transform will-change-transform"
            }
            style={{
                background:
                    "linear-gradient(180deg, #0b0b0b 0%, #131313 50%, #1f1f1f 100%)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.04)",
                backdropFilter: "saturate(120%) blur(4px)",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span style={{ letterSpacing: "0.2px" }}>Download Resume</span>
        </motion.button>
    );
}


