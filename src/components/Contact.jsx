import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-blue-100 to-purple-100 py-20 px-6 scroll-smooth"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
            Contact <span className="text-gray-900">Me</span>
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to drop a message below — I’ll get back to you soon.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <form className="flex flex-wrap -m-2">
            {/* Name */}
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-600 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-gray-100 bg-opacity-60 rounded-lg border border-gray-300 
                  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
                  text-gray-700 text-base py-2 px-3 outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Email */}
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-600 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full bg-gray-100 bg-opacity-60 rounded-lg border border-gray-300 
                  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
                  text-gray-700 text-base py-2 px-3 outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Message */}
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-600 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  className="w-full bg-gray-100 bg-opacity-60 rounded-lg border border-gray-300 
                  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
                  text-gray-700 h-32 text-base py-2 px-3 resize-none outline-none transition-all duration-200"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="p-2 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex mx-auto text-white bg-indigo-600 border-0 py-2 px-10 
                focus:outline-none hover:bg-indigo-700 rounded-full text-lg shadow-md 
                transition-all duration-300"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
