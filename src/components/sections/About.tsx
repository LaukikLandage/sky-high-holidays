import { Check, Award, Shield, Heart } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export function About() {
  const features = [
    { icon: Award, text: 'Award-winning travel agency' },
    { icon: Shield, text: 'Trusted & secure bookings' },
    { icon: Heart, text: 'Personalized service' },
    { icon: Check, text: 'Best price guarantee' }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          subtitle="WHO WE ARE"
          title="Crafting Extraordinary Travel Experiences Since 2015"
        />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 text-lg mb-6 leading-relaxed text-center lg:text-left">
              Sky High Holidays is your premier travel partner, dedicated to transforming your travel dreams into unforgettable realities. We specialize in curating bespoke journeys that combine luxury, authenticity, and adventure.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              From pristine beaches to cultural expeditions, our expert team ensures every detail is meticulously planned for a seamless experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFC107]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#FFC107]" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <Button variant="secondary" size="lg">
              Read More About Us
            </Button>
          </motion.div>

          {/* Right Images */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1626227438743-89bc4d2a0bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Luxury Resort Maldives"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1568849724852-ad90c31e0114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Adventure Travel"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1729606558813-1bda04fbb55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Bali Resort"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1487548919775-a7a460f3cbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Vietnam Bay"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFC107] text-white p-6 rounded-2xl shadow-2xl border-4 border-white z-10 text-center min-w-[140px]"
            >
              <div className="text-4xl font-bold mb-1">11+</div>
              <div className="text-sm font-medium leading-tight">Years of<br/>Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
