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
import { TravelStories } from '../components/sections/TravelStories';
import { FAQ } from '../components/sections/FAQ';
import { ScrollToTop } from '../components/ui/ScrollToTop';

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServiceMarquee />
      <BrandIntro />
      <StatsSection />
      <Destinations />
      <DomesticCarousel />
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
