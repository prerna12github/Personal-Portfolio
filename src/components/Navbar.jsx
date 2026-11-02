import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Exploring", href: "#exploring" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "exploring", "skills", "education", "resume", "contact"];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="site-header" className="sticky top-0 z-40 bg-[#fff8f1]/94 backdrop-blur-md border-b border-[#dedede]">
      <div className="wrap flex items-center justify-between min-h-[96px] md:min-h-[104px] gap-4">
        
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 text-left group no-underline"
        >
          <img
            src={personalInfo.avatarImage}
            alt={personalInfo.name}
            className="w-12 h-12 rounded-[10px] object-cover border border-[#dedede] flex-shrink-0"
            onError={(e) => {
              e.currentTarget.src = personalInfo.profileImage;
            }}
          />
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold tracking-tight text-[#242424] group-hover:text-[#b11f4b] transition-colors leading-snug">
              {personalInfo.name}
            </span>
            <small className="text-[11px] text-[#5c5c5c] font-normal leading-tight mt-0.5 font-mono">
              AI & Full-Stack Developer
            </small>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isCurrent = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={isCurrent ? "page" : undefined}
                className={`relative text-[13px] transition-colors py-1 ${
                  isCurrent ? "text-[#242424] font-medium" : "text-[#5c5c5c] hover:text-[#242424]"
                }`}
              >
                {item.name}
                {isCurrent && (
                  <span className="absolute bottom-0 left-0 w-4 h-[2px] bg-[#b11f4b]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Contact Nav Action */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="contact-nav hidden sm:inline-flex items-center justify-between gap-4 py-2.5 px-4 rounded-[10px] border border-[#919191] text-[13px] text-[#242424] font-normal hover:bg-[#b11f4b] hover:border-[#b11f4b] hover:text-white transition-all group no-underline"
          >
            <span>Let's talk</span>
            <span className="text-[#b11f4b] group-hover:text-white transition-colors">↗</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-[#dedede] text-[#242424]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fff8f1] border-t border-[#dedede] px-6 py-4 flex flex-col gap-3 text-left">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm text-[#5c5c5c] hover:text-[#242424] py-1 border-b border-[#dedede]/40"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="text-sm font-medium text-[#b11f4b] pt-1"
          >
            Let's talk ↗
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
