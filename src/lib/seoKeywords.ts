// =============================================================================
// SKY HIGH HOLIDAYS — Enterprise SEO Keyword Database
// 500+ travel keywords organized by category for safe, Google-compliant use
// across metadata, structured data, alt tags, FAQs, and semantic sections.
// =============================================================================

const BASE_URL = 'https://skyhighholidays.vercel.app';

// ─── Brand Keywords ────────────────────────────────────────────────────────────
export const BRAND_KEYWORDS = [
  'Sky High Holidays',
  'SkyHigh Holidays',
  'Sky High Travels',
  'Sky High Tour Packages',
  'Sky High Holidays Pune',
  'Sky High Holidays India',
  'Sky High Holidays reviews',
  'Sky High Holidays packages',
  'Sky High travel agency',
  'skyhighholidays.com',
  'Sky High Tourism',
  'Sky High Holidays Mumbai',
  'Sky High Holidays Delhi',
  'Sky High Holidays Bangalore',
  'Sky High Holidays booking',
] as const;

// ─── International Destination Keywords ────────────────────────────────────────
export const INTERNATIONAL_KEYWORDS = [
  // Bali
  'Bali tour packages', 'Bali honeymoon packages', 'Bali trip from India',
  'Bali packages from Pune', 'Bali packages from Mumbai', 'Bali travel packages 2025',
  'cheap Bali tour packages India', 'best Bali packages from India', 'Bali Indonesia holiday',
  'Bali couples tour', 'Bali adventure trip',
  // Dubai
  'Dubai tour packages', 'Dubai holiday packages from India', 'Dubai packages from Pune',
  'Dubai packages from Mumbai', 'Dubai honeymoon trip', 'Dubai vacation packages',
  'cheap Dubai packages India', 'best Dubai tour packages 2025', 'Dubai city tour',
  'Dubai desert safari packages', 'Dubai family vacation packages',
  // Thailand
  'Thailand tour packages', 'Thailand packages from India', 'Thailand honeymoon trip',
  'Bangkok Pattaya tour packages', 'Thailand packages from Pune', 'cheap Thailand packages',
  'Thailand group tour India', 'Thailand beach holiday', 'Thailand trip cost from India',
  'Phuket tour packages India', 'Krabi island tour',
  // Maldives
  'Maldives honeymoon packages', 'Maldives packages from India', 'Maldives resort packages',
  'cheap Maldives packages India', 'luxury Maldives honeymoon', 'Maldives trip cost',
  'Maldives water villa package', 'Maldives all inclusive packages',
  'Maldives packages from Mumbai', 'Maldives couples package',
  // Vietnam
  'Vietnam tour packages', 'Vietnam packages from India', 'Vietnam holiday trip',
  'Ha Long Bay tour', 'Ho Chi Minh City tour', 'Vietnam travel packages 2025',
  // Singapore & Malaysia
  'Singapore Malaysia tour packages', 'Singapore packages from India',
  'Malaysia tour packages from Pune', 'Singapore family holiday',
  'Singapore Malaysia honeymoon', 'Kuala Lumpur tour packages',
  // Europe
  'Europe tour packages from India', 'Europe honeymoon packages', 'Europe group tours',
  'Europe trip from Mumbai', 'Europe budget tour packages', 'Paris tour packages India',
  'Switzerland tour packages', 'London tour packages from India', 'Italy tour from India',
  'Greece honeymoon packages', 'Scandinavia tour packages', 'Europe visa assistance India',
  // Others
  'Japan tour packages India', 'Australia tour packages', 'New Zealand travel packages',
  'Egypt tour packages India', 'Turkey tour packages', 'Sri Lanka tour packages',
  'Nepal tour packages', 'Bhutan tour packages from India',
  'Mauritius honeymoon packages', 'Seychelles honeymoon India',
] as const;

