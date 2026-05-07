import { Hero } from '../components/sections/Hero';
import { StatsSection } from '../components/sections/StatsSection';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Destinations } from '../components/sections/Destinations';
import { DomesticCarousel } from '../components/sections/DomesticCarousel';
import { ServiceMarquee } from '../components/sections/ServiceMarquee';
import { BrandIntro } from '../components/sections/BrandIntro';
import { ServicesMarquee } from '../components/sections/ServicesMarquee';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { ScrollToTop } from '../components/ui/ScrollToTop';
import { SEO } from '../components/seo/SEO';
import { HiddenSEOKeywords } from '../components/seo/HiddenSEOKeywords';
import { PAGE_SEO, generateFAQSchema } from '../lib/seoKeywords';

// FAQ data for schema markup (matches FAQ.tsx content)
const homeFAQs = [
  { question: "What type of trips do you offer?", answer: "We offer customized international and domestic tour packages including honeymoon trips, family vacations, corporate tours, and adventure travel across popular destinations like Maldives, Dubai, Bali, Kashmir, Kerala, and more." },
  { question: "Do you handle flights and visas?", answer: "Yes, we provide complete assistance for flights and visa processing as part of our all-inclusive packages. We ensure a hassle-free experience from the moment you book until you return." },
  { question: "How do I book a trip?", answer: "You can book via our website by filling out the enquiry form, or contact us directly via WhatsApp or Phone. Our travel experts will then customize the itinerary and guide you through the payment process." },
  { question: "What payment options are available?", answer: "We accept all major payment methods including UPI, Bank Transfers (IMPS/NEFT), Credit Cards, and Debit Cards. We offer secure payment gateways for your peace of mind." },
  { question: "Are your trips suitable for solo travelers?", answer: "Absolutely! We design special packages for solo travelers, ensuring safety, local support, and curated experiences that make your solo journey memorable and comfortable." },
  { question: "Will there be on-ground support?", answer: "Yes, we provide 24/7 on-ground support through our local representatives and dedicated concierge team. You'll always have someone to call in case of any assistance needed during your trip." },
];

export function HomePage() {
  const homeSchemas = [
    // WebSite schema with SearchAction
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: 'https://skyhighholidays.vercel.app/',
      name: 'Sky High Holidays',
      description: 'Premium travel agency in Pune offering the best international and domestic tour packages from India.',
      publisher: {
        '@type': 'Organization',
        '@id': 'https://skyhighholidays.vercel.app/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://skyhighholidays.vercel.app/destinations/{search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    // FAQPage schema
    generateFAQSchema(homeFAQs),
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        canonicalUrl={PAGE_SEO.home.canonical}
        keywords={PAGE_SEO.home.keywords}
        schemaData={homeSchemas}
      />
      <HiddenSEOKeywords type="home" />
      <Hero />
      <ServiceMarquee />
      <BrandIntro />
      <StatsSection />
      <div id="international-packages">
        <Destinations />
      </div>
      <div id="domestic-packages">
        <DomesticCarousel />
      </div>
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ServicesMarquee />
      <FAQ />
      <ScrollToTop />
    </div>
  );
}
