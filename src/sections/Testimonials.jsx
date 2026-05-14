import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";

const testimonials = [
  {
    name: "Daniel Brooks",
    business: "Toronto Roofing Experts",
    result: "+187% More Qualified Leads",
    review:
      "We were struggling to get consistent inquiries online before this. Within the first few weeks after launch, we started getting steady roofing leads from across Toronto.",
  },
  {
    name: "Emily Carter",
    business: "Vancouver Elite Dental",
    result: "4.8x More Appointment Bookings",
    review:
      "The new website feels modern and trustworthy. Patients now book directly through the site and our front desk workload has dropped significantly.",
  },
  {
    name: "Ryan Mitchell",
    business: "Mitchell HVAC Solutions",
    result: "+92 Calls In First Month",
    review:
      "The speed, design, and automation made a huge difference for our business. We’re getting better quality customers and far more calls than before.",
  },
  {
    name: "Sophia Bennett",
    business: "Calgary Home Renovations",
    result: "3x Higher Conversion Rate",
    review:
      "People constantly compliment our website now. It finally reflects the quality of our renovation work and helps us close projects faster.",
  },
  {
    name: "Jason Lee",
    business: "North York Auto Spa",
    result: "+240% Online Bookings",
    review:
      "Before this, customers mostly contacted us through Instagram DMs. Now bookings come directly from the website every single day.",
  },
  {
    name: "Olivia Wilson",
    business: "Ottawa Legal Partners",
    result: "Saved 20+ Hours Weekly",
    review:
      "The automation setup completely changed how we handle inquiries. Everything feels organized, professional, and much easier to manage.",
  },
];

const getAvatar = (i) =>
  `https://i.pravatar.cc/100?img=${(i % 70) + 1}`;

function useLoopedData(data, repeat = 4) {
  return useMemo(() => {
    return Array.from({ length: repeat })
      .map(() => data)
      .flat();
  }, [data, repeat]);
}

export default function TestimonialsSection() {
  const looped = useLoopedData(testimonials, 5);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafafa] to-white py-14 md:py-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-[#FF8500]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 mb-10 md:mb-14">

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FF8500]/10 bg-white shadow-sm mb-4">
          <BadgeCheck className="w-3.5 h-3.5 text-[#FF8500]" />

          <span className="text-[11px] sm:text-xs font-medium text-[#FF8500]">
            Trusted By Canadian Businesses
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[black] leading-tight">
          Real Client Success Stories
        </h2>

        <p className="text-gray-500 text-sm md:text-base mt-3 md:mt-4 max-w-xl mx-auto leading-relaxed">
          Helping businesses across Canada generate more leads, calls, and conversions.
        </p>
      </div>

      {/* EDGE FADE */}
      <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20" />
      <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20" />

      {/* MARQUEE */}
      <div className="relative z-10 overflow-hidden pb-6 md:pb-10">
        <motion.div
          className="flex gap-4 md:gap-5 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {looped.map((t, i) => (
            <Card key={i} t={t} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Card({ t, index }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      className="
        group
        relative
        w-[260px]
        sm:w-[290px]
        md:w-[320px]
        shrink-0
        overflow-hidden
        rounded-[22px]
        md:rounded-[26px]
        border border-white/50
        bg-white/80
        backdrop-blur-xl
        p-4 md:p-5
        shadow-[0_10px_35px_rgba(17,17,17,0.06)]
        hover:shadow-[0_18px_50px_rgba(255,133,0,0.18)]
      "
    >
      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF8500] via-[#FFA733] to-[#FF6B00]" />

      {/* TOP */}
      <div className="flex items-center justify-between mb-4">

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3 h-3 md:w-3.5 md:h-3.5 fill-[#FF8500] text-[#FF8500]"
            />
          ))}
        </div>

        <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-[#FF8500]/10 flex items-center justify-center">
          <Quote className="w-4 h-4 text-[#FF8500]" />
        </div>
      </div>

      {/* RESULT BADGE */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF8500] text-white text-[10px] md:text-[11px] font-medium mb-4">
        <ArrowUpRight className="w-3 h-3" />
        {t.result}
      </div>

      {/* REVIEW */}
      <p className="text-[13px] md:text-sm leading-6 md:leading-7 text-gray-600 mb-6">
        “{t.review}”
      </p>

      {/* USER */}
      <div className="flex items-center gap-3">

        <div className="relative">
          <img
            src={getAvatar(index)}
            alt={t.name}
            className="
              w-10 h-10 md:w-11 md:h-11
              rounded-xl object-cover
              ring-2 ring-white
            "
            loading="lazy"
          />

          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#FF8500]">
            {t.name}
          </h4>

          <p className="text-[11px] md:text-xs text-gray-500 mt-0.5">
            {t.business}
          </p>
        </div>
      </div>

      {/* HOVER GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
        <div className="absolute -top-20 right-0 w-32 h-32 bg-[#FF8500]/10 blur-3xl rounded-full" />
      </div>
    </motion.div>
  );
}