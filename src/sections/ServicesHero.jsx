import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f8fafc] to-white py-20 md:py-24 overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-200 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-blue-200 rounded-full blur-[120px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-orange-500 font-semibold tracking-widest mb-3">
            WHAT WE DO
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#0f172a] leading-tight mb-6">
            Services That <br />
            <span className="text-orange-500">Build Your Business</span>
          </h1>

          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            We create high-converting websites for local contractors that
            generate leads, build trust, and grow your business.
          </p>

          <div className="flex items-center gap-5 flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-medium shadow-lg hover:shadow-orange-300/40 transition">
              Get a Free Quote →
            </button>

            <Link
              to="/work"
              className="text-[#0f172a] font-medium hover:text-orange-500 transition"
            >
              See Our Work →
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* GLASS BG */}
          <div className="absolute w-[380px] md:w-[460px] h-[380px] md:h-[460px] bg-white/40 backdrop-blur-xl rounded-full border border-white/30 shadow-inner"></div>

          {/* IMAGE */}
          <img
            src="/assets/hero-mockup.png"
            alt="mockup"
            className="relative z-10 w-[300px] md:w-[420px] rounded-xl shadow-2xl"
          />

          {/* FLOATING CARD 1 */}
          <div className="absolute top-6 md:top-8 right-0 bg-white/80 backdrop-blur-md px-4 md:px-5 py-3 md:py-4 rounded-xl shadow-lg border border-gray-100 animate-float">
            <p className="text-xs md:text-sm text-gray-400">Leads</p>
            <p className="text-green-500 font-bold text-lg md:text-xl">+120%</p>
          </div>

          {/* FLOATING CARD 2 */}
          <div className="absolute bottom-6 md:bottom-8 left-0 bg-white/80 backdrop-blur-md px-4 md:px-5 py-3 md:py-4 rounded-xl shadow-lg border border-gray-100 animate-float2">
            <p className="text-xs md:text-sm text-gray-400">New Leads</p>
            <p className="font-bold text-base md:text-lg">48</p>
            <p className="text-xs text-gray-400">This Month</p>
          </div>
        </motion.div>
      </div>

      {/* FLOAT ANIMATIONS */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          @keyframes float2 {
            0% { transform: translateY(0); }
            50% { transform: translateY(10px); }
            100% { transform: translateY(0); }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .animate-float2 {
            animation: float2 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ServicesHero;