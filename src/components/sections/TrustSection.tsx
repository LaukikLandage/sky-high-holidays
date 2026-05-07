import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

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
    <section className="py-8 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-lg max-w-3xl mx-auto font-medium leading-relaxed text-gray-500">
            Discover trusted domestic and international tour packages with verified customer reviews, top-rated travel services, and memorable holiday experiences across India and worldwide.
          </p>
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
              
              <div className="flex gap-1 mb-0">
                {[...Array(item.stars)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-[#FF7A00] text-[#FF7A00]" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
