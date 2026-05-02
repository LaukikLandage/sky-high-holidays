import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What type of trips do you offer?",
    answer: "We offer customized international and domestic tour packages including honeymoon trips, family vacations, corporate tours, and adventure travel across popular destinations like Maldives, Dubai, Bali, Kashmir, Kerala, and more."
  },
  {
    question: "Do you handle flights and visas?",
    answer: "Yes, we provide complete assistance for flights and visa processing as part of our all-inclusive packages. We ensure a hassle-free experience from the moment you book until you return."
  },
  {
    question: "How do I book a trip?",
    answer: "You can book via our website by filling out the enquiry form, or contact us directly via WhatsApp or Phone. Our travel experts will then customize the itinerary and guide you through the payment process."
  },
  {
    question: "What payment options are available?",
    answer: "We accept all major payment methods including UPI, Bank Transfers (IMPS/NEFT), Credit Cards, and Debit Cards. We offer secure payment gateways for your peace of mind."
  },
  {
    question: "Are your trips suitable for solo travelers?",
    answer: "Absolutely! We design special packages for solo travelers, ensuring safety, local support, and curated experiences that make your solo journey memorable and comfortable."
  },
  {
    question: "Will there be on-ground support?",
    answer: "Yes, we provide 24/7 on-ground support through our local representatives and dedicated concierge team. You'll always have someone to call in case of any assistance needed during your trip."
  }
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string, answer: string, isOpen: boolean, onToggle: () => void }) {
  return (
    <div 
      className={`group bg-white border rounded-[20px] transition-all duration-300 ${
        isOpen ? 'border-[#FF7A00] shadow-lg shadow-orange-50' : 'border-gray-100 hover:border-orange-300'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex items-center justify-between gap-4"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-[#FF7A00]' : 'text-[#020617]'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-[#FF7A00] text-white rotate-45' : 'bg-gray-50 text-gray-400 group-hover:bg-orange-50 group-hover:text-[#FF7A00]'
        }`}>
          <Plus className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-500 font-medium leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-10 md:py-14 lg:py-16 bg-[#F9FAFB] font-poppins">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-4">
            <HelpCircle className="w-4 h-4 text-[#FF7A00]" />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#020617] tracking-tight leading-tight">
            Everything You Need To Know <br />
            <span className="text-[#FF7A00]">Before You Travel</span>
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Still Have Questions? */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium mb-6">Still have more questions? We're here to help you.</p>
          <button className="px-8 py-4 bg-[#020617] text-white rounded-full font-bold hover:bg-[#FF7A00] hover:text-[#020617] transition-all duration-300 shadow-xl shadow-gray-200">
            Contact Support
          </button>
        </div>

      </div>
    </section>
  );
}
