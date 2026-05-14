import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    desc: "We learn about your business, goals, and target audience.",
    image: "https://images.unsplash.com/photo-1454165833267-028cc21e7867?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Plan",
    desc: "We create a strategy that is focused on results and growth.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Design",
    desc: "We design a website that represents your brand perfectly.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Develop",
    desc: "We build a fast, secure, and responsive website.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Launch & Grow",
    desc: "We launch and help you grow with ongoing support.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden [will-change:transform]">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 blur-[120px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100 blur-[120px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-orange-500 font-semibold tracking-widest mb-3">
            OUR PROCESS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
            Simple Process. Powerful Results.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 relative">
          
          {/* Animated Connecting Line - Positioned for larger images (top-20) */}
          <div className="hidden md:block absolute top-20 left-0 w-full h-[2px] z-0 px-10 bg-gray-100">
             <motion.div 
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="h-full bg-gray-300"
             />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                duration: 0.9, 
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="text-center group relative z-10 transform-gpu"
            >
              {/* Image Box - Increased to w-40 h-40 */}
              <motion.div 
                whileHover={{ y: -8 }}
                className="w-40 h-40 mx-auto flex items-center justify-center rounded-3xl bg-white shadow-md border border-gray-100 overflow-hidden group-hover:shadow-2xl transition-all duration-300"
              >
                <img 
                  src={step.image} 
                  alt={step.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </motion.div>

              {/* Text Content */}
              <div className="mt-8">
                <h3 className="font-bold text-xl text-[#0f172a]">
                  {i + 1}. {step.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 px-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;