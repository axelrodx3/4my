import Navigation from '@/components/Navigation';
import PortfolioGallery from '@/components/PortfolioGallery';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <Navigation />
      <div className="pt-20">
        <PortfolioGallery />
      </div>
      <Footer />
    </main>
  );
}
