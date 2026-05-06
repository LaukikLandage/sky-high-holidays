import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  type?: string;
  image?: string;
  schemaData?: Record<string, any> | Record<string, any>[];
}

export function SEO({
  title = 'Sky High Holidays | Best Travel Agency in Pune, India',
  description = 'Book the best international and domestic tour packages with Sky High Holidays. We offer luxury travel, honeymoon packages, and customized itineraries from India.',
  canonicalUrl = 'https://skyhighholidays.vercel.app',
  type = 'website',
  image = 'https://skyhighholidays.vercel.app/logo.png', // Assuming a logo exists or a default image
  schemaData,
}: SEOProps) {
  const fullTitle = title.includes('Sky High Holidays') ? title : `${title} | Sky High Holidays`;

  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Sky High Holidays',
    url: 'https://skyhighholidays.vercel.app',
    logo: 'https://skyhighholidays.vercel.app/logo.png',
    description: 'Sky High Holidays is your premium travel partner, offering international and domestic luxury tour packages, honeymoon packages, and customized itineraries from Pune, India.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9876543210',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi']
    },
    sameAs: [
      'https://www.instagram.com/skyhighholidays',
      // Add other social links if available
    ]
  };

  const finalSchema = schemaData ? [defaultSchema, ...(Array.isArray(schemaData) ? schemaData : [schemaData])] : defaultSchema;

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Sky High Holidays" />
      <meta property="og:image" content={image} />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema markup */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}
