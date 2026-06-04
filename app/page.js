import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Portfolio from '@/components/Portfolio/Portfolio';
import WhyUs from '@/components/WhyUs/WhyUs';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
