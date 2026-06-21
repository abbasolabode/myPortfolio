import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/2347065560628"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with PrimeTouch Cleaning Services on WhatsApp"
            className="fixed bottom-5 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 hover:scale-110 transition-all duration-300 "
        >
            <FaWhatsapp size={26} />
        </a>
    );
}
