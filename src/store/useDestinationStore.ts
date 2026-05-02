import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DESTINATIONS, DOMESTIC_DESTINATIONS } from '../lib/constants';

export interface ItineraryItem {
  day: number;
  title: string;
  content: string;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  cancellationPolicy: string[];
  paymentPolicy: string[];
  terms: string;
  type: 'international' | 'domestic';
}

interface DestinationState {
  destinations: Destination[];
  addDestination: (destination: Destination) => void;
  updateDestination: (id: string, destination: Partial<Destination>) => void;
  deleteDestination: (id: string) => void;
  getDestinationBySlug: (slug: string) => Destination | undefined;
}

// Initial dummy data mapper to fit new schema
const mapInitialData = (data: any[]): Destination[] => {
  return data.map((d, index) => ({
    id: d.id || `${d.type}-${index}`,
    name: d.name,
    slug: d.slug,
    location: d.location,
    duration: d.duration,
    price: d.price,
    image: d.image,
    gallery: [d.image, d.image, d.image], // Mock gallery
    overview: `Experience the magic of ${d.name} with our carefully curated premium package. This itinerary offers the perfect balance of adventure and relaxation.`,
    highlights: ['Luxury Stay', 'Guided Tours', 'Premium Transfers'],
    itinerary: [
      { day: 1, title: 'Arrival & Welcome', content: 'Welcome to your dream destination! Transfer to hotel and evening at leisure.' },
      { day: 2, title: 'City Exploration', content: 'Full day sightseeing tour of major landmarks.' },
      { day: 3, title: 'Local Experiences', content: 'Immerse yourself in the local culture and cuisine.' },
    ],
    inclusions: ['Round-trip Airfare', '4-Star Hotel Accommodation', 'Daily Breakfast', 'All Transfers'],
    exclusions: ['Personal Expenses', 'Travel Insurance', 'Lunches & Dinners', 'Optional Tours'],
    cancellationPolicy: ['30 days before: 20% charge', '15 days before: 50% charge', 'Less than 7 days: 100% charge'],
    paymentPolicy: ['25% deposit at booking', 'Remaining 75% 30 days before travel'],
    terms: 'Prices are subject to availability at the time of booking. Standard terms and conditions apply.',
    type: d.type
  }));
};

const initialDestinations = [
  ...mapInitialData(DESTINATIONS),
  ...mapInitialData(DOMESTIC_DESTINATIONS)
];

export const useDestinationStore = create<DestinationState>()(
  persist(
    (set, get) => ({
      destinations: initialDestinations,
      
      addDestination: (destination) => 
        set((state) => ({ destinations: [...state.destinations, destination] })),
        
      updateDestination: (id, updatedData) => 
        set((state) => ({
          destinations: state.destinations.map((d) => 
            d.id === id ? { ...d, ...updatedData } : d
          )
        })),
        
      deleteDestination: (id) => 
        set((state) => ({
          destinations: state.destinations.filter((d) => d.id !== id)
        })),
        
      getDestinationBySlug: (slug) => {
        return get().destinations.find((d) => d.slug === slug);
      }
    }),
    {
      name: 'skyhigh-destinations-storage',
    }
  )
);
