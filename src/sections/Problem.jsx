import React, { memo, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PhoneOff, Users, Globe, TrendingUp } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease },
  },
};

const ProblemSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Reduced parallax for smoother mobile feel
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-2%"]);

  const problems = useMemo(
    () => [
      {
        title: "Relying only on referrals?",
        desc: "Word of mouth is unpredictable. You need a consistent lead generation system.",
        icon: <Users size={20} />,
        color: "from-[#599463] to-[#7bc47f]",
      },
      {
        title: "Not getting calls from Google?",
        desc: "Your business is invisible to local customers actively searching for your services.",
        icon: <PhoneOff size={20} />,
        color: "from-[#599463] to-[#7bc47f]",
      },
      {
        title: "Outdated or no website?",
        desc: "Your website is your first impression. A weak design instantly kills trust.",
        icon: <Globe size={20} />,
        color: "from-[#599463] to-[#7bc47f]",
      },
      {
        title: "Low conversion from visitors?",
        desc: "Even if traffic comes, poor UX and messaging stop visitors from becoming leads.",
        icon: <TrendingUp size={20} />,
        color: "from-[#599463] to-[#7bc47f]",
      },
    ],
    []
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden font-[Satoshi,Arial,sans-serif] bg-white"
    >
      {/* subtle grid - Size adjusted for mobile */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:36px_36px]" />

      <motion.div
        style={{ y: yContent }}
        className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <div className="order-1">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1a0b3b] leading-[1.2] lg:leading-tight">
              Not Getting Enough{" "}
              <span className="text-[#E67600]">
                Local Jobs?
              </span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-lg mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
              These are the biggest growth blockers stopping contractors from scaling.
              Fix these — and your leads explode.
            </p>
          </motion.div>

          {/* CARDS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
          >
            {problems.map((itemData) => (
              <motion.div
                key={itemData.title}
                variants={item}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }} // Better mobile feedback
                className="group"
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-6 h-full shadow-sm hover:shadow-xl transition-all duration-300">
                  <div
                    className={`w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br ${itemData.color} text-white mb-5 shadow-sm`}
                  >
                    {itemData.icon}
                  </div>

                  <h3 className="text-[15px] font-bold text-[#1a0b3b] mb-2 leading-snug">
                    {itemData.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {itemData.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA - Hidden on very small screens or styled differently */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center lg:text-left"
          >
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
              Ready to fix this?
            </p>

            <div className="mt-3 flex items-center justify-center lg:justify-start gap-2 text-sm font-bold text-[#1a0b3b] animate-bounce">
              <span className="text-[#E67600]">↓</span> Scroll to see the solution
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE - Mobile optimized height and order */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-2 w-full h-[300px] sm:h-[400px] lg:h-[580px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5"
        >
          <img
            src="/lowww.jpeg"
            alt="Business transformation"
            className="w-full h-full object-cover object-center  transition-all duration-700"
          />
          {/* Subtle overlay for better brand feel */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(ProblemSection);