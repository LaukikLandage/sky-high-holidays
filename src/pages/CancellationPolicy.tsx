import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { PAGE_SEO } from '../lib/seoKeywords';

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-white pt-48 md:pt-56 pb-20 font-poppins">
      <SEO 
        title={PAGE_SEO.cancellationPolicy.title}
        description={PAGE_SEO.cancellationPolicy.description}
        canonicalUrl={PAGE_SEO.cancellationPolicy.canonical}
      />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-[#020617] mb-2">Cancellation Policy</h1>
            <p className="text-gray-400 text-sm font-medium">Standard Travel Guidelines</p>
          </div>

          <div className="prose prose-orange max-w-none space-y-10 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">Booking Cancellation</h2>
              <p>
                We understand that plans can change. All cancellation requests must be submitted in writing via email to <strong>ashwin@skyhightravelandtourism.com</strong> or via our official WhatsApp support channel. The date of receipt of the written request will be considered the official cancellation date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">Cancellation Charges</h2>
              <p>Cancellation charges vary depending on the package type and the timing of the request. Standard charges are as follows:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>30+ days before travel: Service fee + non-refundable supplier deposits.</li>
                <li>15-30 days before travel: 50% of the total package cost.</li>
                <li>0-14 days before travel: 100% of the total package cost (No refund).</li>
              </ul>
              <p className="mt-4 italic">Note: Peak season bookings (Christmas, New Year, Long Weekends) may have stricter cancellation terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">Refund Policy</h2>
              <p>
                Once a cancellation is approved, refunds will be processed after deducting applicable cancellation charges and transaction fees. Refunds are typically processed within 7-14 working days and will be credited back to the original payment source.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">No Show</h2>
              <p>
                In the event that a traveller does not arrive for their scheduled flight, hotel stay, or tour (No Show), 100% of the booking amount will be forfeited. No refunds or credits will be issued for unused portions of a travel package.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">Changes & Amendments</h2>
              <p>
                Any requests for changes to travel dates, destinations, or passenger details are subject to availability and the policies of our airline and hotel partners. Additional costs or amendment fees may apply.
              </p>
            </section>

            <section className="bg-orange-50/30 p-8 rounded-3xl border border-orange-100/50 text-sm">
              <p className="font-bold text-[#020617] mb-2">Important Disclaimer:</p>
              Sky High Holidays acts as a facilitator between travellers and service providers (Airlines, Hotels, Transporters). We are bound by the individual cancellation policies of these third-party suppliers.
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
