import { Shield, CreditCard, Headphones, Award, Globe, Users } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Shield,
      title: 'Secure & Trusted',
      description: 'Your safety and security are our top priorities with verified partners'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      description: 'Easy EMI options and multiple payment methods available'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your travel needs'
    },
    {
      icon: Award,
      title: 'Best Price Guarantee',
      description: 'Competitive pricing with no hidden charges'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Partnerships with premium hotels and airlines worldwide'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced travel consultants to guide your journey'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#F3F4F6] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          subtitle="WHY CHOOSE US"
          title="Your Trusted Travel Partner"
        />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 text-lg mb-10 leading-relaxed text-center lg:text-left">
              We go beyond ordinary travel planning to deliver exceptional experiences that exceed your expectations, backed by industry expertise and global connections.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-[#FF7A00]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF7A00]/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-[#FF7A00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#020617] mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Animated Globe */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
              {/* Glow effect behind globe */}
              <div className="absolute inset-0 bg-[#FF7A00]/10 rounded-full blur-[80px] scale-110 -z-10"></div>
              
              {/* Globe image with mix-blend-multiply to remove white background */}
              <motion.div
                className="w-full h-full mix-blend-multiply flex items-center justify-center"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <img
                  src="/images/globe_white.png"
                  alt="3D Travel Globe"
                  className="w-[90%] h-[90%] object-contain"
                />
              </motion.div>

              {/* Orbiting airplane */}
              <motion.div
                className="absolute w-full h-full top-0 left-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-[15%] left-[15%] text-4xl drop-shadow-lg -rotate-45">
                  ✈️
                </div>
              </motion.div>

              {/* Decorative orbit ring */}
              <div className="absolute inset-[10%] border border-[#FF7A00]/10 rounded-full pointer-events-none"></div>
              <div className="absolute inset-[5%] border border-dashed border-[#FF7A00]/10 rounded-full pointer-events-none"></div>

              {/* Floating stat badge */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-2xl p-5 text-center z-20 border border-gray-100"
              >
                <div className="text-3xl font-black text-[#FF7A00] mb-0.5">98%</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Satisfaction</div>
              </motion.div>

              {/* Floating destinations badge */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute top-4 left-4 bg-white rounded-2xl shadow-2xl p-5 text-center z-20 border border-gray-100"
              >
                <div className="text-3xl font-black text-[#020617] mb-0.5">50+</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Destinations</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
