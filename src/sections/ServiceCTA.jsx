import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>

      {/* Glow Effects */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-white opacity-10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-white opacity-10 blur-[100px] rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 text-white">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get More Leads for Your Business?
        </h2>

        {/* Subtext */}
        <p className="text-white/80 mb-10 max-w-2xl mx-auto">
          Let’s build a high-converting website that brings you more calls,
          more leads, and more revenue.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Primary Button */}
          <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
            Get a Free Quote →
          </button>

          {/* Secondary */}
          <Link
            to="/contact"
            className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;