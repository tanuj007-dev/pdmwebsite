import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  User,
  Mail,
  Phone,
  MessageSquare,
  Globe,
  Search,
  ShoppingCart,
  Share2,
  Target,
  Megaphone,
  Users,
  Rocket,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

const services = [
  { name: "Business Website", icon: <Globe size={18} /> },
  { name: "SEO Services", icon: <Search size={18} /> },
  { name: "Ecommerce Dev", icon: <ShoppingCart size={18} /> },
  { name: "Social Media", icon: <Share2 size={18} /> },
  { name: "Lead Generation", icon: <Target size={18} /> },
  { name: "Google Ads / PPC", icon: <Megaphone size={18} /> },
  { name: "Ecommerce Marketing", icon: <Rocket size={18} /> },
  { name: "Influencer Marketing", icon: <Users size={18} /> },
];

const FinalCTA = () => {
  const [step, setStep] = useState(1);

  const [selected, setSelected] = useState([]);

  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    details: "",
  });

  const next = () => setStep((prev) => Math.min(prev + 1, 4));

  const back = () => setStep((prev) => Math.max(prev - 1, 1));

  const canStep1 =
    form.first && form.last && form.email && form.phone;

  const canStep2 = selected.length > 0;

  const toggleService = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("BUTTON CLICKED");

    try {
      const payload = {
        ...form,
        services: selected || [],
      };

      console.log("SENDING:", payload);

      const response = await fetch(
        "http://127.0.0.1:5000/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      console.log("STATUS:", response.status);

      const data = await response.json();

      console.log("RESPONSE:", data);

      if (response.ok && data.success) {
        alert("Form Submitted Successfully ✅");

        setForm({
          first: "",
          last: "",
          email: "",
          phone: "",
          details: "",
        });

        setSelected([]);

        setStep(1);

      } else {
        alert(data.message || "Server Error");
      }

    } catch (error) {
      console.log("ERROR:", error);
      alert("Something went wrong");
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-white">

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,133,0,0.05),transparent_40%)]" />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#FF8500]/10 blur-[100px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF8500]/10 text-[#FF8500] text-xs font-bold mb-4">
            <Rocket size={14} />
            <span>Growth Engine</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-[#230B55] mb-4 leading-tight">
            Scale Your <br />
            <span className="text-[#FF8500]">Business.</span>
          </h2>

          <p className="text-gray-500 text-lg mb-6 max-w-sm">
            Build a{" "}
            <span className="font-bold text-[#230B55]">
              predictable system
            </span>{" "}
            that brings high-quality clients to you automatically.
          </p>
        </motion.div>

        {/* RIGHT */}
        <div className="relative">

          <motion.div
            layout
            className="relative z-10 bg-white border border-gray-100 p-6 md:p-8 rounded-[24px] shadow-2xl"
          >

            {/* PROGRESS */}
            <div className="mb-6">

              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Step {step} of 4
                </span>

                <span className="text-xs font-bold text-[#FF8500]">
                  {Math.round((step / 4) * 100)}%
                </span>
              </div>

              <div className="h-1 bg-gray-100 rounded-full">
                <motion.div
                  className="h-full bg-[#FF8500]"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(step / 4) * 100}%`,
                  }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">

              <motion.div
                key={step}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >

                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-3">

                    <h3 className="text-xl font-bold text-[#230B55]">
                      Basic Information
                    </h3>

                    <div className="grid grid-cols-2 gap-3">

                      <div className="relative">
                        <User
                          className="absolute left-3.5 top-3.5 text-gray-400"
                          size={16}
                        />

                        <input
                          className="input-with-icon"
                          placeholder="First Name"
                          value={form.first}
                          onChange={(e) =>
                            handleChange("first", e.target.value)
                          }
                        />
                      </div>

                      <input
                        className="input-field"
                        placeholder="Last Name"
                        value={form.last}
                        onChange={(e) =>
                          handleChange("last", e.target.value)
                        }
                      />
                    </div>

                    <div className="relative">
                      <Mail
                        className="absolute left-3.5 top-3.5 text-gray-400"
                        size={16}
                      />

                      <input
                        className="input-with-icon"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) =>
                          handleChange("email", e.target.value)
                        }
                      />
                    </div>

                    <div className="relative">
                      <Phone
                        className="absolute left-3.5 top-3.5 text-gray-400"
                        size={16}
                      />

                      <input
                        className="input-with-icon"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) =>
                          handleChange("phone", e.target.value)
                        }
                      />
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div>

                    <h3 className="text-xl font-bold text-[#230B55] mb-4">
                      Choose Services
                    </h3>

                    <div className="grid grid-cols-2 gap-2">

                      {services.map((item, i) => {

                        const active = selected.includes(item.name);

                        return (
                          <div
                            key={i}
                            onClick={() =>
                              toggleService(item.name)
                            }
                            className={`cursor-pointer p-3 rounded-xl border-2 transition-all flex items-center gap-2
                            ${
                              active
                                ? "border-[#FF8500] bg-[#FF8500]/5"
                                : "border-gray-50 bg-gray-50/50 hover:border-gray-200"
                            }`}
                          >
                            <span
                              className={
                                active
                                  ? "text-[#FF8500]"
                                  : "text-gray-400"
                              }
                            >
                              {item.icon}
                            </span>

                            <span
                              className={`text-[12px] font-bold ${
                                active
                                  ? "text-[#FF8500]"
                                  : "text-gray-600"
                              }`}
                            >
                              {item.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-3">

                    <h3 className="text-xl font-bold text-[#230B55]">
                      Project Details
                    </h3>

                    <div className="relative">

                      <MessageSquare
                        className="absolute left-4 top-4 text-gray-400"
                        size={16}
                      />

                      <textarea
                        placeholder="Tell us about your goals..."
                        className="w-full p-4 pl-10 rounded-xl border border-gray-100 bg-gray-50 min-h-[120px] focus:ring-2 focus:ring-[#FF8500]/10 outline-none text-sm"
                        value={form.details}
                        onChange={(e) =>
                          handleChange("details", e.target.value)
                        }
                      />
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <div className="text-center py-4">

                    <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>

                    <h3 className="text-xl font-bold text-[#230B55]">
                      Ready to Send?
                    </h3>

                    <p className="text-gray-400 text-sm mb-6">
                      Review your info and hit the button below.
                    </p>

                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSubmit}
                      className="w-full py-4 rounded-xl bg-[#FF8500] text-white font-black shadow-lg flex items-center justify-center gap-2"
                    >
                      SEND REQUEST
                      <Send size={18} />
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* NAV */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-50">

              {step > 1 ? (
                <button
                  onClick={back}
                  className="text-xs font-bold text-gray-400 hover:text-[#230B55] flex items-center gap-1"
                >
                  <ArrowLeft size={14} />
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 && (
                <button
                  onClick={next}
                  disabled={
                    (step === 1 && !canStep1) ||
                    (step === 2 && !canStep2)
                  }
                  className="px-6 py-3 rounded-xl bg-[#230B55] text-white text-sm font-bold flex items-center gap-2 disabled:opacity-20 transition-all shadow-md"
                >
                  Continue
                  <ChevronRight size={16} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .input-field,
        .input-with-icon {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          outline: none;
          font-size: 14px;
          color: #230b55;
          transition: 0.2s;
        }

        .input-with-icon {
          padding-left: 38px;
        }

        .input-field:focus,
        .input-with-icon:focus {
          background: white;
          border-color: #ff8500;
          box-shadow: 0 0 0 3px rgba(255, 133, 0, 0.05);
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;