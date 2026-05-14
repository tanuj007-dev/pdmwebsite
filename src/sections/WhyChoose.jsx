import { motion } from "framer-motion";

const features = [
  {
    title: "Results Driven",
    desc: "We focus on real growth and measurable results for your business.",
  },
  {
    title: "Clear Communication",
    desc: "You always know what's happening with your project.",
  },
  {
    title: "On-Time Delivery",
    desc: "We respect deadlines and always deliver on schedule.",
  },
  {
    title: "Ongoing Support",
    desc: "We stay with you even after launch to help you grow.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const WhyChoose = () => {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-white to-[#f8fafc] overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 blur-[120px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 blur-[120px] opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-orange-500 font-semibold tracking-widest mb-3">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
            Built for Growth. Designed for Results.
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6 }}
              className="group bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 font-bold mb-4 group-hover:bg-orange-500 group-hover:text-white transition">
                {i + 1}
              </div>

              <h3 className="font-semibold text-lg text-[#0f172a] mb-2">
                {itemData.title}
              </h3>

              <p className="text-sm text-gray-500">
                {itemData.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;