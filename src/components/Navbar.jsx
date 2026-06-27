import { IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxDotFilled } from "react-icons/rx";

const navLinks = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/work", label: "Work" },
  { id: 3, path: "/about", label: "About" },
  { id: 4, path: "/contact", label: "Contact" },
];

const logoChars = "Abbas Olabode".split("");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10 lg:flex lg:justify-evenly min-[820px]:flex min-[820px]:justify-between min-[820px]:space-x-4">

      {/* TOP BAR */}
      <div className="w-full flex justify-between items-center px-8 min-h-15.75">

        {/* ── Logo ── */}
        <Link
          to="/"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex items-center tracking-widest text-sm italic font-light"
        >
          {/* Letters */}
          <span className="flex">
            {logoChars.map((char, i) => (
              <motion.span
                key={i}
                animate={{
                  y: isHovered ? -4 : 0,
                  color: isHovered ? "#3b82f6" : "#ffffff",
                }}
                transition={{
                  delay: isHovered ? i * 0.03 : (logoChars.length - i) * 0.02,
                  duration: 0.35,
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="inline-block text-sm font-normal"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>

          {/* Sliding underline */}
          <motion.span
            className="absolute bottom-[-3px] left-0 h-[1px] bg-gradient-to-r from-blue-500 to-indigo-400"
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </Link>

        {/* Burger */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-1 h-10 flex lg:hidden min-[820px]:hidden items-center justify-center text-white"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {isOpen ? <IoClose size={28} /> : <CiMenuBurger size={28} />}
          </motion.div>
        </motion.button>
      </div>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-6 py-10 bg-black/95 border-t border-white/10">
              <ul className="flex flex-col gap-8 uppercase tracking-widest text-sm text-white">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 30, scale: 0.95 }}
                    transition={{
                      delay: index * 0.08,
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                    }}
                  >
                    <Link
                      onClick={() => setIsOpen(false)}
                      to={link.path}
                      className="relative text-stone-500 uppercase transition-colors duration-300 hover:text-blue-500"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* DESKTOP NAV */}
      <nav className="hidden pr-6 lg:flex lg:gap-50 items-center w-full min-[820px]:flex min-[820px]:gap-10">
        <ul className="text-stone-500 uppercase tracking-wider text-sm flex gap-10 items-center">
          {navLinks.map(link => (
            <Link to={link.path} key={link.id}>{link.label}</Link>
          ))}
        </ul>
        <div className="text-white flex items-center">
          <span><RxDotFilled size={20} className="animate-pulse text-green-500" /></span>
          <p className="text-stone-500 uppercase tracking-wider text-sm">Available</p>
        </div>
      </nav>
    </header>
  );
}