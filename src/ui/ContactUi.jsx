import { SyncLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import { useContact } from "../hooks/useContact";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";



const socialLinks = [
    {
        id: 1,
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/abbas-olabode"
    },

    {
        id: 2,
        icon: <FaXTwitter />,
        path: "https://x.com/Unlimitedsido"
    },

    {
        id: 3,
        icon: <FaGithub />,
        path: "https://github.com/abbasolabode",
    },
]




export default function ContactUi() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm();
    //Destructured properties from useContact custom hook
    const { mutate, isPending } = useContact();


    const onSubmit = function (formData) {
        if (!formData) return;
        mutate(formData, {
            onSettled: () => reset(),
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="px-4 md:px-10 lg:px-20 py-5"
        >
            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl pt-20"
            >
                <p className="text-[11px] text-indigo-500 uppercase tracking-[0.35em]">
                    Contact — initiate connection
                </p>

                <h1 className="mt-6 text-stone-200 font-serif italic text-4xl md:text-7xl leading-[0.95]">
                    Let's build <span className="text-stone-500">something good.</span>
                </h1>
            </motion.div>

            {/* FORM */}
            <motion.form
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-14 max-w-4xl space-y-10"
            >
                {/* GRID 1 */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* NAME */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="flex flex-col gap-2"
                    >
                        <label className="text-xs uppercase tracking-widest text-stone-400">
                            Your name
                        </label>

                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            disabled={isSubmitting || isPending}
                            type="text"
                            placeholder="Abbas Dev"
                            {...register("name", {
                                required: "Name is required",
                            })}
                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-4 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition backdrop-blur-md"
                        />

                        {errors.name && (
                            <small className="text-red-400 text-[11px]">
                                {errors.name.message}
                            </small>
                        )}
                    </motion.div>

                    {/* EMAIL */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="flex flex-col gap-2"
                    >
                        <label className="text-xs uppercase tracking-widest text-stone-400">
                            Email
                        </label>

                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            disabled={isSubmitting || isPending}
                            type="email"
                            placeholder="abbas@developer.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            },)}
                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-4 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition backdrop-blur-md"
                        />

                        {errors.email && (
                            <small className="text-red-400 text-[11px]">
                                {errors.email.message}
                            </small>
                        )}
                    </motion.div>
                </section>

                {/* GRID 2 */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* SUBJECT */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="flex flex-col gap-2"
                    >
                        <label className="text-xs uppercase tracking-widest text-stone-400">
                            Subject
                        </label>

                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            disabled={isSubmitting || isPending}
                            type="text"
                            placeholder="Project Inquiry"
                            {...register("subject", {
                                required: "Subject is required",
                            })}
                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-4 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition backdrop-blur-md"
                        />

                        {errors.subject && (
                            <small className="text-red-400 text-[11px]">
                                {errors.subject.message}
                            </small>
                        )}
                    </motion.div>

                    {/* MESSAGE */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="flex flex-col gap-2"
                    >
                        <label className="text-xs uppercase tracking-widest text-stone-400">
                            Message
                        </label>

                        <motion.textarea
                            whileFocus={{ scale: 1.02 }}
                            disabled={isSubmitting || isPending}
                            rows="5"
                            placeholder="Write your message..."
                            {...register("message", {
                                required: "Message is required",
                            })}
                            className="w-full bg-white/5 border border-white/10 text-white px-4 py-4 rounded-xl outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition backdrop-blur-md"
                        />

                        {errors.message && (
                            <small className="text-red-400 text-[11px]">
                                {errors.message.message}
                            </small>
                        )}
                    </motion.div>
                </section>

                {/* BUTTON */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4 flex items-center gap-3 "
                >
                    <motion.button
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0px 0px 30px rgba(99,102,241,0.35)",
                        }}
                        whileTap={{ scale: 0.96 }}
                        disabled={isSubmitting || isPending}
                        type="submit"
                        className="group flex items-center text-black gap-3 bg-white hover:bg-indigo-500 hover:text-white transition px-7 py-4 rounded-xl text-sm uppercase tracking-widest"
                    >
                        {isPending || isSubmitting ? (
                            "Submitting..."
                        ) : (
                            <>
                                Send message

                                <motion.span
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.5,
                                    }}
                                >
                                    <FiSend />
                                </motion.span>
                            </>
                        )}
                    </motion.button>
                    {/* Spinner container */}
                    <span>
                        {(isPending || isSubmitting) && <SyncLoader size="14px" color="#ffffff" />}
                    </span>
                </motion.div>
            </motion.form>

            {/* CONTACT DETAILS */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10"
            >
                {/* EMAIL CARD */}
                <motion.div
                    whileHover={{
                        y: -8,
                        scale: 1.01,
                    }}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                >
                    <small className="text-[11px] uppercase tracking-[0.3em] text-stone-400">
                        Email
                    </small>

                    <p className="mt-3 text-white text-lg md:text-xl font-medium break-all">
                        olabodeabbas80@gmail.com
                    </p>

                    <p className="mt-2 text-stone-400 text-sm">
                        Feel free to reach out anytime — I usually reply within 24 hours.
                    </p>
                </motion.div>

                {/* SOCIAL CARD */}
                <motion.div
                    whileHover={{
                        y: -8,
                        scale: 1.01,
                    }}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between"
                >
                    <small className="text-[11px] uppercase tracking-[0.3em] text-stone-400">
                        Socials
                    </small>

                    <div className="mt-6 flex gap-5 text-sm">
                        {socialLinks.map((item) => (
                            <motion.a
                                target="_blank"
                                rel="noopener noreferrer"
                                key={item.id}
                                href={item.path}
                                whileHover={{ x: 8 }}
                                className="text-stone-300 hover:text-white transition relative w-fit group"
                            >
                                {item.icon}

                                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                            </motion.a>
                        ))}
                    </div>

                    <p className="mt-8 text-[11px] text-stone-500">
                        Let’s build something meaningful together.
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}