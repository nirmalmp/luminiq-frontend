import Header from '@/components/Header/Header';
import Pricing from '@/components/Pricing/Pricing';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Pricing | Luminiq Media',
  description:
    'Real estate photography, video, drone, floor plan, and virtual tour pricing. Individual services, listing packages, monthly memberships, and team plans.',
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
