import { motion } from "framer-motion";

export default function Archive({ projectCards = [], leftSlide }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">

            {projectCards.map((card) => (
                <motion.div
                    key={card.id}
                    variants={leftSlide}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="flex flex-col gap-5"
                >
                    <motion.a
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            y: -8,
                            scale: 1.01,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 180,
                            damping: 18,
                        }}
                        className="overflow-hidden bg-surface aspect-4/5 rounded-sm border block"
                    >
                        <motion.img
                            src={card.image}
                            alt={card.label}
                            whileHover={{
                                scale: 1.08,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="w-full h-full object-cover rounded-2xl "
                        />
                    </motion.a>

                    {/* TEXT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.15,
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex flex-col space-y-1.5"
                    >
                        <div className="flex justify-between items-start py-1.5 px-1.5">
                            <h3 className="text-2xl italic text-white">
                                {card.label}
                            </h3>

                            <span className="text-[10px] rounded-sm py-1 px-2 border border-stone-200 text-white">
                                {card.year}
                            </span>
                        </div>

                        {/* ICONS */}
                        <div className="text-sm mt-1 text-stone-500 px-1.5 flex flex-wrap items-center gap-4">

                            {card?.toolNames && Array.isArray(card.toolNames) && card.toolNames.length > 0 && typeof card.toolNames[0] === 'object'
                                ? card.toolNames.map((item, index) => (
                                    <motion.span
                                        key={item.id || index}
                                        whileHover={{
                                            y: -6,
                                            scale: 1.25,
                                            rotate: 6,
                                        }}
                                        whileTap={{
                                            scale: 0.9,
                                        }}
                                        animate={{
                                            y: [0, -2, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "mirror",
                                            delay: index * 0.2,
                                            type: "spring",
                                        }}
                                        className="border border-stone-600 rounded-full flex items-center gap-2 px-3 py-1.5 md:text-sm text-xs cursor-pointer hover:border-stone-400 transition-colors"
                                    >
                                        <span className="text-lg flex-shrink-0">
                                            {item.icon}
                                        </span>
                                        <span className="text-xs whitespace-nowrap">
                                            {item.label}
                                        </span>
                                    </motion.span>
                                ))
                                : card?.tool && Array.isArray(card.tool) && card.tool.map((item, index) => (
                                    <motion.span
                                        key={index}
                                        whileHover={{
                                            y: -6,
                                            scale: 1.25,
                                            rotate: 6,
                                        }}
                                        whileTap={{
                                            scale: 0.9,
                                        }}
                                        animate={{
                                            y: [0, -2, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "mirror",
                                            delay: index * 0.2,
                                            type: "spring",
                                        }}
                                        className="text-2xl cursor-pointer flex-shrink-0"
                                    >
                                        {typeof item === 'object' && item !== null ? (
                                            <>
                                                <span className="text-lg flex-shrink-0">{item.icon}</span>
                                                <span className="text-xs whitespace-nowrap">{item.label}</span>
                                            </>
                                        ) : item}
                                    </motion.span>
                                ))
                            }
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}
