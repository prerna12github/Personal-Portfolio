import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 py-20 px-6 scroll-smooth"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
            Contact <span className="text-white">Me</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have a question or want to work together? Feel free to drop a message below — I'll get back to you soon.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-slate-800/60 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-purple-500/20"
        >
          <form className="flex flex-wrap -m-3">
            {/* Name */}
            <div className="p-3 w-full sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-200 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-slate-900/60 rounded-lg border border-purple-400/30
                  focus:border-purple-400 focus:bg-slate-900 focus:ring-2 focus:ring-purple-400/30
                  text-white text-base py-3 px-4 outline-none transition-all duration-200 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Email */}
            <div className="p-3 w-full sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-200 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full bg-slate-900/60 rounded-lg border border-purple-400/30
                  focus:border-purple-400 focus:bg-slate-900 focus:ring-2 focus:ring-purple-400/30
                  text-white text-base py-3 px-4 outline-none transition-all duration-200 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Message */}
            <div className="p-3 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  className="w-full bg-slate-900/60 rounded-lg border border-purple-400/30
                  focus:border-purple-400 focus:bg-slate-900 focus:ring-2 focus:ring-purple-400/30
                  text-white h-40 text-base py-3 px-4 resize-none outline-none transition-all duration-200 placeholder-gray-500"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="p-3 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex mx-auto text-white bg-gradient-to-r from-violet-600 to-purple-600 border-0 py-3 px-16
                focus:outline-none hover:from-violet-700 hover:to-purple-700 rounded-full text-lg shadow-lg
                hover:shadow-purple-500/50 transition-all duration-300"
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
