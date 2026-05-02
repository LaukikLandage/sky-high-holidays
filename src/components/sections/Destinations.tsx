import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { DestinationCard } from '../ui/DestinationCard';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDestinationStore } from '@/store/useDestinationStore';

export function Destinations() {
  const { destinations } = useDestinationStore();
  const internationalDestinations = destinations.filter(d => d.type === 'international');

  return (
    <section id="international" className="py-10 md:py-14 lg:py-16 bg-[#F9F9F9]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader 
          subtitle="MOST LOVED DESTINATIONS"
          title="Explore The World's Most Popular Destinations"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {internationalDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Link 
                to={destination.type === 'domestic' 
                  ? `/enquiry?destination=${encodeURIComponent(destination.name)}`
                  : `/international/${destination.slug}`} 
                className="block h-full"
              >
                <DestinationCard destination={destination} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link to="/destinations">
            <Button size="lg" className="gap-2">
              View All Destinations
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
