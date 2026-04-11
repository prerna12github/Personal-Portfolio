import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
{ name: "Home", href: "#home", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Qualification", href: "#qualification", current: false },
  { name: "Skills", href: "#skills", current: false},
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
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

const Navbar = () => {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full z-50 bg-slate-950/20 border-white/10  shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">

              {/* Left: Logo + Name */}
              <div className="flex items-center">
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="group">
                  <span className="text-2xl font-mono font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-violet-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                    PRERNA
                  </span>
                </a>
              </div>

              {/* Right: Desktop navigation links */}
              <div className="hidden sm:flex space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={classNames(
                      item.current
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        : "text-gray-300 hover:bg-white/10 hover:text-white border border-transparent",
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
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
          <Disclosure.Panel className="sm:hidden bg-slate-900/95 border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={classNames(
                    item.current
                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      : "text-gray-300 hover:bg-white/10 hover:text-white border border-transparent",
                    "block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
