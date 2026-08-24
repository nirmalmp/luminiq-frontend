import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import TrustedBy from '@/components/TrustedBy/TrustedBy';
import Services from '@/components/Services/Services';
import Portfolio from '@/components/Portfolio/Portfolio';
import WhyUs from '@/components/WhyUs/WhyUs';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { getProperty, pickPhotos } from '@/lib/properties';

export default function Home() {
  const featured = getProperty('timber-frame-estate');
  const [heroPhoto] = pickPhotos(featured, [featured.heroPhoto]);

  return (
    <>
      <Header />
      <main>
        <Hero photo={heroPhoto} />
        <TrustedBy />
        <Services />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
