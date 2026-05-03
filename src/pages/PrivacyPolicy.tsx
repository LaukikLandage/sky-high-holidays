import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="min-h-screen bg-white pt-48 md:pt-56 pb-20 font-poppins">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-[#020617] mb-2">Privacy Policy</h1>
            <p className="text-gray-400 text-sm font-medium">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-orange max-w-none space-y-10 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">Introduction</h2>
              <p>
                At Sky High Holidays, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us when using our services or website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">Information We Collect</h2>
              <p>We may collect the following types of information to provide you with a seamless booking experience:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Personal identifiers (Name, phone number, email address).</li>
                <li>Travel preferences and special requirements.</li>
                <li>Booking details and transaction history.</li>
                <li>Identity documents (when required for international travel bookings).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">How We Use Your Information</h2>
              <p>Your data is used primarily to facilitate your travel arrangements, including:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Processing and confirming your bookings.</li>
                <li>Providing customer support and travel assistance.</li>
                <li>Communicating important updates regarding your trip.</li>
                <li>Improving our services and website user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">Data Protection</h2>
              <p>
                We implement industry-standard security measures and encryption protocols to protect your personal information from unauthorized access, alteration, or disclosure. Your trust is our priority.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#020617] mb-4">Third-Party Sharing</h2>
              <p>
                To complete your travel bookings, we may share necessary details with trusted travel partners, including hotels, airlines, and local ground handlers. We ensure that these partners adhere to strict data protection standards and use your information solely for booking purposes.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold text-[#020617] mb-4">Contact Us</h2>
              <p className="mb-4">If you have any questions or concerns regarding our privacy practices, please reach out to us:</p>
              <div className="font-bold text-[#020617]">
                Phone: +91 8700558065<br />
                Email: ashwin@skyhightravelandtourism.com
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
