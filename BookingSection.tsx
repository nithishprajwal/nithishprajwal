import { motion } from 'motion/react';
import { Calendar, Users, ChevronDown } from 'lucide-react';

export function BookingSection() {
  return (
    <section id="booking" className="relative py-32 px-8 z-10 bg-deep-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-12 md:p-20 relative overflow-hidden box-glow"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />
          
          <div className="text-center mb-16">
            <span className="text-gold-500 tracking-widest uppercase text-sm mb-6 block">Reservations</span>
            <h2 className="text-4xl md:text-6xl font-serif text-ivory mb-6 leading-tight">
              Secure Your <span className="italic text-gold-500">Stay</span>
            </h2>
            <p className="text-ivory/60 text-lg leading-relaxed max-w-xl mx-auto">
              Embark on a journey of unparalleled luxury. Select your dates to check availability.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <label className="text-gold-500 text-xs uppercase tracking-widest mb-2 block">Check-in</label>
                <div className="flex items-center border-b border-ivory/20 pb-2 group-hover:border-gold-500 transition-colors">
                  <Calendar className="w-5 h-5 text-ivory/40 mr-4" />
                  <input 
                    type="date" 
                    className="bg-transparent text-ivory w-full focus:outline-none placeholder-ivory/20"
                    placeholder="Select Date"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <label className="text-gold-500 text-xs uppercase tracking-widest mb-2 block">Check-out</label>
                <div className="flex items-center border-b border-ivory/20 pb-2 group-hover:border-gold-500 transition-colors">
                  <Calendar className="w-5 h-5 text-ivory/40 mr-4" />
                  <input 
                    type="date" 
                    className="bg-transparent text-ivory w-full focus:outline-none placeholder-ivory/20"
                    placeholder="Select Date"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <label className="text-gold-500 text-xs uppercase tracking-widest mb-2 block">Guests</label>
                <div className="flex items-center border-b border-ivory/20 pb-2 group-hover:border-gold-500 transition-colors cursor-pointer">
                  <Users className="w-5 h-5 text-ivory/40 mr-4" />
                  <select className="bg-transparent text-ivory w-full focus:outline-none appearance-none cursor-pointer">
                    <option value="1" className="bg-deep-black">1 Guest</option>
                    <option value="2" className="bg-deep-black">2 Guests</option>
                    <option value="3" className="bg-deep-black">3 Guests</option>
                    <option value="4" className="bg-deep-black">4 Guests</option>
                  </select>
                  <ChevronDown className="w-5 h-5 text-ivory/40 ml-auto" />
                </div>
              </div>
              
              <div className="relative group">
                <label className="text-gold-500 text-xs uppercase tracking-widest mb-2 block">Suite Type</label>
                <div className="flex items-center border-b border-ivory/20 pb-2 group-hover:border-gold-500 transition-colors cursor-pointer">
                  <span className="w-5 h-5 text-ivory/40 mr-4 flex items-center justify-center font-serif italic">S</span>
                  <select className="bg-transparent text-ivory w-full focus:outline-none appearance-none cursor-pointer">
                    <option value="penthouse" className="bg-deep-black">The Lumina Penthouse</option>
                    <option value="celestial" className="bg-deep-black">Celestial Suite</option>
                    <option value="aura" className="bg-deep-black">Aura Executive Room</option>
                  </select>
                  <ChevronDown className="w-5 h-5 text-ivory/40 ml-auto" />
                </div>
              </div>
            </div>

            <div className="pt-8 text-center">
              <button 
                type="button"
                className="px-12 py-5 bg-gold-500 text-deep-black font-semibold tracking-widest uppercase text-sm hover:bg-gold-400 transition-all duration-300 w-full md:w-auto box-glow"
              >
                Check Availability
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
