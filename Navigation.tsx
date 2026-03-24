import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-2xl font-serif tracking-widest uppercase text-gold-500">
        Lumina
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
        <a href="#suites" className="hover:text-gold-500 transition-colors">Suites</a>
        <a href="#dining" className="hover:text-gold-500 transition-colors">Dining</a>
        <a href="#spa" className="hover:text-gold-500 transition-colors">Spa</a>
        <button className="px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-deep-black transition-all duration-300">
          Book
        </button>
      </div>
      
      <button className="md:hidden text-ivory">
        <Menu size={24} />
      </button>
    </motion.nav>
  );
}
