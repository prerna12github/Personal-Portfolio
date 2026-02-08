import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
{ name: "Home", href: "#home", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Qualification", href: "#qualification", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full z-50 bg-white/90 border-b border-gray-200 backdrop-blur shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">

              {/* Left: Logo + Name */}
              <div className="flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://thumbs.dreamstime.com/b/pks-letter-initial-logo-design-vector-illustration-letter-initial-logo-design-vector-illustration-pks-letter-initial-logo-design-236635893.jpg?w=768"
                  alt="Logo"
                />
                <span className="text-black font-semibold ml-2">Prerna</span>
              </div>

              {/* Right: Desktop navigation links */}
              <div className="hidden sm:flex space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-200 hover:text-blue-700",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
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
          <Disclosure.Panel className="sm:hidden bg-white/90 border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-200 hover:text-blue-700",
                    "block px-3 py-2 rounded-md text-base font-medium"
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
