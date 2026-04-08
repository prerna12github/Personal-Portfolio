import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone, User, MessageSquare } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "prernakumarisharma2003@gmail.com",
      link: "prernakumarisharma2003@gmail.com",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      link: null,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "Available on request",
      link: null,
      color: "from-indigo-500 to-violet-500",
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, url: "https://www.facebook.com/prernakumari.sharma.1/", color: "hover:text-blue-400" },
    { icon: FaGithub, url: "https://github.com/prerna12github", color: "hover:text-white" },
    { icon: FaInstagram, url: "https://www.instagram.com/___prernaaaa__/?hl=en", color: "hover:text-pink-400" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/prerna-kumari-sharma-4304b8253/", color: "hover:text-blue-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center p-6 md:p-10 lg:p-20 relative overflow-hidden scroll-smooth"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: false }}
            className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wide uppercase rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-purple-500/30 text-purple-300"
          >
            Get In Touch
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
            Let's Work Together!
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss a potential collaboration? 
            I'd love to hear from you. Let's create something amazing!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-300">{info.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-purple-500/20 relative overflow-hidden"
        >
          {/* Decorative gradient corner */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-violet-500/30 to-purple-500/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl pointer-events-none" />

          <form onSubmit={handleSubmit} className="flex flex-wrap -m-4 relative z-10">
            {/* Name */}
            <div className="p-4 w-full md:w-1/2">
              <div className="relative group">
                <label
                  htmlFor="name"
                  className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                    focusedField === "name" || formData.name
                      ? "-top-3 text-xs text-purple-400 bg-slate-800 px-2 rounded"
                      : "top-4 text-gray-500"
                  }`}
                >
                  Your Name
                </label>
                <div className="absolute left-4 top-4 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-300">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-slate-900/60 rounded-xl border border-purple-400/30
                  focus:border-purple-400 focus:bg-slate-900 focus:ring-2 focus:ring-purple-400/30
                  text-white text-base py-4 pl-12 pr-4 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Email */}
            <div className="p-4 w-full md:w-1/2">
              <div className="relative group">
                <label
                  htmlFor="email"
                  className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                    focusedField === "email" || formData.email
                      ? "-top-3 text-xs text-purple-400 bg-slate-800 px-2 rounded"
                      : "top-4 text-gray-500"
                  }`}
                >
                  Your Email
                </label>
                <div className="absolute left-4 top-4 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-slate-900/60 rounded-xl border border-purple-400/30
                  focus:border-purple-400 focus:bg-slate-900 focus:ring-2 focus:ring-purple-400/30
                  text-white text-base py-4 pl-12 pr-4 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Message */}
            <div className="p-4 w-full">
              <div className="relative group">
                <label
                  htmlFor="message"
                  className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                    focusedField === "message" || formData.message
                      ? "-top-3 text-xs text-purple-400 bg-slate-800 px-2 rounded"
                      : "top-4 text-gray-500"
                  }`}
                >
                  Your Message
                </label>
                <div className="absolute left-4 top-4 text-gray-500 group-focus-within:text-purple-400 transition-colors duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-slate-900/60 rounded-xl border border-purple-400/30
                  focus:border-purple-400 focus:bg-slate-900 focus:ring-2 focus:ring-purple-400/30
                  text-white text-base py-4 pl-12 pr-4 h-48 resize-none outline-none transition-all duration-300"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="p-4 w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex mx-auto h-14 active:scale-95 transition overflow-hidden rounded-full p-[1px] focus:outline-none hover:shadow-xl hover:shadow-purple-500/50 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span
                  className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7c3aed_0%,#a78bfa_50%,#4f46e5_100%)] blur-[1px]"
                />
                <span
                  className="inline-flex items-center h-full w-full cursor-pointer justify-center rounded-full bg-slate-950 px-12 text-base font-semibold text-white backdrop-blur-3xl gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">Or connect with me on social media</p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-full bg-slate-800/60 backdrop-blur-xl border border-purple-500/30 flex items-center justify-center text-gray-300 ${social.color} hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300`}
              >
                <social.icon className="text-2xl" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
