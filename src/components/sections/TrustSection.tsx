import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export function TrustSection() {
  const trustItems = [
    {
      name: 'Google Reviews',
      rating: '4.9',
      count: '500+',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_logo_2015.svg',
      stars: 5,
      url: 'https://www.google.com/search?q=Sky+High+Holidays+Pune+Reviews',
      accent: '#020617',
      hoverGlow: 'hover:shadow-black/5'
    },
    {
      name: 'Justdial',
      rating: '4.8',
      count: '350+',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Justdial_logo.png',
      stars: 5,
      url: 'https://www.justdial.com/Pune/Sky-High-Holidays-Wanowrie/020PXX20.XX20.180214151445.U3C9',
      accent: '#020617',
      hoverGlow: 'hover:shadow-black/5'
    },
    {
      name: 'Trustpilot',
      rating: '4.7',
      count: '200+',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Trustpilot_logo.svg',
      stars: 5,
      url: 'https://www.trustpilot.com/search?query=Sky+High+Holidays',
      accent: '#020617',
      hoverGlow: 'hover:shadow-black/5'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-50/50 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          subtitle="TRUST & RECOGNITION"
          title="Trusted Travel & Tourism Partner"
          description="Join thousands of happy travelers who trust Sky High Holidays for their dream vacations. Verified excellence across major review platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {trustItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`group bg-white p-8 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center transition-all duration-500 hover:border-opacity-50 shadow-sm ${item.hoverGlow} hover:shadow-2xl relative overflow-hidden h-full`}
              style={{ '--hover-border': item.accent } as any}
            >
              {/* Logo Container */}
              <div className="h-16 flex items-center justify-center mb-8 w-full px-4">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="max-h-full max-w-[160px] object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Rating & Stats */}
              <div className="flex flex-col items-center gap-4 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(item.stars)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-[#FF7A00] text-[#FF7A00]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* External Link Indicator */}
              <div className="mt-8 p-3 rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-[#020617] group-hover:text-white transition-all duration-300">
                <ExternalLink className="w-5 h-5" />
              </div>

              {/* Hover Accent Line */}
              <div 
                className="absolute bottom-0 left-0 w-full h-1.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: item.accent }}
              />
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
