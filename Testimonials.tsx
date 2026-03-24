import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Elena Rostova',
    role: 'Global Nomad',
    text: 'Lumina Hotel is not just a place to stay; it is an experience that transcends time. The attention to detail in the Celestial Suite left me breathless.',
    rating: 5
  },
  {
    name: 'Marcus Chen',
    role: 'Tech Executive',
    text: 'The seamless integration of technology and luxury is unparalleled. From the ambient lighting to the personalized wellness treatments, everything is perfect.',
    rating: 5
  },
  {
    name: 'Sophia Laurent',
    role: 'Design Critic',
    text: 'A masterpiece of modern architecture. The floating panels and glassmorphism elements create a surreal, dream-like atmosphere that is incredibly relaxing.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-8 z-10 bg-deep-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-gold-500 tracking-widest uppercase text-sm mb-6 block">Guest Experiences</span>
          <h2 className="text-5xl md:text-7xl font-serif text-ivory mb-8 leading-tight">
            Voices of <span className="italic text-gold-500">Lumina</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-10 hover:border-gold-500/50 transition-colors duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-ivory/80 text-lg leading-relaxed mb-8 italic font-serif">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="text-gold-500 font-semibold tracking-widest uppercase text-sm">{testimonial.name}</h4>
                <p className="text-ivory/40 text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
