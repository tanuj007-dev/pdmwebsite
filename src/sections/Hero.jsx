import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CTA from "../sections/CTA";

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const duration = 1200;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {value.includes("%") && "%"}
    </span>
  );
};

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="/vedios/hero.mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* NOISE */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
            >
              Get More Local Jobs with a <br />
              High-Converting{" "}
              <span className="text-[#FF8500]">
                Contractor Website
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-gray-300 text-sm md:text-base max-w-xl"
            >
              We build websites that generate leads for plumbers,
              electricians, HVAC & renovation companies.
            </motion.p>

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-300">
              <span className="w-2 h-2 bg-[#61d46b] rounded-full"></span>
              Trusted by 100+ businesses across Canada
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <motion.button
  onClick={() => setShowPopup(true)}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="px-6 py-3 rounded-lg font-medium bg-[#FF8500] hover:bg-[#e67600] transition flex items-center justify-center gap-2"
>
                Get Free Consultation
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-lg font-medium border border-white/20 bg-white/5 hover:bg-white/10 transition"
              >
                View Our Work
              </motion.button>

            </div>

            <p className="mt-4 text-sm text-gray-400">
              No upfront cost • Free consultation
            </p>

          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:flex items-center justify-center"
          >

            {/* LAPTOP */}
            <div className="relative w-full max-w-[650px]">

              <div className="rounded-[24px] overflow-hidden border border-white/10 bg-white/10 backdrop-blur-md shadow-2xl">

                {/* TOP BAR */}
                <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>

                {/* WEBSITE IMAGE */}
                <img
                  src="/heroright.png"
                  alt="website"
                  className="w-full object-cover"
                />

              </div>

              {/* MOBILE */}
              <div className="absolute -bottom-8 -right-6 w-[180px] rounded-[28px] overflow-hidden border-4 border-black shadow-2xl">

                <img
                  src="/rightm.png"
                  alt="mobile"
                  className="w-full object-cover"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </div>
{/* POPUP */}
{showPopup && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 md:p-4">

    <div
      className="
        relative 
        w-full 
        md:max-w-5xl
        max-w-[95vw]
        max-h-[92vh]
        overflow-y-auto
        rounded-[28px]
        bg-white
      "
    >

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowPopup(false)}
        className="
          absolute top-3 right-3 z-50
          w-9 h-9 md:w-10 md:h-10
          rounded-full bg-white shadow-lg
          flex items-center justify-center
          text-[#230B55] font-bold
        "
      >
        ✕
      </button>

      <div className="mobile-popup-fix">
        <CTA />
      </div>

    </div>

    <style jsx>{`
      @media (max-width: 768px) {
        .mobile-popup-fix section {
          padding-top: 20px !important;
          padding-bottom: 20px !important;
        }

        .mobile-popup-fix h2 {
          font-size: 42px !important;
          line-height: 1.1 !important;
        }

        .mobile-popup-fix p {
          font-size: 15px !important;
        }

        .mobile-popup-fix .max-w-7xl {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
          padding-left: 16px !important;
          padding-right: 16px !important;
        }
      }
    `}</style>
  </div>
)}
    </section>
  );
};

export default memo(Hero);