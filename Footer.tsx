import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-20 px-8 z-10 bg-deep-black border-t border-glass-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-2">
          <div className="text-3xl font-serif tracking-widest uppercase text-gold-500 mb-6">
            Lumina
          </div>
          <p className="text-ivory/60 text-sm leading-relaxed max-w-sm mb-8">
            A beacon of luxury in the heart of the metropolis. Experience the future of hospitality today.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/60 hover:text-gold-500 hover:border-gold-500 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/60 hover:text-gold-500 hover:border-gold-500 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/60 hover:text-gold-500 hover:border-gold-500 transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gold-500 text-xs uppercase tracking-widest mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-ivory/60">
            <li><a href="#suites" className="hover:text-ivory transition-colors">Luxury Suites</a></li>
            <li><a href="#dining" className="hover:text-ivory transition-colors">Dining Experience</a></li>
            <li><a href="#spa" className="hover:text-ivory transition-colors">Spa & Wellness</a></li>
            <li><a href="#" className="hover:text-ivory transition-colors">Events & Meetings</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold-500 text-xs uppercase tracking-widest mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-ivory/60">
            <li>1-800-LUMINA-X</li>
            <li>reservations@luminahotel.com</li>
            <li>1000 Celestial Ave,<br />Neo City, NC 90210</li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ivory/40 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Lumina Hotel. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-ivory transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
