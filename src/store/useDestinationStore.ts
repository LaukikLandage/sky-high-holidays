import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DESTINATIONS, DOMESTIC_DESTINATIONS } from '../lib/constants';

export interface ItineraryItem {
  day: number;
  title: string;
  content: string;
}

export interface HotelStay {
  name: string;
  roomType: string;
  nights: number;
  meals: string;
  image?: string;
  mapQuery?: string;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  posterImage?: string; // Optional custom poster image for detail page
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
  hotelStay?: HotelStay;
  isTrending?: boolean;
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
    posterImage: d.posterImage,
    gallery: d.gallery || [d.image, d.image, d.image], // Use provided gallery or mock it
    overview: d.overview || `Experience the magic of ${d.name} with our carefully curated premium package. This itinerary offers the perfect balance of adventure and relaxation.`,
    highlights: d.highlights || ['Luxury Stay', 'Guided Tours', 'Premium Transfers'],
    itinerary: d.itinerary || [
      { day: 1, title: 'Arrival & Welcome', content: 'Welcome to your dream destination! Transfer to hotel and evening at leisure.' },
      { day: 2, title: 'City Exploration', content: 'Full day sightseeing tour of major landmarks.' },
      { day: 3, title: 'Local Experiences', content: 'Immerse yourself in the local culture and cuisine.' },
    ],
    inclusions: d.inclusions || ['Round-trip Airfare', '4-Star Hotel Accommodation', 'Daily Breakfast', 'All Transfers'],
    exclusions: d.exclusions || ['Personal Expenses', 'Travel Insurance', 'Lunches & Dinners', 'Optional Tours'],
    cancellationPolicy: d.cancellationPolicy || ['30 days before: 20% charge', '15 days before: 50% charge', 'Less than 7 days: 100% charge'],
    paymentPolicy: d.paymentPolicy || ['25% deposit at booking', 'Remaining 75% 30 days before travel'],
    terms: d.terms || 'Prices are subject to availability at the time of booking. Standard terms and conditions apply.',
    type: d.type,
    isTrending: d.isTrending || d.type === 'international',
    hotelStay: d.hotelStay || {
      name: 'Premium Partner Hotel',
      roomType: 'Deluxe Category Room',
      nights: parseInt(d.duration?.split(' ')[0]) || 4,
      meals: 'Daily Breakfast Included',
      image: `https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200`,
      mapQuery: d.name
    }
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
