import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative bg-white border-t border-gray-100 overflow-hidden"
      style={{ fontFamily: "Satoshi, Arial, sans-serif" }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-0 w-[320px] h-[320px] bg-[#599463]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-[#FF8500]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="py-16 lg:py-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.8fr_1fr] gap-12 lg:gap-16">

            {/* BRAND */}
            <div className="max-w-sm">

              {/* LOGO */}
              <div className="mb-6">
                <img
                  src="/logo.png"
                  alt="PerformDigi Monetize"
                  className="w-[130px] object-contain"
                />
              </div>

              {/* TEXT */}
              <p className="text-[15px] leading-8 text-gray-600 mb-7">
                We build high-converting websites that help local
                businesses grow faster and generate quality leads
                consistently.
              </p>

              {/* CTA */}
              <button className="group inline-flex items-center gap-2 text-[#FF8500] font-semibold text-[15px] hover:gap-3 transition-all duration-300">
                Get Free Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </div>

            {/* QUICK LINKS */}
            <div>

              <h4 className="text-[22px] font-bold text-[#230B55] mb-6">
                Quick Links
              </h4>

              <ul className="space-y-4">
                {["Home", "Services", "Portfolio", "Pricing"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[15px] text-gray-600 hover:text-[#FF8500] transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

            </div>

            {/* SERVICES */}
            <div>

              <h4 className="text-[22px] font-bold text-[#230B55] mb-6">
                Services
              </h4>

              <ul className="space-y-4">
                {[
                  "Website Design",
                  "Local SEO",
                  "Google Ads",
                  "Landing Pages",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[15px] text-gray-600 hover:text-[#599463] transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

            </div>

            {/* CONTACT */}
            <div>

              <h4 className="text-[22px] font-bold text-[#230B55] mb-6">
                Contact
              </h4>

              <ul className="space-y-5">

                {/* EMAIL */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#599463]/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#599463]" />
                  </div>

                  <span className="text-[15px] leading-7 text-gray-600 whitespace-nowrap">
                     performdigimonetize@gmail.com
                  </span>
                </li>

                {/* PHONE */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#599463]/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#599463]" />
                  </div>

                  <span className="text-[15px] leading-7 text-gray-600">
                    +91 9650234073
                  </span>
                </li>

                {/* ADDRESS */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#599463]/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#599463]" />
                  </div>

                  <span className="text-[15px] leading-7 text-gray-600">
                    F24/30 Near Avantika Chowk,
                    <br />
                    Sector 3, Rohini Delhi — 110085
                  </span>
                </li>

              </ul>

            </div>

          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} PerformDigi Monetize. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-[#FF8500] transition-all duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 hover:text-[#FF8500] transition-all duration-300"
            >
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;