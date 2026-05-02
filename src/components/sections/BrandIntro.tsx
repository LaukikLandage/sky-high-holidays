import { motion } from 'framer-motion';

export function BrandIntro() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl lg:text-3xl font-medium text-[#020617] leading-relaxed"
        >
          Explore <span className="text-[#FF7A00] font-bold">customized international and domestic</span> tour packages with India’s trusted travel agency offering visa assistance and complete travel planning.
        </motion.p>
      </div>
    </section>
  );
}
