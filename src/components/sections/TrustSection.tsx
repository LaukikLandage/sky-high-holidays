import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function TrustSection() {
  const trustItems = [
    {
      name: 'Google Reviews',
      rating: '4.9',
      count: '500+',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_logo_2015.svg',
      stars: 5
    },
    {
      name: 'Justdial',
      rating: '4.8',
      count: '350+',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Justdial_logo.png',
      stars: 5
    },
    {
      name: 'Trustpilot',
      rating: '4.7',
      count: '200+',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Trustpilot_logo.svg',
      stars: 5
    }
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#020617] tracking-tight">
            Trusted Travel & <span className="text-[#FF7A00]">Tourism Partner</span>
          </h2>
          <p className="text-gray-500 mt-2 font-medium">Recognized for excellence across major platforms</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group hover:shadow-orange-100/50 transition-all duration-500"
            >
              <div className="h-12 flex items-center justify-center mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="max-h-full max-w-[140px] object-contain"
                />
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(item.stars)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-[#FF7A00] text-[#FF7A00]" />
                ))}
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-[#020617]">{item.rating}</span>
                <span className="text-gray-400 font-bold">/ 5</span>
              </div>
              
              <p className="text-gray-500 text-sm font-semibold mt-1 uppercase tracking-widest">
                {item.count} Verified Reviews
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
