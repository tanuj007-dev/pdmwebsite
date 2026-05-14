import React, { useState } from 'react';
import { Menu, X, ChevronDown, Monitor, Rocket, Cpu, LifeBuoy } from 'lucide-react';
import CTA from "../sections/CTA";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const services = [
    {
      title: "Website",
      icon: <Monitor size={18} />,
      links: ["Website Design", "Landing Pages", "Redesign"]
    },
    {
      title: "Marketing",
      icon: <Rocket size={18} />,
      links: ["Local SEO", "Google Ads", "Funnels"]
    },
    {
      title: "Advanced",
      icon: <Cpu size={18} />,
      links: ["CRM", "Automation", "API"]
    },
    {
      title: "Support",
      icon: <LifeBuoy size={18} />,
      links: ["Maintenance", "Speed", "Hosting"]
    }
  ];

  const toggleMobileSub = (menu) => {
    setActiveMobileSub(activeMobileSub === menu ? null : menu);
  };

  return (
    <nav className="bg-white text-[#230B55] sticky top-0 z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="https://performdigimonetize.com/images/pflogo.png"
              alt="Logo"
              className="h-8 md:h-13 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7">
            <a href="#" className="text-[15px] font-medium hover:text-[#FF8500] transition-all duration-300">
              Home
            </a>

            {/* Industries Dropdown */}
       <div className="relative group">
  <button className="flex items-center text-[15px] font-medium hover:text-[#FF8500] transition-all duration-300">
    Industries
    <ChevronDown
      size={14}
      className="ml-1 group-hover:rotate-180 transition-transform duration-300"
    />
  </button>

  <div className="absolute left-0 mt-4 w-[500px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
    <div className="bg-white border border-gray-100 rounded-xl shadow-2xl py-3 px-3 ring-1 ring-black ring-opacity-5">
      <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
        {[
          'Website for Contractors',
          'Website for Plumbers',
          'Website for Electricians',
          'Website for HVAC Companies',
          'Website for Restaurants',
          'Website for Cafes',
          'Website for Bakeries',
          'Website for Salons',
          'Website for Gyms',
          'Website for Spas',
          'Website for Clinics',
          'Website for Dentists',
          'Website for Physiotherapy',
          'Website for Lawyers',
          'Website for Accountants',
          'Website for Consultants',
          'Website for Real Estate Agents',
          'Website for Property Dealers',
          'Website for Logistics Companies',
          'Website for Trucking Businesses',
        ].map((item) => (
          <button
            key={item}
            onClick={() => setShowPopup(true)}
            className="block w-full text-left px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF8500] rounded-md transition-all"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  </div>
</div>

            {/* Services Mega Menu */}
            <div className="relative group">
              <button className="flex items-center text-[15px] font-medium hover:text-[#FF8500] transition-all duration-300">
                Services
                <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[750px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl p-8 grid grid-cols-4 gap-8 ring-1 ring-black ring-opacity-5">
                  {services.map((section) => (
                    <div key={section.title}>
                      <div className="flex items-center space-x-2 text-[#FF8500] mb-4 font-bold uppercase text-[11px] tracking-widest">
                        {section.icon}
                        <span>{section.title}</span>
                      </div>

                      <ul className="space-y-2.5">
                        {section.links.map((link) => (
                          <li key={link}>
                            <button
                              onClick={() => setShowPopup(true)}
                              className="text-gray-500 hover:text-[#230B55] text-[14px] transition-colors block font-medium text-left"
                            >
                              {link}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* <a
              href="#"
              className="text-[15px] font-medium hover:text-[#FF8500] transition-all duration-300"
            >
              About
            </a> */}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
           <button
  onClick={() => setShowPopup(true)}
  className="bg-[#FF8500] hover:bg-[#e67600] text-white px-7 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-md hover:shadow-orange-200/50"
>
  Free Consultation
</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#230B55] hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[100vh] opacity-100 border-t' : 'max-h-0 opacity-0'
        } overflow-y-auto bg-white`}
      >
        <div className="px-4 py-6 space-y-2">

          <a
            href="#"
            className="block px-3 py-3 text-[16px] font-semibold text-[#230B55]"
          >
            Home
          </a>

          {/* Mobile Industries */}
          <div className="border-b border-gray-50 pb-2">
            <button
              onClick={() => toggleMobileSub('industries')}
              className="w-full flex justify-between items-center px-3 py-3 text-[16px] font-semibold text-[#230B55]"
            >
              Industries

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  activeMobileSub === 'industries' ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeMobileSub === 'industries'
                  ? 'max-h-[500px] mt-2'
                  : 'max-h-0'
              }`}
            >
              {[
                'Contractors',
                'Plumbers',
                'Electricians',
                'HVAC',
                'Restaurants',
                'Dentists',
                'Salons',
                'Gyms',
                'Real Estate',
                'Law Firms'
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setShowPopup(true)}
                  className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF8500] transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Services */}
          <div className="border-b border-gray-50 pb-2">
            <button
              onClick={() => toggleMobileSub('services')}
              className="w-full flex justify-between items-center px-3 py-3 text-[16px] font-semibold text-[#230B55]"
            >
              Services

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  activeMobileSub === 'services' ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeMobileSub === 'services'
                  ? 'max-h-[800px] mt-2'
                  : 'max-h-0'
              }`}
            >
              {services.map((section) => (
                <div key={section.title} className="mb-4 px-6">
                  <div className="flex items-center space-x-2 text-[#FF8500] text-[12px] font-bold uppercase tracking-wider mb-2">
                    {section.icon}
                    <span>{section.title}</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2 pl-6">
                    {section.links.map((link) => (
                      <button
                        key={link}
                        onClick={() => setShowPopup(true)}
                        className="py-1 text-[14px] text-gray-500 text-left"
                      >
                        {link}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#"
            className="block px-3 py-3 text-[16px] font-semibold text-[#230B55] border-b border-gray-50"
          >
            About
          </a>

          <div className="pt-6 px-3">
            <button
  onClick={() => setShowPopup(true)}
  className="w-full bg-[#FF8500] text-white px-5 py-4 rounded-xl font-bold text-[15px] shadow-lg shadow-orange-200"
>
  Free Consultation
</button>
          </div>
        </div>
      </div>

      {/* POPUP FORM */}
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

            {/* FORM */}
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
    </nav>
  );
};

export default Navbar;