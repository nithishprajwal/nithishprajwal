import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function DiningExperience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="dining" ref={ref} className="relative py-32 px-8 z-10 bg-deep-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[800px] rounded-2xl overflow-hidden"
        >
          <motion.img 
            style={{ y, scale: 1.1 }}
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop" 
            alt="Fine Dining"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent" />
          
          <div className="absolute bottom-12 left-12 right-12 glass-panel p-8">
            <h4 className="text-gold-500 text-sm tracking-widest uppercase mb-2">Michelin Starred</h4>
            <h3 className="text-3xl font-serif text-ivory mb-4">Restaurant Nova</h3>
            <p className="text-ivory/80 text-sm leading-relaxed">
              A culinary journey through the cosmos. Molecular gastronomy meets traditional flavors in an unforgettable dining experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center"
        >
          <span className="text-gold-500 tracking-widest uppercase text-sm mb-6 block">Gastronomy</span>
          <h2 className="text-5xl md:text-7xl font-serif text-ivory mb-8 leading-tight">
            Taste the <br />
            <span className="italic text-gold-500">Future</span>
          </h2>
          
          <p className="text-ivory/60 text-lg leading-relaxed mb-12 max-w-lg">
            Our award-winning chefs blend art, science, and the finest ingredients to create dishes that challenge perception and delight the senses. Dine under a canopy of digital stars.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h5 className="text-3xl font-serif text-gold-500 mb-2">3</h5>
              <p className="text-sm text-ivory/60 uppercase tracking-widest">Michelin Stars</p>
            </div>
            <div>
              <h5 className="text-3xl font-serif text-gold-500 mb-2">10k+</h5>
              <p className="text-sm text-ivory/60 uppercase tracking-widest">Wine Labels</p>
            </div>
          </div>
          
          <button className="self-start px-8 py-4 border border-gold-500 text-gold-500 uppercase tracking-widest text-sm hover:bg-gold-500 hover:text-deep-black transition-all duration-300">
            Reserve a Table
          </button>
        </motion.div>

      </div>
    </section>
  );
}
