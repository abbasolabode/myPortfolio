import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useHandleOutsideClick } from "../hooks/useHandleOutsideClick";

export default function Modal() {
    const { isOpen, handleCloseModal, ref } = useHandleOutsideClick();


    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 z-50"
                    role="dialog"
                    aria-modal="true"
                    aria-label="AI integration status"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    onClick={handleCloseModal}
                >
                    <motion.div
                        ref={ref}
                        className="relative w-full max-w-md bg-gradient-to-b from-gray-600 via-gray-600 to-black text-gray-100 rounded-xl shadow-lg p-6 text-center ring-1 ring-gray-800"
                        initial={{ scale: 0.75, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.75, opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={handleCloseModal} aria-label="Close modal" type="button" className="absolute cursor-pointer top-3 right-3 p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        <h2 className="text-xl font-semibold mb-2">AI Integration Project — In Progress</h2>
                        <p className="text-sm text-white mb-4">The AI-integration project is currently in progress and will be completed soon. You can still explore the completed parts of it.</p>

                        <motion.div className="flex gap-3 justify-center">
                            <Link to="/work" className="inline-flex items-center cursor-pointer px-4 py-2 bg-gray-500/50 hover:bg-gray-600 text-white rounded-md font-semibold" type="button">View Completed</Link>
                            <button onClick={handleCloseModal} className="inline-flex items-center cursor-pointer px-4 py-2 border border-slate-300 dark:border-slate-700 text-white dark:text-slate-100 bg-transparent rounded-md" type="button">Close</button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}