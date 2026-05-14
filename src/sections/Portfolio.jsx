import React, { useRef, useLayoutEffect, useState, memo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";

const projects = [
  {
    title: "Construction Company",
    result: "+220% Calls",
    desc: "SEO + landing page revamp.",
    image:
      "/constractor.png",
    link: "https://dimgrey-ibex-629933.hostingersite.com/"
  },
  {
    title: "Trainability",
    result: "Website",
    desc: "Modern business website design.",
    image: "/trainability.png",
    link: "https://www.trainability.ca/",
  },
  {
    title: "HR Property Maintenance",
    result: "Website",
    desc: "Professional property maintenance website.",
    image: "/hrporperty.png",
    link: "https://hrpropertymaintenance.ca/",
  },
 {
  title: "Marrfa",
  result: "Website",
  desc: "Dubai real estate investment platform.",
  image: "/marrfa.png",
  link: "https://www.marrfa.com/",
},
  {
  title: "Trehan Apna Ghar",
  result: "Website",
  desc: "Modern real estate property website.",
  image: "/trehan.png",
  link: "https://trehanapnaghar.com/",
},
  
];

const Portfolio = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useLayoutEffect(() => {
    const calculate = () => {
      if (!trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      const extraOffset =
        viewportWidth < 768
          ? viewportWidth * 0.2
          : viewportWidth * 0.5;

      setMaxScroll(totalWidth - viewportWidth + extraOffset);
    };

    calculate();

    const timer = setTimeout(calculate, 100);

    window.addEventListener("resize", calculate);

    return () => {
      window.removeEventListener("resize", calculate);
      clearTimeout(timer);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const xRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -maxScroll]
  );

  const xTranslate = useSpring(xRaw, {
    stiffness: 70,
    damping: 25
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-slate-50"
      style={{
        height: `${
          maxScroll +
          (typeof window !== "undefined"
            ? window.innerHeight
            : 800)
        }px`
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Header */}
        <header className="text-center mb-8 md:mb-16 px-5">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#FF8500] font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] block mb-3"
          >
            Portfolio
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Recent Work
          </h2>
        </header>

        {/* Cards Track */}
        <motion.div
          ref={trackRef}
          style={{ x: xTranslate }}
          className="flex gap-5 md:gap-8 pl-[8vw] md:pl-[10vw] pr-[20vw] md:pr-[50vw] will-change-transform"
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-[82vw] md:w-[450px] block"
            >
              <div className="rounded-[24px] md:rounded-[32px] overflow-hidden bg-white border border-slate-100 shadow-xl shadow-slate-200/40 group hover:-translate-y-2 transition-all duration-500">
                
                {/* Image */}
                <div className="h-[220px] md:h-[300px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    {project.result}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold mt-4 text-slate-900">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[#FF8500] font-semibold text-sm">
                    View Project
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-40 md:w-64 h-[3px] bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            style={{
              scaleX: scrollYProgress,
              originX: 0
            }}
            className="h-full bg-slate-900"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(Portfolio);