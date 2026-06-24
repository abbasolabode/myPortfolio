import { useNavigate } from "react-router-dom"

export default function ThankYou() {
    const navigate = useNavigate()

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center p-5 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden font-[family-name:--font-sans]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap');

                :root {
                    --font-sans: 'Plus Jakarta Sans', sans-serif;
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes checkmarkDraw {
                    0% {
                        stroke-dashoffset: 50;
                    }
                    100% {
                        stroke-dashoffset: 0;
                    }
                }

                @keyframes floatIcon {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-slide-up {
                    animation: slideUp 0.8s ease-out forwards;
                }

                .animate-slide-up-1 {
                    animation: slideUp 0.8s ease-out 0.2s forwards;
                }

                .animate-slide-up-2 {
                    animation: slideUp 0.8s ease-out 0.3s forwards;
                }

                .animate-slide-up-3 {
                    animation: slideUp 0.8s ease-out 0.4s forwards;
                }

                .animate-slide-up-4 {
                    animation: slideUp 0.8s ease-out 0.5s forwards;
                }

                .animate-slide-up-5 {
                    animation: slideUp 0.8s ease-out 0.6s forwards;
                }

                .animate-checkmark {
                    animation: checkmarkDraw 0.8s ease-out 0.6s forwards;
                }

                .animate-float {
                    animation: floatIcon 3s ease-in-out 1.4s infinite;
                }

                .checkmark-path {
                    stroke-dasharray: 50;
                }
            `}</style>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-radial from-indigo-500/8 to-transparent blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-radial from-blue-500/6 to-transparent blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-sm">
                <div className="bg-zinc-800/70 backdrop-blur-sm border border-indigo-500/10 rounded-3xl p-16 md:p-12 text-center shadow-xl">

                    {/* Checkmark Circle */}
                    {/*  <div className="animate-slide-up-1 mb-8 flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 animate-pulse animate-float">
                            <svg className="w-12 h-12" viewBox="0 0 52 52">
                                <path
                                    className="checkmark-path animate-checkmark"
                                    d="M 16.5 25.5 L 24 33 L 35.5 16.5"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div> */}

                    {/* Title */}
                    <h1 className="animate-slide-up-2 text-4xl md:text-5xl font-bold text-slate-100 mb-3 tracking-tight">
                        Thank You!
                    </h1>

                    {/* Subtitle */}
                    <p className="animate-slide-up-3 text-base font-semibold text-slate-400 mb-5 uppercase tracking-widest font-[family-name:--font-accent]">
                        Submission Received
                    </p>

                    {/* Message */}
                    <p className="animate-slide-up-4 text-sm text-slate-300 leading-relaxed mb-8 font-light">
                        Thank you for reaching out. You'll be reached out shortly!
                    </p>

                    {/* Button */}
                    <button
                        onClick={() => navigate("/")}
                        className="animate-slide-up-5 cursor-pointer w-full px-8 py-4 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95 hover:-translate-y-0.5 border border-indigo-500/20 hover:border-indigo-500/40 relative group overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                        <span className="relative">Go Back Home</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
