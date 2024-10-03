import FaqSection from "./components/faq-section";
import GallerySection from "./components/gallery-section";
import HomeLanding from "./components/home-landing";
import ServicesSection from "./components/services-section";
import WhyUsSection from "./components/why-us-section";

export default function Home() {
  return (
    <main className='flex flex-col gap-24'>
      <HomeLanding />
      <WhyUsSection />
      <ServicesSection />
      <GallerySection />
      <FaqSection />
    </main>
  );
}
