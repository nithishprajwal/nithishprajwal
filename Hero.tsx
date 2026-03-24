import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center z-10 px-8 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-ivory mb-6 leading-tight">
            Lumina Hotel
            <span className="block text-2xl md:text-4xl text-gold-500 mt-4 font-sans font-light tracking-widest text-glow">
              Where Luxury Meets Light
            </span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <button className="px-8 py-4 bg-gold-500 text-deep-black font-semibold tracking-widest uppercase text-sm hover:bg-gold-400 transition-all duration-300 w-full sm:w-auto box-glow">
            Book Your Stay
          </button>
          <button className="px-8 py-4 border border-glass-border bg-glass backdrop-blur-md text-ivory font-semibold tracking-widest uppercase text-sm hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
            Explore Suites
          </button>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs uppercase tracking-widest text-gold-500">Scroll to Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent" />
      </motion.div>
    </section>
  );
}