// ─── Domestic Destination Keywords ─────────────────────────────────────────────
export const DOMESTIC_KEYWORDS = [
  // Kashmir
  'Kashmir tour packages', 'Kashmir honeymoon packages', 'Kashmir family trip',
  'Srinagar tour packages', 'Gulmarg packages', 'Kashmir trip from Pune',
  'Kashmir trip from Mumbai', 'best Kashmir packages 2025', 'Kashmir houseboat package',
  'Pahalgam tour packages', 'Sonmarg trip packages',
  // Kerala
  'Kerala tour packages', 'Kerala honeymoon packages', 'Kerala backwater trip',
  'Munnar tour packages', 'Alleppey houseboat packages', 'Kerala family vacation',
  'Kerala trip from Pune', 'Wayanad packages', 'Thekkady tour',
  // Goa
  'Goa tour packages', 'Goa beach holiday', 'Goa honeymoon packages',
  'Goa trip from Pune', 'Goa packages for couples', 'North Goa packages',
  'South Goa packages', 'Goa party packages', 'cheap Goa packages',
  'Goa weekend getaway', 'Goa family trip',
  // Himachal
  'Himachal tour packages', 'Shimla Manali packages', 'Himachal honeymoon trip',
  'Manali trip from Pune', 'Shimla packages from Delhi', 'Dharamshala tour packages',
  'Kullu Manali packages', 'Spiti Valley tour', 'Himachal adventure trip',
  // Rajasthan
  'Rajasthan tour packages', 'Jaipur tour packages', 'Udaipur trip packages',
  'Rajasthan heritage tour', 'Jodhpur Jaisalmer packages', 'Rajasthan family tour',
  'Rajasthan honeymoon packages', 'desert safari Rajasthan', 'Rajasthan palace tour',
  // Andaman
  'Andaman tour packages', 'Andaman honeymoon packages', 'Andaman trip from India',
  'Havelock Island packages', 'Neil Island tour', 'Andaman beach holiday',
  'scuba diving Andaman packages', 'Andaman family trip',
  // Ladakh
  'Ladakh tour packages', 'Leh Ladakh bike trip', 'Ladakh adventure packages',
  'Ladakh trip from Delhi', 'Pangong Lake tour', 'Nubra Valley trip',
  'Ladakh camping packages', 'Ladakh road trip',
  // Uttarakhand
  'Uttarakhand tour packages', 'Rishikesh packages', 'Mussoorie tour packages',
  'Nainital trip packages', 'Uttarakhand adventure trip', 'Jim Corbett packages',
  'Haridwar Rishikesh tour', 'Uttarakhand pilgrimage tour',
  // Northeast
  'Sikkim tour packages', 'Meghalaya tour packages', 'Northeast India tour',
  'Darjeeling Gangtok packages', 'Shillong Cherrapunji tour', 'Tawang tour packages',
  'Kaziranga trip', 'Seven Sisters tour India',
  // Others
  'Ooty tour packages', 'Coorg trip packages', 'Lonavala weekend trip',
  'Mahabaleshwar packages', 'Kodaikanal tour', 'Pondicherry beach trip',
  'Hampi heritage tour', 'Varanasi pilgrimage tour', 'Amritsar Golden Temple tour',
  'Agra Taj Mahal day trip', 'Ranthambore safari packages',
] as const;

