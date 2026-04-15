import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Qualification", href: "#qualification" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const scrollToSection = (e, href) => {
  e.preventDefault();
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const getActiveSection = () => {
  const sections = navigation.map(item => item.href.substring(1));
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        return `#${sections[i]}`;
      }
    }
  }
  return "#home";
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActiveSection(getActiveSection());
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure 
      as="nav" 
      className={classNames(
        "fixed top-0 w-full z-50 transition-all duration-500 bg-transparent"
      )}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-18 items-center justify-between">

              {/* Left: Logo + Name */}
              <div className="flex items-center group">
                <a 
                  href="#home" 
                  onClick={(e) => scrollToSection(e, '#home')} 
                  className="relative"
                >
                  <span className="text-2xl font-mono font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-violet-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                    PRERNA
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>

              {/* Right: Desktop navigation links */}
              <div className="hidden sm:flex items-center space-x-2">
                {navigation.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={classNames(
                        "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 overflow-hidden",
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {isActive && (
                        <span className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-purple-500/30 rounded-lg"></span>
                      )}
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"></span>
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel className="sm:hidden bg-transparent border-t border-purple-500/20">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={classNames(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                      isActive
                        ? "bg-gradient-to-r from-violet-600/20 to-purple-600/20 text-white border border-purple-500/40"
                        : "text-gray-400 hover:bg-white/5 hover:text-white border border-transparent"
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
