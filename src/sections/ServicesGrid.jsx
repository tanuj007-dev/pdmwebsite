import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Website Design",
    desc: "Modern, mobile-friendly websites designed to convert visitors into paying customers.",
    points: ["Unique, Professional Design", "Fully Responsive", "Built for Conversions"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Lead Generation",
    desc: "Get high-quality leads from your website with proven strategies that deliver results.",
    points: ["Lead Forms & CTA Setup", "Landing Pages", "Lead Tracking & Reports"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "SEO & Local SEO",
    desc: "Rank higher on Google and get found by local customers who are ready to hire.",
    points: ["On-Page SEO", "Google Business Setup", "Local Keyword Targeting"],
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Website Speed & Performance",
    desc: "Fast-loading websites that provide a smooth experience and rank better on Google.",
    points: ["Speed Optimization", "Core Web Vitals", "Better User Experience"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Website Maintenance",
    desc: "We take care of your website so you can focus on your business without worries.",
    points: ["Regular Updates", "Backup & Security", "24/7 Support"],
    image: "https://images.unsplash.com/photo-1454165833267-028cc21e7867?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Content & Copywriting",
    desc: "Powerful words that build trust and turn visitors into leads and customers.",
    points: ["Service Page Copy", "About Us & Contact", "SEO-Friendly Content"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
  },
];

const ServicesGrid = () => {
  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 blur-[120px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 blur-[120px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading: Slow Fade & Slide */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 1.2, // Increased duration for slower feel
            ease: [0.16, 1, 0.3, 1] // Custom "Expo" ease for silkiness
          }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold tracking-widest mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
            Everything You Need to Get More Leads
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 40, // Low stiffness = Slower movement
                damping: 20,    // High damping = Smooth landing
                delay: i * 0.15, // Subtle delay between cards
                duration: 1.5   // Overall travel time
              }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-shadow duration-700"
            >
              
              {/* Image with slow zoom */}
              <div className="mb-5 overflow-hidden rounded-xl">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-40 object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm mb-4">
                {service.desc}
              </p>

              <ul className="space-y-2">
                {service.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;