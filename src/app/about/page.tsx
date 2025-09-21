import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <Navigation />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}
