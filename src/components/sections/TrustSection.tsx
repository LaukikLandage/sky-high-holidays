import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function TrustSection() {
  const trustItems = [
    {
      name: 'Google Reviews',
      rating: '4.9',
      count: '500+',
      logo: '/recognition/google.png',
      stars: 5,
      url: 'https://www.google.com/search?q=Sky+High+Holidays+Pune+Reviews',
      accent: '#020617',
      logoWidth: 'w-[180px] md:w-[200px]'
    },
    {
      name: 'Justdial',
      rating: '4.8',
      count: '350+',
      logo: '/recognition/justdial.png',
      stars: 5,
      url: 'https://www.justdial.com/Pune/Sky-High-Holidays-Wanowrie/020PXX20.XX20.180214151445.U3C9',
      accent: '#020617',
      logoWidth: 'w-[160px] md:w-[180px]'
    },
    {
      name: 'Trustpilot',
      rating: '4.7',
      count: '200+',
      logo: '/recognition/trustpilot.png',
      stars: 5,
      url: 'https://www.trustpilot.com/search?query=Sky+High+Holidays',
      accent: '#020617',
      logoWidth: 'w-[180px] md:w-[200px]'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden font-['Poppins',_sans-serif]">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-600 rounded-full blur-[120px] translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          subtitle="TRUST & RECOGNITION"
          title="Trusted Travel & Tourism Partner"
          description="Join thousands of happy travelers who trust Sky High Holidays for their dream vacations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {trustItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-[28px] border border-black/[0.08] p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Logo Container - Even larger */}
              <div className="h-16 flex items-center justify-center mb-5 w-full">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className={`${item.logoWidth} object-contain transition-transform duration-500 group-hover:scale-105`}
                />
              </div>
              
              {/* Stars - Tightened spacing */}
              <div className="flex flex-col items-center">
                <div className="flex gap-1">
                  {[...Array(item.stars)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#FF7A00] text-[#FF7A00]" />
                  ))}
                </div>
              </div>

              {/* Bottom Icon - More compact */}
              <div className="mt-6 w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#020617] group-hover:text-white transition-all duration-300">
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Schema Markup for Trust & Ratings */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sky High Holidays",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1050",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
      </div>
    </section>
  );
}

