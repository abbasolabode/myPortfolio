import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gradient-to-br from-black via-zinc-950 to-black px-6 md:px-10 py-32 border-t border-stone-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-widest">

        {/* Copyright */}
        <motion.div variants={itemVariants}>
          <motion.p
            whileHover={{
              letterSpacing: "0.15em",
              color: "#ffffff",
            }}
            transition={{
              duration: 0.3,
            }}
            className="text-stone-500"
          >
            © 2026 Abbas Olabode
          </motion.p>
        </motion.div>

        {/* Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6"
        >
          {[
            {
              icon: <FaGithub className="" />,
              href: "https://github.com/abbasolabode",
            },
            {
              icon: <FaLinkedin className="text-blue-500" />,
              href: "https://www.linkedin.com/in/abbas-olabode",
            },
            {
              icon: <FaXTwitter />,
              href: "https://x.com/Unlimitedsido",
            },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative w-5 text-[20px] text-stone-500 overflow-hidden"
            >
              <motion.span
                variants={{
                  rest: {
                    y: 0,
                    opacity: 1,
                  },
                  hover: {
                    y: -3,
                    opacity: 1,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="block"
              >
                {link.icon}
              </motion.span>

              {/* Animated underline */}
              <motion.span
                variants={{
                  rest: {
                    scaleX: 0,
                    opacity: 0.5,
                  },
                  hover: {
                    scaleX: 1,
                    opacity: 1,
                  },
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-0 -bottom-1 h-[1px] w-full origin-left bg-stone-300"
              />

              {/* Glow effect */}
              <motion.span
                variants={{
                  rest: {
                    opacity: 0,
                  },
                  hover: {
                    opacity: 1,
                  },
                }}
                transition={{
                  duration: 0.25,
                }}
                className="absolute inset-0 rounded-md bg-white/5 blur-md"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}