// ─── Travel Type Keywords ──────────────────────────────────────────────────────
export const TRAVEL_TYPE_KEYWORDS = [
  // Honeymoon
  'honeymoon packages India', 'best honeymoon destinations from India',
  'luxury honeymoon packages', 'affordable honeymoon packages', 'romantic getaway India',
  'honeymoon trip planner', 'international honeymoon from India',
  'beach honeymoon packages', 'hill station honeymoon India',
  // Family
  'family vacation packages India', 'family holiday packages', 'family trip planner India',
  'best family destinations India', 'family tour packages international',
  'kid friendly vacation packages', 'summer family holidays India',
  // Group
  'group tour packages India', 'group travel deals', 'friends trip packages India',
  'college group tours', 'student trip packages', 'corporate group tours India',
  'bachelor trip packages', 'bachelorette trip India',
  // Adventure
  'adventure trip packages India', 'trekking packages India', 'scuba diving packages',
  'paragliding holiday India', 'river rafting packages', 'camping trip packages India',
  'wildlife safari packages India', 'extreme sports vacation India',
  // Luxury
  'luxury travel packages India', 'premium tour packages', 'luxury resort packages',
  'five star holiday packages', 'VIP travel packages India', 'luxury villa stays India',
  'private yacht holiday', 'exclusive travel experiences India',
  // Budget
  'budget tour packages India', 'cheap holiday packages', 'affordable travel packages',
  'low cost international trips India', 'budget honeymoon packages',
  'backpacking tours India', 'pocket friendly vacations India',
  // Pilgrimage
  'pilgrimage tour packages India', 'Char Dham yatra packages', 'Vaishno Devi packages',
  'Tirupati tour packages', 'Amarnath yatra packages', 'religious tour packages India',
  'spiritual travel India', 'temple tour packages',
  // Weekend
  'weekend getaway from Pune', 'weekend trip packages India', 'short trips from Mumbai',
  'weekend getaway packages', 'two day trip near Pune', 'long weekend holiday ideas',
  'quick getaways from Bangalore', 'weekend breaks from Delhi',
  // Seasonal
  'summer vacation packages India', 'winter holiday packages', 'monsoon getaway India',
  'Diwali holiday packages', 'Christmas travel packages', 'New Year trip packages India',
  'Holi celebration tours', 'Republic Day weekend trips',
  // Special Interest
  'beach holiday packages India', 'mountain trip packages', 'island holiday packages India',
  'desert tour packages India', 'cruise packages from India', 'food tour India',
  'photography tour packages', 'wellness retreat packages India',
  'Ayurveda tour packages Kerala', 'yoga retreat packages India',
] as const;

// ─── Service & Intent Keywords ─────────────────────────────────────────────────
export const SERVICE_KEYWORDS = [
  // Booking
  'online holiday booking India', 'book tour packages online', 'holiday booking website India',
  'instant travel booking', 'last minute travel deals India', 'early bird travel offers',
  'travel EMI options India', 'pay later travel packages',
  // Services
  'travel agency India', 'travel agency Pune', 'tour operator India',
  'travel agent near me', 'best travel company India', 'travel consultant Pune',
  'trip planner India', 'itinerary planner online', 'customized travel packages India',
  'tailor made holidays India', 'personalized travel planning',
  // Visa & Flights
  'visa assistance India', 'visa processing service', 'flight booking India',
  'cheap flights India', 'international flights from Pune', 'flight hotel packages India',
  // Support
  '24/7 travel support', 'travel emergency assistance', 'travel insurance India',
  'travel concierge service India', 'airport pickup service',
  // Deals
  'travel deals India', 'best travel offers 2025', 'holiday sale India',
  'discounted tour packages', 'travel cashback offers', 'couple travel deals',
  'family travel discounts India', 'festive travel offers',
] as const;

// ─── Location Targeting Keywords (India Cities) ────────────────────────────────
export const LOCATION_KEYWORDS = [
  'travel agency in Pune', 'best travel agency Pune', 'tour packages from Pune',
  'travel agency in Mumbai', 'tour packages from Mumbai', 'Mumbai travel agent',
  'travel agency Delhi', 'tour packages from Delhi', 'Delhi travel agent',
  'travel agency Bangalore', 'tour packages from Bangalore', 'Bangalore travel agent',
  'travel agency Hyderabad', 'tour packages from Hyderabad',
  'travel agency Chennai', 'tour packages from Chennai',
  'travel agency Kolkata', 'tour packages from Kolkata',
  'travel agency Ahmedabad', 'tour packages from Ahmedabad',
  'travel agency Jaipur', 'travel agency Lucknow',
  'travel agency Chandigarh', 'travel agency Surat',
  'travel agency Nagpur', 'travel agency Nashik',
  'travel agency Indore', 'travel agency Bhopal',
  'travel agency Kochi', 'travel agency Guwahati',
  'Maharashtra travel agency', 'Gujarat travel agency', 'Karnataka travel agency',
] as const;

