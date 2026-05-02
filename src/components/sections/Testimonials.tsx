import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const testimonials = [
  {
    id: 1,
    name: "Sarah Lee",
    role: "Adventure Enthusiast",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    text: "Exploring the world with Sky High Holidays was a dream! Their dedication to creating unforgettable moments was clear in every detail of our trip."
  },
  {
    id: 2,
    name: "Olivia Brown",
    role: "Art Director",
    image: "https://i.pravatar.cc/150?u=olivia",
    rating: 5,
    text: "Traveling with them was a delight. Their knowledge of each destination made the trip both educational and enjoyable. Highly recommended!"
  },
  {
    id: 3,
    name: "Michael Thompson",
    role: "Product Designer",
    image: "https://i.pravatar.cc/150?u=michael",
    rating: 5,
    text: "The customer service exceeded my expectations. Every detail was carefully thought out, ensuring a memorable and stress-free vacation."
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Solo Traveler",
    image: "https://i.pravatar.cc/150?u=emma",
    rating: 5,
    text: "Perfectly organized from start to finish. I've never felt more taken care of during my travels. The destinations were breathtaking."
  },
  {
    id: 5,
    name: "David Chen",
    role: "Business Executive",
    image: "https://i.pravatar.cc/150?u=david",
    rating: 5,
    text: "A truly premium experience. The personalized itinerary was exactly what we needed for our family getaway. 5 stars all around!"
  },
  {
    id: 6,
    name: "Sophia Martinez",
    role: "Travel Blogger",
    image: "https://i.pravatar.cc/150?u=sophia",
    rating: 5,
    text: "Sky High Holidays truly lives up to its name. The luxury stays and hidden local spots they found for us were absolutely incredible."
  }
];

export function Testimonials() {
  // Triple the list for a seamless infinite scroll
  const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <SectionHeader 
          subtitle="TESTIMONIALS"
          title="Real Travel Stories From Our Customers"
        />
        <p className="text-gray-500 text-center text-lg max-w-2xl mx-auto -mt-10 font-medium">
          Hear from travelers who explored the world with us
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Fades for Smooth Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee gap-8 py-8 w-max">
          {displayTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              whileHover={{ scale: 1.05, y: -5 }}
              className="w-[350px] md:w-[400px] bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col justify-between hover:shadow-orange-100/50 transition-all duration-500"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FF7A00] text-[#FF7A00]" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-4 -left-2 w-10 h-10 text-orange-50 opacity-20" />
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 italic relative z-10">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-orange-100"
                />
                <div>
                  <h4 className="font-bold text-[#020617]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
