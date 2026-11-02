import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX, FiArrowUpRight, FiFileText } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";
import { Sparkle } from "./Doodles";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Exploring", href: "#exploring" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ["hero", "about", "projects", "exploring", "skills", "education", "resume", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 pb-2 transition-all duration-300">
      <nav
        className={`mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E5DACD] shadow-[0_4px_20px_-2px_rgba(70,50,30,0.08)] py-2.5 px-4 sm:px-6"
            : "bg-[#FAF7F2]/70 backdrop-blur-sm border border-[#EADBCE]/60 py-3 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#E5DACD] group-hover:border-[#D95338] transition-colors shadow-sm bg-white">
                <img
                  src={personalInfo.avatarImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = personalInfo.profileImage;
                  }}
                />
              </div>
              {/* Online / Active status dot */}
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-base sm:text-lg text-[#2B2621] tracking-tight group-hover:text-[#D95338] transition-colors flex items-center gap-1.5">
                {personalInfo.preferredName}
                <Sparkle className="w-3.5 h-3.5 text-amber-500 opacity-80" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#7A7065] -mt-0.5 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D95338]" />
                MCA @ KGEC
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#F3EDE2]/80 p-1 rounded-xl border border-[#E5DACD]/70">
            {navLinks.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? "bg-white text-[#2B2621] shadow-xs font-semibold"
                      : "text-[#6E6358] hover:text-[#2B2621] hover:bg-white/50"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#D95338] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Resume Link */}
            <a
              href={personalInfo.resumePath}
              download="Prerna_Kumari_Sharma_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#FEF9C3] text-[#854D0E] border border-[#FACC15]/60 hover:bg-[#FEF08A] hover:border-[#EAB308] transition-all shadow-[1px_2px_0px_rgba(0,0,0,0.05)] active:translate-y-0.5"
              title="Download Resume"
            >
              <FiFileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Social Icons */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-[#554D44] hover:text-[#2B2621] hover:bg-[#F3EDE2] transition-colors border border-transparent hover:border-[#E5DACD]"
              title="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-[#554D44] hover:text-[#0A66C2] hover:bg-[#F3EDE2] transition-colors border border-transparent hover:border-[#E5DACD]"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-[#2B2621] text-white hover:bg-[#D95338] transition-all duration-200 shadow-sm hover:shadow active:scale-95"
            >
              <span>Let's Talk</span>
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#2B2621] hover:bg-[#F3EDE2] transition-colors border border-[#E5DACD]"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#E5DACD] flex flex-col gap-1 pb-2 animate-fadeInUp">
            <div className="grid grid-cols-2 gap-1.5 py-1">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3 py-2 rounded-lg text-sm text-[#4A4238] hover:text-[#2B2621] hover:bg-white/70 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#E5DACD]/60">
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-[#554D44] hover:bg-[#F3EDE2]"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-[#0A66C2] hover:bg-[#F3EDE2]"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>

              <a
                href={personalInfo.resumePath}
                download="Prerna_Kumari_Sharma_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FEF9C3] text-[#854D0E] border border-[#FACC15]"
              >
                <FiFileText className="w-3.5 h-3.5" />
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