// ─── Long-tail & Conversational Keywords ───────────────────────────────────────
export const LONGTAIL_KEYWORDS = [
  'best international tour packages for couples from India',
  'affordable honeymoon destinations from Pune',
  'which is the best travel agency in Pune for international trips',
  'how to plan a trip to Bali from India',
  'cheapest international destinations from India 2025',
  'best time to visit Maldives from India',
  'how much does a Dubai trip cost from India',
  'best family vacation spots near Pune',
  'top 10 honeymoon destinations for Indian couples',
  'trusted travel agent for international trips in India',
  'all inclusive international tour packages from India',
  'customized holiday packages for families in India',
  'best weekend getaways from Pune for couples',
  'luxury resort packages in India under 50000',
  'how to plan a Kashmir trip from Pune',
  'top travel agencies in Pune with good reviews',
  'best tour packages for senior citizens India',
  'solo female travel packages India',
  'group tour packages for friends from Pune',
  'best places to visit in December from India',
  'romantic beach destinations near India',
  'adventure activities tour packages India',
  'best hill stations near Pune for family',
  'complete guide to planning a Europe trip from India',
  'visa free countries for Indian passport holders 2025',
] as const;

// ─── SEO Config: Page-Level Metadata ───────────────────────────────────────────
export const PAGE_SEO = {
  home: {
    title: 'Sky High Holidays | Best Travel Agency in Pune, India | Luxury Tour Packages',
    description: 'Sky High Holidays — premium travel agency in Pune offering the best international and domestic tour packages. Book luxury honeymoon trips, Bali tours, Dubai packages, Kashmir holidays, and customized itineraries from India.',
    canonical: `${BASE_URL}/`,
    keywords: 'Sky High Holidays, best travel agency Pune, international tour packages, domestic tour packages India, honeymoon packages, Bali tour packages, Dubai packages, luxury travel India',
  },
  about: {
    title: 'About Us | Sky High Holidays — Premium Travel Agency in Pune, India',
    description: 'Learn about Sky High Holidays, a premium travel agency in Pune founded by Ashwin Nair. We craft extraordinary travel experiences with personalized itineraries, luxury stays, and expert planning across 50+ destinations.',
    canonical: `${BASE_URL}/about`,
    keywords: 'about Sky High Holidays, travel agency Pune, Ashwin Nair founder, luxury travel company India, trusted travel planners',
  },
  contact: {
    title: 'Contact Us | Sky High Holidays — Talk to Travel Experts in Pune',
    description: 'Contact Sky High Holidays for the best international and domestic tour packages. Get personalized quotes, visa assistance, and luxury travel planning from our expert team in Pune, India.',
    canonical: `${BASE_URL}/contact`,
    keywords: 'contact Sky High Holidays, travel agency Pune contact, book tour packages, travel experts India, holiday booking',
  },
  destinations: {
    title: 'All Tour Packages | International & Domestic Destinations — Sky High Holidays',
    description: 'Explore all international and domestic tour packages from Sky High Holidays. Browse Bali, Dubai, Thailand, Maldives, Kashmir, Kerala, Goa packages and more. Best prices guaranteed from India.',
    canonical: `${BASE_URL}/destinations`,
    keywords: 'tour packages India, international destinations, domestic travel packages, all travel packages, holiday packages',
  },
  reviews: {
    title: 'Customer Reviews | Sky High Holidays — Top Rated Travel Agency Pune',
    description: 'Read authentic reviews from happy travelers who explored the world with Sky High Holidays. 500+ satisfied customers, 4.9 average rating, and 100% satisfaction rate.',
    canonical: `${BASE_URL}/reviews`,
    keywords: 'Sky High Holidays reviews, travel agency reviews Pune, customer testimonials, travel company ratings India',
  },
  enquiry: {
    title: 'Book Your Dream Trip | Enquire Now — Sky High Holidays',
    description: 'Submit your travel enquiry and get a customized itinerary from Sky High Holidays. Our travel experts will plan your perfect international or domestic vacation within 24 hours.',
    canonical: `${BASE_URL}/enquiry`,
    keywords: 'book tour package, travel enquiry, holiday booking, customized trip planning, travel agent booking India',
  },
  privacyPolicy: {
    title: 'Privacy Policy | Sky High Holidays',
    description: 'Read the privacy policy of Sky High Holidays. We respect your privacy and protect your personal data in compliance with Indian data protection regulations.',
    canonical: `${BASE_URL}/privacy-policy`,
  },
  cancellationPolicy: {
    title: 'Cancellation Policy | Sky High Holidays',
    description: 'Understand the cancellation and refund policy of Sky High Holidays for all tour packages. Transparent terms for hassle-free booking changes.',
    canonical: `${BASE_URL}/cancellation-policy`,
  },
  termsConditions: {
    title: 'Terms & Conditions | Sky High Holidays',
    description: 'Read the terms and conditions for booking travel packages with Sky High Holidays. Clear guidelines for payments, cancellations, and travel policies.',
    canonical: `${BASE_URL}/terms-conditions`,
  },
} as const;

