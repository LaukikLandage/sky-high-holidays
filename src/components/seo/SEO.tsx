import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  type?: string;
  image?: string;
  keywords?: string;
  schemaData?: Record<string, any> | Record<string, any>[];
  noindex?: boolean;
}

const BASE_URL = 'https://skyhighholidays.vercel.app';

export function SEO({
  title = 'Sky High Holidays | Best Travel Agency in Pune, India',
  description = 'Book the best international and domestic tour packages with Sky High Holidays. We offer luxury travel, honeymoon packages, and customized itineraries from India.',
  canonicalUrl = BASE_URL,
  type = 'website',
  image = `${BASE_URL}/logo.png`,
  keywords,
  schemaData,
  noindex = false,
}: SEOProps) {
  const fullTitle = title.includes('Sky High Holidays') ? title : `${title} | Sky High Holidays`;

  // Default Organization schema — always included
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${BASE_URL}/#organization`,
    name: 'Sky High Holidays',
    alternateName: ['SkyHigh Holidays', 'Sky High Travels', 'Sky High Tour Packages'],
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/logo.png`,
    description: 'Sky High Holidays is a premium travel agency in Pune, India offering international and domestic tour packages, luxury honeymoon trips, and customized holiday itineraries.',
    telephone: '+91-8700558065',
    email: 'ashwin@skyhightravelandtourism.com',
    founder: { '@type': 'Person', name: 'Ashwin Nair' },
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
    areaServed: [
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'Country', name: 'India' },
    ],
    sameAs: [
      'https://www.facebook.com/share/1AfG4C3U3a/?mibextid=wwXIfr',
      'https://www.instagram.com/skyhigh_holidays_?igsh=bXp3dm9pdGZ0bHZx',
      'https://youtube.com/@skyhigh_holidays?si=iXQ4H-RJq747JF2G',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '₹₹',
  };

  const allSchemas = schemaData
    ? [defaultSchema, ...(Array.isArray(schemaData) ? schemaData : [schemaData])]
    : [defaultSchema];

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Sky High Holidays" />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* OpenGraph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Sky High Holidays" />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Pune" />

      {/* JSON-LD Schema markup — one script per schema for clarity */}
      {allSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
