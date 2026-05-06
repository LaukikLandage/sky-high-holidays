
interface HiddenSEOKeywordsProps {
  type?: 'home' | 'international' | 'domestic' | 'contact' | 'reviews' | 'destination' | 'general';
  destination?: string;
}

export function HiddenSEOKeywords({ type = 'general', destination }: HiddenSEOKeywordsProps) {
  return (
    <div className="sr-only" aria-hidden="true">
      {type === 'home' && (
        <p>
          Sky High Holidays is the best travel agency in Pune, India, offering premium travel experiences, luxury tour packages, and custom travel itineraries. We specialize in international tour packages, domestic holiday packages, honeymoon packages India, Bali tour packages, Dubai tour packages, Thailand tour packages, Maldives honeymoon package, Europe tour packages from India. We are expert travel planners India, providing affordable holiday packages, visa assistance travel, and the best custom tours India. Book your dream vacation with Sky High Travels, a premium travel and tourism company based in Pune. We offer the best Bali packages from India, best Dubai packages from India, luxury travel company India.
        </p>
      )}
      {type === 'international' && (
        <p>
          Explore our cheap international packages, luxury honeymoon trips, and international vacation packages. We provide the best travel deals India for Europe group tours from Delhi, affordable Bali honeymoon packages India, Dubai honeymoon package from Mumbai, and luxury Thailand tours India. Book with the best travel agency in Pune for international trips.
        </p>
      )}
      {type === 'domestic' && (
        <p>
          Discover incredible domestic holiday packages, luxury tour packages india, and vacation packages india. Sky High Holidays offers premium domestic travel packages for couples, family vacation packages, and group tour packages india. Your trusted trip planner india for unforgettable journeys across India.
        </p>
      )}
      {type === 'destination' && destination && (
        <p>
          Looking for the best {destination} tour packages? Sky High Holidays offers customized holiday packages, luxury {destination} travel, and affordable {destination} honeymoon packages from India. Book your {destination} trip with the best travel company for couples. Expert travel itinerary planner for {destination} vacations.
        </p>
      )}
      {type === 'contact' && (
        <p>
          Contact Sky High Holidays Pune, the best tour operator India. Online travel booking India made easy. Reach out to our travel experts for international trips, luxury travel packages, and customized holiday booking website inquiries.
        </p>
      )}
      {type === 'reviews' && (
        <p>
          Read reviews about Sky High Holidays, the top-rated travel agency pune. See why our clients love our customized holiday packages, international tour packages india, and our expert travel planners india.
        </p>
      )}
      {type === 'general' && (
        <p>
          SkyHigh Holidays, Sky High Tour Packages, Lenodellabs travel website, hotel and tour packages, premium travel experiences.
        </p>
      )}
    </div>
  );
}