// ─── Destination-Level SEO Generator ───────────────────────────────────────────
export function getDestinationSEO(name: string, slug: string, price?: string, duration?: string) {
  const cleanName = name.replace(/, UAE|, Indonesia/gi, '').trim();
  return {
    title: `${name} Tour Packages from ₹${price || '23,000'} | ${duration || '5 Days'} — Sky High Holidays`,
    description: `Book the best ${name} tour packages starting at ${price || '₹23,000'}. ${duration || '5 Days'} of luxury stays, guided tours, and customized itineraries. Sky High Holidays — trusted travel agency in Pune, India.`,
    canonical: `${BASE_URL}/international/${slug}`,
    keywords: `${cleanName} tour packages, ${cleanName} holiday packages, ${cleanName} trip from India, ${cleanName} honeymoon, ${cleanName} travel packages 2025, best ${cleanName} packages, ${cleanName} packages from Pune`,
  };
}

// ─── FAQ Schema Generator ──────────────────────────────────────────────────────
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ─── TouristDestination Schema Generator ───────────────────────────────────────
export function generateTouristDestinationSchema(destination: {
  name: string;
  slug: string;
  location?: string;
  price?: string;
  duration?: string;
  description?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destination.name,
    description: destination.description || `Explore ${destination.name} with Sky High Holidays premium tour packages from India.`,
    url: `${BASE_URL}/international/${destination.slug}`,
    ...(destination.image && { image: destination.image }),
    touristType: ['Leisure', 'Honeymoon', 'Family', 'Adventure'],
    containsPlace: {
      '@type': 'Place',
      name: destination.location || destination.name,
    },
  };
}

// ─── Offer Schema Generator ────────────────────────────────────────────────────
export function generateOfferSchema(destination: {
  name: string;
  slug: string;
  price?: string;
  duration?: string;
}) {
  const numericPrice = destination.price?.replace(/[₹,]/g, '') || '23000';
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: `${destination.name} Tour Package`,
    description: `${destination.duration || '5 Days'} tour package to ${destination.name} with Sky High Holidays.`,
    url: `${BASE_URL}/international/${destination.slug}`,
    priceCurrency: 'INR',
    price: numericPrice,
    priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'TravelAgency',
      name: 'Sky High Holidays',
      url: BASE_URL,
    },
  };
}

