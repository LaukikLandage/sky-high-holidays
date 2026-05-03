import { motion } from 'framer-motion';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white pt-48 md:pt-56 pb-20 font-poppins">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-[#020617] mb-2">Terms & Conditions</h1>
            <p className="text-gray-400 text-sm font-medium">Service Agreement</p>
          </div>

          <div className="prose prose-orange max-w-none space-y-10 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">Booking Agreement</h2>
              <p>
                By booking a travel package with Sky High Holidays, you enter into a legal agreement. All bookings are subject to availability and formal confirmation from our side. We reserve the right to correct any errors in pricing or itinerary even after a booking is initiated.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">Payments</h2>
              <p>To secure your booking, a partial or full payment is required as per the specific package terms. Standard payment guidelines include:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Initial deposit at the time of booking to secure flights/hotels.</li>
                <li>Final balance payment must be cleared at least 30 days before the travel date.</li>
                <li>Failure to pay the balance may result in the cancellation of the booking.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">Travel Responsibility</h2>
              <p>
                It is the customer's responsibility to ensure they possess valid travel documents, including passports (with at least 6 months validity), visas, and health certificates where required. Travellers must adhere to local laws and customs of the destinations visited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">Liability</h2>
              <p>
                Sky High Holidays acts as an agent for airlines, hotels, and tour operators. We are not liable for any delays, cancellations, injuries, losses, or damages caused by these external service providers or by factors beyond our control (e.g., weather, strikes, natural disasters).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">Pricing</h2>
              <p>
                All prices are subject to change without prior notice due to fluctuations in fuel surcharges, government taxes, or currency exchange rates. The final price will be confirmed at the time of ticket issuance or full payment.
              </p>
            </section>

            <section className="bg-[#020617] text-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-xl font-bold text-white mb-4">Acceptance</h2>
              <p className="text-gray-300">
                By making a payment or confirming a booking, you acknowledge that you have read, understood, and agreed to be bound by all the terms and conditions outlined by Sky High Holidays.
              </p>
              <p className="mt-6 text-[#FF7A00] font-black uppercase tracking-widest text-sm">
                Sky High Holidays — Your Premium Travel Partner
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
