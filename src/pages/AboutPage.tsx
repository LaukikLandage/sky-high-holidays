import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Star, Globe, Headset, ArrowRight, Quote } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Link } from 'react-router-dom';
import { Counter } from '../components/ui/Counter';
import { SEO } from '../components/seo/SEO';
import { HiddenSEOKeywords } from '../components/seo/HiddenSEOKeywords';
import { PAGE_SEO } from '../lib/seoKeywords';

const stats = [
  { label: 'Happy Travelers', value: '1000+', icon: Users },
  { label: 'Satisfaction Rate', value: '98%', icon: Star },
  { label: 'Destinations', value: '50+', icon: Globe },
  { label: '24/7 Support', value: 'Live', icon: Headset },
];

const awards = [
  { title: `Best Travel Agency ${new Date().getFullYear() - 1}`, organization: 'Tourism Excellence' },
  { title: 'Customer Excellence Award', organization: 'Travelers Choice' },
  { title: 'Top Rated Travel Service', organization: 'Digital Hospitality' },
];

import { useInView } from 'react-intersection-observer';

export default function AboutPage() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="pt-36 pb-20">
      <SEO 
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        canonicalUrl={PAGE_SEO.about.canonical}
        keywords={PAGE_SEO.about.keywords}
      />
      <HiddenSEOKeywords type="about" />
      {/* ... Hero Section ... */}
      <section className="relative pt-10 pb-24 lg:pt-16 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[#F9FAFB] -z-10" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader 
            subtitle="ABOUT US"
            title="Crafting Journeys, Creating Memories"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              At Sky High Holidays, we believe travel is more than just visiting places — it's about experiences, emotions, and unforgettable stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[4/5] bg-[#F3F4F6] rounded-3xl overflow-hidden relative shadow-2xl">
                <img 
                  src="/images/About/founder.jpg" 
                  alt="Ashwin Nair - Founder of Sky High Holidays" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs z-10">
                <Quote className="w-8 h-8 text-[#FF7A00] mb-4 opacity-50" />
                <p className="text-lg font-bold text-[#020617] italic">
                  "Travel should inspire, not stress."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <SectionHeader 
                  subtitle="MEET OUR FOUNDER"
                  title="Ashwin Nair"
                  className="!text-left !items-start !mb-0"
                />
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Founded by Ashwin Nair, Sky High Holidays was built with a vision to redefine travel experiences by combining luxury, personalization, and seamless service.
              </p>
              <p className="text-gray-500 leading-relaxed">
                What started as a passion for exploring the world's hidden gems evolved into a premium travel company that puts the traveler's heart first. Our approach is simple: we handle the complexity, so you can focus on the discovery.
              </p>
              <div className="pt-4 flex gap-8">
                <div>
                  <p className="text-2xl font-black text-[#020617]">Founder</p>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Position</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <p className="text-2xl font-black text-[#020617]">10+ Years</p>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader 
                subtitle="WHO WE ARE"
                title="Redefining Luxury Travel"
                className="!text-left !items-start"
              />
              <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                Sky High Holidays is a premium travel company dedicated to delivering exceptional travel experiences across domestic and international destinations. From curated itineraries to luxury stays, we ensure every journey is smooth, memorable, and tailored to your needs.
              </p>
              <ul className="space-y-4">
                {[
                  'Personalized Itineraries',
                  'Premium Accommodation',
                  'Seamless Logistics',
                  'Expert Local Guides'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#020617] font-bold">
                    <div className="w-2 h-2 bg-[#FF7A00] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=600" alt="Luxury beach resort holiday destination curated by Sky High Holidays" className="rounded-3xl h-64 w-full object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=600" alt="Mountain adventure travel experience with Sky High Holidays India" className="rounded-3xl h-48 w-full object-cover shadow-lg" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600" alt="Scenic lake and mountain landscape from international tour packages" className="rounded-3xl h-48 w-full object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600" alt="Tropical beach destination honeymoon package from Sky High Holidays Pune" className="rounded-3xl h-64 w-full object-cover shadow-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[2.5rem] bg-[#020617] text-white space-y-6"
            >
              <div className="w-16 h-16 bg-[#FF7A00] rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-white">Our Vision</h3>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                "To become a trusted global travel brand known for delivering unforgettable journeys."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl space-y-6"
            >
              <div className="w-16 h-16 bg-[#FF7A00] rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black text-[#020617]">Our Mission</h3>
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                "To provide seamless, personalized, and premium travel experiences with exceptional customer service."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-[#020617] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex w-16 h-16 bg-white/10 rounded-2xl items-center justify-center backdrop-blur-md mb-2">
                  <stat.icon className="w-8 h-8 text-[#FF7A00]" />
                </div>
                <h4 className="text-4xl md:text-5xl font-black text-white">
                  <Counter value={stat.value} start={statsInView} />
                </h4>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionHeader 
              subtitle="RECOGNITION"
              title="Awards & Achievements"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border border-gray-100 bg-white hover:shadow-2xl hover:shadow-orange-200/20 transition-all group"
              >
                <Award className="w-12 h-12 text-[#FF7A00] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black text-[#020617] mb-2">{award.title}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#020617] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-white/5 rounded-full blur-3xl group-hover:bg-[#FF7A00]/10 transition-colors" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl text-white mb-8">Start Your Journey With Us</h2>
              <Link to="/destinations">
                <Button size="lg" className="h-16 px-12 text-lg bg-white text-[#020617] hover:bg-[#FF7A00] hover:text-white rounded-full font-black shadow-2xl transition-all hover:scale-105">
                  Explore Packages
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
