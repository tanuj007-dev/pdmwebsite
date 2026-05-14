import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // cubic-bezier premium easing
    },
  },
};

const ContractorHero = () => {
  const ref = useRef(null);

  // Cursor Parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f9fafb] via-white to-[#f3f7f4]">

      {/* subtle noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {/* Tag */}
          <motion.p
            variants={item}
            className="text-[#599463] font-semibold text-sm mb-4 uppercase tracking-[0.2em]"
          >
            Website Design for Contractors
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-extrabold text-[#230B55] leading-[1.1] tracking-tight"
          >
            Get More Contractor <br />
            <span className="bg-gradient-to-r from-[#599463] to-[#7edc8c] bg-clip-text text-transparent">
              Leads in Your City
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-6 text-gray-600 text-lg max-w-lg leading-relaxed"
          >
            We build high-converting contractor websites that rank on Google
            and consistently bring you qualified leads.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="mt-8 flex gap-4">

            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-gradient-to-r from-[#FF8500] to-[#ff9f2f] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-[0_10px_30px_rgba(255,133,0,0.35)] overflow-hidden"
            >
              {/* glow */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500  bg-[#ff9f2f]" />

              {/* shine swipe */}
              <span className="absolute -left-[100%] top-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-700" />

              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation
                <ArrowRight size={18} />
              </span>
            </motion.button>

            {/* Secondary */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              className="border border-gray-300 hover:border-[#599463] px-8 py-4 rounded-xl font-semibold text-[#230B55] backdrop-blur-md bg-white/60 transition-all"
            >
              View Our Work
            </motion.button>

          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative perspective-[1200px]"
        >

          {/* Image Wrapper */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.18)] border border-white/40">

            {/* animated border glow */}
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-transparent via-[#599463]/40 to-transparent animate-pulse" />

            {/* Image */}
            <motion.img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Contractor"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1.05 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="w-full h-[480px] object-cover"
            />

            {/* glass overlay */}
            <div className="absolute inset-0 bg-white/10 " />

            {/* light shine */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* LEFT SPLIT */}
            <motion.div
              initial={{ x: 0, opacity: 1 }}
              whileInView={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1.3, ease: [0.7, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-1/2 h-full bg-white z-10 backdrop-blur-md"
            />

            {/* RIGHT SPLIT */}
            <motion.div
              initial={{ x: 0, opacity: 1 }}
              whileInView={{ x: "100%", opacity: 0 }}
              transition={{ duration: 1.3, ease: [0.7, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-1/2 h-full bg-white z-10 backdrop-blur-md"
            />

          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              y: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
            className="absolute -bottom-8 -left-8 bg-white/70 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-white/40"
          >
            <p className="text-[#599463] font-bold text-xl">+220% Calls</p>
            <p className="text-sm text-gray-600">
              Average increase for our clients
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default ContractorHero;