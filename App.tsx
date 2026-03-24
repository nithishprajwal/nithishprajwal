import { Navigation } from './components/Navigation';
import { Scene3D } from './components/Scene3D';
import { Hero } from './components/Hero';
import { LuxurySuites } from './components/LuxurySuites';
import { DiningExperience } from './components/DiningExperience';
import { SpaWellness } from './components/SpaWellness';
import { Testimonials } from './components/Testimonials';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="relative bg-deep-black min-h-screen selection:bg-gold-500 selection:text-deep-black">
      <Scene3D />
      <Navigation />
      
      <div className="relative z-10">
        <Hero />
        <LuxurySuites />
        <DiningExperience />
        <SpaWellness />
        <Testimonials />
        <BookingSection />
        <Footer />
      </div>
    </main>
  );
}
