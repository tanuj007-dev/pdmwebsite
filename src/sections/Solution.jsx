import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const SolutionSection = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile for disabling 3D tilt
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothConfig = { stiffness: 60, damping: 18, mass: 0.6 };

  const rotateX = useSpring(
    useTransform(y, [-120, 120], isMobile ? [0, 0] : [5, -5]),
    smoothConfig
  );

  const rotateY = useSpring(
    useTransform(x, [-120, 120], isMobile ? [0, 0] : [-5, 5]),
    smoothConfig
  );

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const rect = containerRef.current.getBoundingClientRect();

    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const features = [
    "Lead generation focused websites",
    "Local SEO optimized for Google",
    "Mobile-first modern design",
    "Fast loading & conversion focused",
  ];

  return (
    <section className="relative bg-[#FFFFFF] py-16 sm:py-24 lg:py-10 overflow-hidden font-[Satoshi,Arial,sans-serif]">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-40px] left-[-40px] md:top-[-80px] md:left-[-80px] w-[200px] md:w-[320px] h-[200px] md:h-[320px] bg-gradient-to-br from-[#599463]/15 to-transparent rounded-full blur-3xl" />

        <div className="absolute bottom-[-60px] right-[-40px] w-[240px] md:w-[320px] h-[240px] md:h-[320px] bg-gradient-to-br from-[#FF8500]/15 to-transparent rounded-full blur-3xl" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* LEFT - Visual Section */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
            style={{
              rotateX,
              rotateY,
              perspective: 1200,
            }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[620px] py-6">

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#230B55]/10 to-[#FF8500]/10 blur-3xl rounded-full scale-90" />

              {/* Desktop Preview */}
              <div className="relative z-10 rounded-[28px] p-[1px] bg-gradient-to-br from-[#230B55]/20 to-[#3a0ca3]/10 shadow-[0_25px_80px_rgba(35,11,85,0.18)]">
                <div className="overflow-hidden rounded-[28px] bg-white">
                  <img
                    src="/highleads.png"
                    alt="dashboard"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Mobile Preview */}
              <div className="absolute bottom-0 right-[-10px] sm:right-[-20px] md:right-[-40px] z-20 w-[120px] sm:w-[170px] md:w-[220px]">
                <div className="rounded-[2rem] p-[1px] bg-gradient-to-br from-[#230B55] to-[#3a0ca3] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <div className="overflow-hidden rounded-[1.9rem] bg-white border border-white/20">
                    <img
                      src="/highleads.png"
                      alt="mobile ui"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT - Content */}
          <div className="w-full lg:w-1/2">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.2em] text-[#599463] uppercase bg-[#599463]/10 rounded-full"
            >
              Our Solution
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#230B55] leading-[1.1] mb-6"
            >
              Websites That Bring Leads &{" "}
              <span className="text-[#FF8500]">
                Grow Your Business
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[15px] sm:text-lg text-gray-500 mb-10 leading-relaxed"
            >
              We don't just build "pretty" websites. We build conversion
              machines designed for local contractors to dominate their market.
            </motion.p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50/50"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#599463] flex items-center justify-center shadow-sm shadow-[#599463]/40">
                    <Check
                      size={12}
                      className="text-white"
                      strokeWidth={3}
                    />
                  </div>

                  <span className="text-sm font-bold text-[#230B55]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#FF8500] text-white font-bold text-base shadow-xl shadow-orange-200 flex items-center justify-center gap-3 group transition-all hover:bg-[#e67600]"
            >
              Get Free Consultation

              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </motion.button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;