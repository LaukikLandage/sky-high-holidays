import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { DestinationCard } from '../components/ui/DestinationCard';
import { ServiceCard } from '../components/ui/ServiceCard';
import { Plane, MapPin, Star, Shield, Layout, Palette, Type } from 'lucide-react';
import { DESTINATIONS } from '@/lib/constants';

export function ComponentLibraryPage() {
  const sampleDestination = DESTINATIONS[0];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-48 pb-24 min-h-screen bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <SectionHeader 
          subtitle="DEVELOPER CONSOLE"
          title="Sky High Design System"
        />
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20 text-center"
        >
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            A centralized repository of premium UI components, design tokens, and interaction patterns designed for high-conversion travel experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-32"
        >
          
          {/* Colors */}
          <motion.section variants={item}>
            <SectionTitle icon={Palette} title="Color Palette" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <ColorBlock color="#111111" name="Primary Blue" hex="#111111" text="white" />
              <ColorBlock color="#020617" name="Dark Navy" hex="#020617" text="white" />
              <ColorBlock color="#FFC107" name="Accent Orange" hex="#FFC107" text="white" />
              <ColorBlock color="#F3F4F6" name="Light Gray" hex="#F3F4F6" text="black" />
              <ColorBlock color="#FFFFFF" name="White" hex="#FFFFFF" text="black" border />
            </div>
          </motion.section>

          {/* Typography */}
          <motion.section variants={item}>
            <SectionTitle icon={Type} title="Typography" />
            <div className="space-y-12 bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="grid md:grid-cols-3 gap-8 items-center border-b border-gray-50 pb-8">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Heading 1 / Display</span>
                <h1 className="md:col-span-2 text-6xl md:text-7xl font-black text-[#020617] tracking-tighter">Elevate Your Journey</h1>
              </div>
              <div className="grid md:grid-cols-3 gap-8 items-center border-b border-gray-50 pb-8">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Heading 2 / Section</span>
                <h2 className="md:col-span-2 text-4xl md:text-5xl font-bold text-[#020617]">Experience Luxury at Every Step</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 items-start border-b border-gray-50 pb-8">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Body / Large</span>
                <p className="md:col-span-2 text-xl text-gray-600 font-medium leading-relaxed">
                  Curate premium experiences for you. Discover luxury resorts, exclusive destinations, and unforgettable adventures with our bespoke travel planning.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Buttons */}
          <motion.section variants={item}>
            <SectionTitle icon={Shield} title="Buttons & Interactions" />
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="grid md:grid-cols-4 gap-12">
                <div className="space-y-6">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest block">Primary CTA</span>
                  <Button className="w-full">Book Now</Button>
                </div>
                <div className="space-y-6">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest block">Secondary</span>
                  <Button variant="secondary" className="w-full">Search Flights</Button>
                </div>
                <div className="space-y-6">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest block">Outline</span>
                  <div className="bg-[#020617] p-4 rounded-2xl">
                    <Button variant="outline" className="w-full">Explore More</Button>
                  </div>
                </div>
                <div className="space-y-6">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest block">Ghost</span>
                  <Button variant="ghost" className="w-full">Learn More</Button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Form Inputs */}
          <motion.section variants={item}>
            <SectionTitle icon={Layout} title="Form Elements" />
            <div className="grid md:grid-cols-2 gap-12 bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="space-y-8">
                <Input label="Full Name" placeholder="Enter your name" />
                <Select 
                  label="Travel Destination"
                  options={[
                    { value: 'maldives', label: 'Maldives' },
                    { value: 'dubai', label: 'Dubai' },
                    { value: 'bali', label: 'Bali' }
                  ]} 
                />
              </div>
              <div className="space-y-8">
                <Textarea label="Travel Remarks" placeholder="Tell us more about your travel plans..." />
              </div>
            </div>
          </motion.section>

          {/* Cards */}
          <motion.section variants={item}>
            <SectionTitle icon={Star} title="Complex Components" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="space-y-6 lg:col-span-1">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest block">Destination Summary</span>
                <DestinationCard destination={sampleDestination} />
              </div>
              <div className="space-y-6 lg:col-span-2">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest block">Service Highlight</span>
                <ServiceCard 
                  number="01"
                  icon={Plane}
                  title="Flight Booking"
                  description="Find and book the perfect flights with competitive prices and flexible options for your luxury journey."
                  image={sampleDestination.image}
                />
              </div>
            </div>
          </motion.section>

        </motion.div>
      </div>
    </div>
  );
}

function SectionTitle({ icon: Icon, title }: { icon: any, title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="w-14 h-14 bg-[#FFC107] rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(255,122,0,0.2)]">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h2 className="text-3xl font-black text-[#020617] uppercase tracking-wider">{title}</h2>
    </div>
  );
}

function ColorBlock({ color, name, hex, text, border }: { color: string, name: string, hex: string, text: string, border?: boolean }) {
  return (
    <div className="space-y-3 group cursor-pointer">
      <div 
        className="h-32 w-full rounded-2xl shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl" 
        style={{ backgroundColor: color, border: border ? '1px solid #e2e8f0' : 'none' }}
      ></div>
      <div>
        <div className="font-bold text-[#020617] text-sm">{name}</div>
        <div className="text-xs text-gray-500 font-mono">{hex}</div>
      </div>
    </div>
  );
}
