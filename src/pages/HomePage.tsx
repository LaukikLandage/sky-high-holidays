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

export function HomePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://skyhighholidays.vercel.app/',
    name: 'Sky High Holidays',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://skyhighholidays.vercel.app/destinations/{search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Sky High Holidays | Best Travel Agency in Pune, India" 
        description="Sky High Holidays offers the best international and domestic tour packages from India. Book luxury honeymoon packages, Bali tours, Dubai packages and custom itineraries."
        schemaData={schemaData}
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
