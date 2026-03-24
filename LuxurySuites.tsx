import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const suites = [
  {
    id: 1,
    name: 'The Lumina Penthouse',
    description: 'A 360-degree panoramic view of the skyline with private infinity pool and dedicated butler service.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
    price: '$5,000 / night'
  },
  {
    id: 2,
    name: 'Celestial Suite',
    description: 'Immersive stargazing ceiling, smart glass walls, and a floating bed experience.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
    price: '$2,500 / night'
  },
  {
    id: 3,
    name: 'Aura Executive Room',
    description: 'Designed for the modern traveler with ambient lighting control and ergonomic luxury.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop',
    price: '$1,200 / night'
  }
];

function SuiteCard({ suite, index }: { suite: typeof suites[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.2 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-[600px] rounded-2xl overflow-hidden cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="absolute inset-0 bg-deep-black/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
      <img 
        src={suite.image} 
        alt={suite.name}
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
        referrerPolicy="no-referrer"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent z-20 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div 
        className="absolute bottom-0 left-0 right-0 p-8 z-30 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
        style={{ transform: "translateZ(50px)" }}
      >
        <p className="text-gold-500 text-sm tracking-widest uppercase mb-2">{suite.price}</p>
        <h3 className="text-3xl font-serif text-ivory mb-4">{suite.name}</h3>
        <p className="text-ivory/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {suite.description}
        </p>
        
        <div className="mt-8 flex items-center gap-4 text-gold-500 uppercase tracking-widest text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          <span>Explore</span>
          <div className="w-8 h-[1px] bg-gold-500" />
        </div>
      </div>
    </motion.div>
  );
}

export function LuxurySuites() {
  return (
    <section id="suites" className="relative py-32 px-8 z-10 bg-deep-black/80 backdrop-blur-sm" style={{ perspective: 1000 }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-ivory mb-4">
              Luxury <span className="text-gold-500 italic">Suites</span>
            </h2>
            <p className="text-ivory/60 max-w-md font-sans font-light leading-relaxed">
              Experience unparalleled comfort in our meticulously designed spaces, where future technology meets timeless elegance.
            </p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-4 text-gold-500 uppercase tracking-widest text-sm hover:text-ivory transition-colors group"
          >
            View All Suites
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suites.map((suite, index) => (
            <SuiteCard key={suite.id} suite={suite} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