// ─── LocalBusiness Schema ──────────────────────────────────────────────────────
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': `${BASE_URL}/#organization`,
  name: 'Sky High Holidays',
  alternateName: ['SkyHigh Holidays', 'Sky High Travels', 'Sky High Tour Packages', 'Sky High Tourism'],
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
  description: 'Sky High Holidays is a premium travel agency in Pune, India offering international and domestic tour packages, luxury honeymoon trips, Bali tours, Dubai packages, and customized holiday itineraries for couples, families, and groups.',
  telephone: '+91-8700558065',
  email: 'ashwin@skyhightravelandtourism.com',
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    name: 'Ashwin Nair',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop no 5, near Diamond Bakery Lane, Fatima Nagar',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411013',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.5113947,
    longitude: 73.8966563,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'City', name: 'Chennai' },
    { '@type': 'City', name: 'Kolkata' },
    { '@type': 'City', name: 'Ahmedabad' },
    { '@type': 'Country', name: 'India' },
  ],
  knowsAbout: [
    'International Tour Packages', 'Domestic Tour Packages', 'Luxury Travel',
    'Honeymoon Packages', 'Family Vacation Packages', 'Group Tours',
    'Adventure Travel', 'Pilgrimage Tours', 'Weekend Getaways',
    'Customized Itineraries', 'Visa Assistance', 'Flight Booking',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tour Packages',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'International Tour Packages',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Trip', name: 'Bali Tour Package' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Trip', name: 'Dubai Tour Package' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Trip', name: 'Thailand Tour Package' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Trip', name: 'Maldives Honeymoon Package' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Domestic Tour Packages',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Trip', name: 'Kashmir Tour Package' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Trip', name: 'Kerala Tour Package' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Trip', name: 'Goa Holiday Package' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Trip', name: 'Rajasthan Heritage Tour' } },
        ],
      },
    ],
  },
  sameAs: [
    'https://www.facebook.com/share/1AfG4C3U3a/?mibextid=wwXIfr',
    'https://www.instagram.com/skyhigh_holidays_?igsh=bXp3dm9pdGZ0bHZx',
    'https://youtube.com/@skyhigh_holidays?si=iXQ4H-RJq747JF2G',
    'https://wa.me/918700558065',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  priceRange: '₹₹',
} as const;

// ─── Helper: Get All Keywords as a Flat Array ──────────────────────────────────
export function getAllKeywords(): string[] {
  return [
    ...BRAND_KEYWORDS,
    ...INTERNATIONAL_KEYWORDS,
    ...DOMESTIC_KEYWORDS,
    ...TRAVEL_TYPE_KEYWORDS,
    ...SERVICE_KEYWORDS,
    ...LOCATION_KEYWORDS,
    ...LONGTAIL_KEYWORDS,
  ];
}

// ─── Helper: Get Keywords By Page Type ─────────────────────────────────────────
export function getKeywordsForPage(
  type: 'home' | 'international' | 'domestic' | 'contact' | 'reviews' | 'about' | 'destination' | 'enquiry',
  destination?: string
): string[] {
  const base = [...BRAND_KEYWORDS.slice(0, 5)];

  switch (type) {
    case 'home':
      return [
        ...base,
        ...INTERNATIONAL_KEYWORDS.slice(0, 20),
        ...DOMESTIC_KEYWORDS.slice(0, 15),
        ...TRAVEL_TYPE_KEYWORDS.slice(0, 15),
        ...SERVICE_KEYWORDS.slice(0, 10),
        ...LOCATION_KEYWORDS.slice(0, 10),
      ];
    case 'international':
      return [...base, ...INTERNATIONAL_KEYWORDS, ...TRAVEL_TYPE_KEYWORDS.slice(0, 10)];
    case 'domestic':
      return [...base, ...DOMESTIC_KEYWORDS, ...TRAVEL_TYPE_KEYWORDS.slice(0, 10)];
    case 'contact':
      return [...base, ...SERVICE_KEYWORDS, ...LOCATION_KEYWORDS.slice(0, 8)];
    case 'reviews':
      return [...base, ...BRAND_KEYWORDS, ...SERVICE_KEYWORDS.slice(0, 5)];
    case 'about':
      return [...base, ...SERVICE_KEYWORDS.slice(0, 10), ...LOCATION_KEYWORDS.slice(0, 5)];
    case 'enquiry':
      return [...base, ...SERVICE_KEYWORDS, ...TRAVEL_TYPE_KEYWORDS.slice(0, 10)];
    case 'destination':
      if (destination) {
        const lowerDest = destination.toLowerCase();
        const relevant = [
          ...INTERNATIONAL_KEYWORDS.filter(k => k.toLowerCase().includes(lowerDest)),
          ...DOMESTIC_KEYWORDS.filter(k => k.toLowerCase().includes(lowerDest)),
        ];
        return [...base, ...relevant, ...TRAVEL_TYPE_KEYWORDS.slice(0, 8)];
      }
      return [...base, ...INTERNATIONAL_KEYWORDS.slice(0, 10), ...DOMESTIC_KEYWORDS.slice(0, 10)];
    default:
      return base;
  }
}
