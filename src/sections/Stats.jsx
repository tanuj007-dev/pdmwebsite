import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setCount(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      
      {/* ORANGE GRADIENT ONLY */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700"></div>

      {/* GLOW */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              {/* COUNTER */}
              <h3 className="text-3xl md:text-4xl font-bold">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>

              <p className="text-sm text-white/80 mt-2">
                {stat.label}
              </p>

              {/* HOVER LINE */}
              <div className="w-0 h-[2px] bg-white/70 mx-auto mt-3 group-hover:w-10 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;