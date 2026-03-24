import { motion } from 'motion/react';

export function SpaWellness() {
  return (
    <section id="spa" className="relative py-32 px-8 z-10 bg-deep-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-gold-500 tracking-widest uppercase text-sm mb-6 block">Rejuvenation</span>
          <h2 className="text-5xl md:text-7xl font-serif text-ivory mb-8 leading-tight">
            The <span className="italic text-gold-500">Sanctuary</span>
          </h2>
          <p className="text-ivory/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Step into a realm of tranquility where ancient healing traditions meet cutting-edge wellness technology. Restore your mind, body, and spirit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {[
            { title: 'Zero-Gravity Float', desc: 'Sensory deprivation tanks with ambient light therapy.', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop' },
            { title: 'Cryo-Chambers', desc: 'Advanced cold therapy for rapid recovery and vitality.', img: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop' },
            { title: 'Thermal Baths', desc: 'Mineral-rich waters heated by geothermal energy.', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop' },
            { title: 'Aura Massage', desc: 'Personalized treatments using bio-feedback sensors.', img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-serif text-gold-500 mb-2">{item.title}</h3>
                <p className="text-ivory/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
