import React, { memo, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Layout, Search, MousePointerClick, FileCode, Sparkles } from "lucide-react";

const items = [
  { title: "Website Design", desc: "Turn traffic into real customers with high-performance experiences.", icon: Layout, color: "#599463" },
  { title: "Local SEO", desc: "Capture high-intent searches exactly when customers are ready.", icon: Search, color: "#FF8500" },
  { title: "Google Ads", desc: "Instant visibility with precision-targeted acquisition campaigns.", icon: MousePointerClick, color: "#599463" },
  { title: "Landing Pages", desc: "Conversion-focused pages engineered for specific demand.", icon: FileCode, color: "#FF8500" }
];

const ServicesSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative bg-[#F8F9FC] antialiased">
      {/* Scroll Track - Keep it 450vh for desktop logic */}
      <div className="h-[250vh] lg:h-[450vh]"> 
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          
          {/* Subtle Background Text - Hidden on mobile for performance */}
          <div className="absolute inset-0 hidden lg:flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
            <h1 className="text-[20vw] font-black text-[#1a0f3d]">SERVICES</h1>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full z-10">
            
            {/* LEFT CONTENT */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2 mb-4 lg:mb-6">
                  <div className="h-[1px] w-8 bg-[#599463]" />
                  <span className="text-[10px] lg:text-sm font-bold tracking-[0.3em] text-[#599463] uppercase flex items-center gap-2">
                    <Sparkles size={14} /> Premium Solutions
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-7xl font-bold text-[#1a0f3d] leading-[1.1] lg:leading-[1] tracking-tight">
                  Engineered <br className="hidden lg:block" />
                  <span className="bg-gradient-to-r from-[#599463] to-[#FF8500] bg-clip-text text-transparent">
                    to Growth.
                  </span>
                </h2>
                
                <p className="mt-4 lg:mt-8 text-base lg:text-xl text-gray-500 max-w-sm leading-relaxed font-medium">
                  We bridge the gap between "Local Business" and "Digital Authority."
                </p>

                {/* Progress Indicators - Adjusted for mobile */}
                <div className="mt-8 lg:mt-12 flex gap-2 lg:gap-4">
                  {items.map((_, i) => {
                    const active = useTransform(smoothProgress, 
                      [i / items.length, (i + 1) / items.length], 
                      ["#E5E7EB", "#599463"]
                    );
                    return (
                      <motion.div 
                        key={i} 
                        style={{ backgroundColor: active }} 
                        className="h-1 lg:h-1.5 w-8 lg:w-12 rounded-full" 
                      />
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* RIGHT STACK - The Masterpiece */}
            <div className="relative h-[350px] sm:h-[450px] lg:h-[520px] w-full max-w-[460px] mx-auto mt-10 lg:mt-0">
              {items.map((item, i) => {
                const Icon = item.icon;
                const start = i / items.length;
                const end = (i + 1) / items.length;

                // ENTRY & EXIT Logic (Responsive transforms)
                // Desktop stays the same, Mobile gets reduced travel distance
                const y = useTransform(smoothProgress, [start - 0.15, start], [600, 0]);
                const rotate = useTransform(smoothProgress, [start - 0.15, start], [10, 0]);
                
                const scale = useTransform(smoothProgress, [start, end], [1, 0.9]);
                const opacity = useTransform(smoothProgress, [start, end], [1, 0]);
                const blur = useTransform(smoothProgress, [start, end], ["0px", "4px"]);

                return (
                  <motion.div
                    key={i}
                    style={{ 
                      y,
                      rotate,
                      scale,
                      opacity,
                      filter: `blur(${blur})`,
                      zIndex: i,
                    }}
                    className="absolute inset-0 origin-center"
                  >
                    <div className="h-full w-full p-8 lg:p-12 rounded-[32px] lg:rounded-[48px] bg-white shadow-xl border border-gray-100 flex flex-col justify-between group overflow-hidden">
                      
                      <div className="absolute top-0 right-0 w-24 lg:w-32 h-24 lg:h-32 bg-gradient-to-bl from-gray-50 to-transparent -z-10" />

                      <div>
                        <div 
                          className="w-14 h-14 lg:w-20 lg:h-20 rounded-[18px] lg:rounded-[24px] flex items-center justify-center mb-6 lg:mb-10 shadow-lg"
                          style={{ backgroundColor: `${item.color}15`, color: item.color }}
                        >
                          <Icon className="w-7 h-7 lg:w-9 lg:h-9" strokeWidth={1.5} />
                        </div>

                        <h4 className="text-2xl lg:text-4xl font-bold text-[#1a0f3d] tracking-tight mb-2 lg:mb-4">
                          {item.title}
                        </h4>
                        <p className="text-gray-500 text-sm lg:text-xl leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-100 pt-6 lg:pt-8">
                        <div className="flex items-center gap-2 lg:gap-3">
                          <span className="h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full bg-[#FF8500] animate-pulse" />
                          <span className="text-[10px] font-black text-[#1a0f3d]/30 uppercase tracking-widest">Active</span>
                        </div>
                        <span className="text-2xl lg:text-4xl font-black text-gray-50 lg:opacity-20 italic">
                          0{i + 1}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
      
      <div className="h-[10vh] lg:h-[20vh] bg-white" />
    </section>
  );
};

export default memo(ServicesSection);