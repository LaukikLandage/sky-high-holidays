import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export function FloatingContactButtons() {
  const phoneNumber = "918700558067";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const callUrl = `tel:+${phoneNumber}`;

  return (
    <div className="fixed bottom-8 right-6 z-[100] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-shadow group relative"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>

        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={callUrl}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        className="w-14 h-14 bg-[#111111] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#111111]/40 transition-shadow group relative"
        aria-label="Call Us"
      >
        <FaPhoneAlt className="w-6 h-6" />

        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </motion.a>
    </div>
  );
}
