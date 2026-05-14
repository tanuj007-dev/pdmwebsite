import React, { useEffect, useState, useRef, memo } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap, Shield, Crown } from "lucide-react";

/* COUNT UP - Logic unchanged, just ensuring smooth re-renders */
const CountUp = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value.match(/\d+/)?.[0] || 0);
    const incrementTime = (duration * 1000) / (end / Math.ceil(end / 60));

    const counter = setInterval(() => {
      start += Math.ceil(end / 60);
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {value}
    </span>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$800 - $1500",
      icon: <Shield className="text-gray-400" size={24} />,
      features: [
        "5–7 pages",
        "Mobile friendly",
        "Basic SEO",
        "Contact integration",
      ],
      highlight: false,
    },
    {
      name: "Growth",
      price: "$1500 - $3000",
      icon: <Zap className="text-[#FF8500]" size={24} />,
      features: [
        "8–15 pages",
        "On-page SEO",
        "Speed optimization",
        "Lead funnels",
        "Analytics",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "$3000 - $7000+",
      icon: <Crown className="text-gray-400" size={24} />,
      features: [
        "Custom design",
        "Conversion UX",
        "Landing pages",
        "Advanced SEO",
        "CRM setup",
      ],
      highlight: false,
    },
  ];

  return (
    <section
      className="bg-[#FFFFFF] py-16 sm:py-24 lg:py-28 px-4 sm:px-6"
      style={{ fontFamily: "Satoshi, Arial, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER - Responsive Font Sizes */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#230B55] mb-4 sm:mb-6"
          >
            Simple Pricing.{" "}
            <span className="text-[#FF8500]">Powerful Results.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Choose the perfect plan to scale your local business.
          </motion.p>
        </div>

        {/* CARDS - Grid auto-handles mobile stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`relative bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                plan.highlight
                  ? "border-[#599463] shadow-[0_20px_60px_rgba(0,0,0,0.1)] lg:scale-105 z-10"
                  : "border-gray-200 hover:border-[#599463] hover:shadow-lg"
              }`}
            >

              {/* BADGE */}
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF8500] text-white px-4 sm:px-5 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}

              {/* ICON & NAME */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-gray-50 rounded-xl">
                  {plan.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#230B55]">
                  {plan.name}
                </h3>
              </div>

              {/* PRICE */}
              <div className="mb-8 sm:mb-10">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#230B55]">
                  <CountUp value={plan.price} />
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-2">
                  Estimated investment
                </p>
              </div>

              {/* FEATURES */}
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <Check size={16} className="text-[#599463] shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base ${
                  plan.highlight
                    ? "bg-[#FF8500] hover:bg-[#e67600] text-white shadow-md"
                    : "bg-gray-100 hover:bg-gray-200 text-[#230B55]"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <p className="text-center text-gray-400 text-xs sm:text-sm mt-12 sm:mt-16">
          Looking for something custom?{" "}
          <a href="#" className="text-[#599463] font-semibold underline">
            Contact us
          </a>
        </p>

      </div>
    </section>
  );
};

export default memo(PricingSection);