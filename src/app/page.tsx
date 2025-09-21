import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PortfolioGallery from '@/components/PortfolioGallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <Navigation />
      <Hero />
      <PortfolioGallery />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
