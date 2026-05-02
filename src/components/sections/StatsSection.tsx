
import { Counter } from '../ui/Counter';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { value: '1000+', label: 'Happy Travellers' },
    { value: '24/7', label: 'On-Trip Support' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '350+', label: '5-Star Google Reviews' },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#020617] border-y border-white/5 relative overflow-hidden">
      {/* Animated World Map Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.12] mix-blend-screen">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_Map_Blank.svg" 
          alt="" 
          className="w-[120%] max-w-none animate-move-map grayscale invert brightness-[2]"
        />
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-[#FFC107]/5 to-transparent pointer-events-none z-1"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="relative inline-block">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2">
                  <Counter value={stat.value} start={inView} />
                </h3>
                {/* Underline Animation */}
                <div className="h-1 w-0 bg-[#FFC107] mx-auto transition-all duration-500 group-hover:w-full rounded-full"></div>
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mt-4">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

