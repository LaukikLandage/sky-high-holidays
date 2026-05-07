import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DESTINATIONS, DOMESTIC_DESTINATIONS } from '@/lib/constants';
import { DestinationCard } from '../components/ui/DestinationCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { SEO } from '../components/seo/SEO';
import { HiddenSEOKeywords } from '../components/seo/HiddenSEOKeywords';
import { PAGE_SEO } from '../lib/seoKeywords';

export function DestinationsPage() {
  const [filter, setFilter] = useState<'all' | 'international' | 'domestic'>('all');

  const filteredDestinations = useMemo(() => {
    const international = DESTINATIONS.map(d => ({ ...d, type: 'international' }));
    
    // Map domestic to match the interface, using existing data from constants
    const domestic = DOMESTIC_DESTINATIONS.map(d => ({ 
      ...d, 
      type: 'domestic' 
    }));

    const all = [...international, ...domestic];

    if (filter === 'international') return international;
    if (filter === 'domestic') return domestic;
    return all;
  }, [filter]);

  return (
    <div className="pt-48 pb-24 min-h-screen bg-[#F9F9F9]">
      <SEO 
        title={PAGE_SEO.destinations.title}
        description={PAGE_SEO.destinations.description}
        canonicalUrl={PAGE_SEO.destinations.canonical}
        keywords={PAGE_SEO.destinations.keywords}
      />
      <HiddenSEOKeywords type="international" />
      <HiddenSEOKeywords type="domestic" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        <SectionHeader 
          subtitle="EXPLORE THE WORLD"
          title="All Destinations"
        />
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            From the serene beaches of the Maldives to the snow-capped peaks of Kashmir, find your perfect getaway.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            <FilterButton 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
            >
              All Packages
            </FilterButton>
            <FilterButton 
              active={filter === 'international'} 
              onClick={() => setFilter('international')}
            >
              International
            </FilterButton>
            <FilterButton 
              active={filter === 'domestic'} 
              onClick={() => setFilter('domestic')}
            >
              Domestic India
            </FilterButton>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDestinations.map((destination) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={destination.name}
            >
              <Link 
                to={destination.type === 'domestic'
                  ? `/enquiry?destination=${encodeURIComponent(destination.name)}`
                  : `/international/${(destination as any).slug || destination.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              >
                <DestinationCard destination={destination as any} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function FilterButton({ active, onClick, children }: { active: boolean, onClick: () => void, children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
        active 
          ? 'bg-[#000000] text-white shadow-lg scale-105' 
          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
      }`}
    >
      {children}
    </button>
  );
}
