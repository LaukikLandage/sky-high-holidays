import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export function HomePage() {
    return (_jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(Hero, {}), _jsx(ServiceMarquee, {}), _jsx(BrandIntro, {}), _jsx(StatsSection, {}), _jsx(Destinations, {}), _jsx(DomesticCarousel, {}), _jsx(About, {}), _jsx(Services, {}), _jsx(WhyChooseUs, {}), _jsx(Testimonials, {}), _jsx(ServicesMarquee, {}), _jsx(FAQ, {}), _jsx(ScrollToTop, {})] }));
}
