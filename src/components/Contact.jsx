import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiSend, FiCopy, FiCheck, FiArrowUpRight, FiHeart, FiMessageSquare } from "react-icons/fi";
import { personalInfo, socialLinks } from "../data/portfolioData";
import { Sparkle, WashiTape, HandStar, FlowerDoodle } from "./Doodles";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct mailto link as reliable direct email fallback
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Prerna,\n\n${formData.message}\n\nFrom:\n${formData.name} (${formData.email})`
    )}`;

    // Open user's email client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF2F8] text-[#9D174D] text-xs font-mono mb-3 border border-[#FBCFE8]">
          <FlowerDoodle className="w-3.5 h-3.5 text-pink-500" />
          <span>get in touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2621] tracking-tight">
          Have an interesting idea? <span className="text-[#D95338]">Let's build something!</span>
        </h2>
        
        <p className="mt-2 text-stone-600 font-hand text-xl max-w-xl">
          Whether you want to discuss Agentic AI, share a project idea, or just say hello 👋
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Social Connection Cards & Quick Copy */}
        <div className="lg:col-span-5 space-y-4 text-left">
          
          {/* Main Info Card with Scrapbook Washi Tape */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#E5DACD] shadow-xs">
            <WashiTape color="pink" rotation="-2deg" className="w-24 h-5 -top-2.5 left-8" />
            
            <h3 className="text-xl font-extrabold text-[#2B2621] mb-2 flex items-center gap-2">
              <span>Let's Connect</span>
              <Sparkle className="w-4 h-4 text-amber-500" />
            </h3>

            <p className="text-xs sm:text-sm text-[#5C5348] leading-relaxed mb-6">
              I'm always open to discussing new AI architectures, research collaborations, internship opportunities, or interesting full-stack projects.
            </p>

            {/* Email Quick Copy Pill */}
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EADBCE] flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#9C8F80] block font-bold">
                  Direct Inbox
                </span>
                <span className="text-xs sm:text-sm font-mono text-[#2B2621] font-medium truncate block">
                  {personalInfo.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-xl bg-white text-xs font-semibold text-[#2B2621] border border-[#E5DACD] hover:border-[#D95338] hover:text-[#D95338] transition-all flex items-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer flex-shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <FiCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white border border-[#E5DACD] hover:border-[#2B2621] hover:shadow-xs transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-stone-100 text-[#2B2621] group-hover:bg-[#2B2621] group-hover:text-white transition-colors">
                  <FaGithub className="w-4 h-4" />
                </div>
                <FiArrowUpRight className="w-4 h-4 text-[#8A7D6F] group-hover:text-[#2B2621] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div>
                <span className="font-bold text-sm text-[#2B2621] block">GitHub</span>
                <span className="text-xs text-[#706456] font-mono">@prerna12github</span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white border border-[#E5DACD] hover:border-[#0A66C2] hover:shadow-xs transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-sky-50 text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                  <FaLinkedin className="w-4 h-4" />
                </div>
                <FiArrowUpRight className="w-4 h-4 text-[#8A7D6F] group-hover:text-[#0A66C2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div>
                <span className="font-bold text-sm text-[#2B2621] block">LinkedIn</span>
                <span className="text-xs text-[#706456] font-mono">prerna-kumari-sharma</span>
              </div>
            </a>
          </div>

          {/* Location note */}
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EADBCE] text-xs text-[#706456] flex items-center justify-between">
            <span>📍 Kalyani, West Bengal, India</span>
            <span className="font-mono text-[#D95338] font-bold">IST (UTC +5:30)</span>
          </div>

        </div>

        {/* Right Column: Interactive Friendly Contact Form */}
        <div className="lg:col-span-7 relative text-left">
          <WashiTape color="yellow" rotation="1.2deg" className="w-32 h-6 -top-3 right-10" />

          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E5DACD] shadow-xs relative">
            <h3 className="text-xl font-extrabold text-[#2B2621] mb-1 flex items-center gap-2">
              <FiMessageSquare className="w-5 h-5 text-[#D95338]" />
              <span>Send a Message</span>
            </h3>
            <p className="text-xs text-[#706456] mb-6">
              Drop your details below and it will compose a direct email message to Prerna.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <FiHeart className="w-6 h-6 animate-bounce" />
                </div>
                <h4 className="text-lg font-bold text-[#14532D]">
                  Thank you for reaching out!
                </h4>
                <p className="text-xs sm:text-sm text-[#166534] max-w-md mx-auto">
                  Your email client has been prepared with your message. I look forward to connecting with you soon!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2B2621] mb-1">
                      Your Name <span className="text-[#D95338]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] text-xs sm:text-sm text-[#2B2621] placeholder-[#A89F91] focus:outline-none focus:border-[#D95338] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2B2621] mb-1">
                      Your Email <span className="text-[#D95338]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] text-xs sm:text-sm text-[#2B2621] placeholder-[#A89F91] focus:outline-none focus:border-[#D95338] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B2621] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, Agentic AI chat, or collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] text-xs sm:text-sm text-[#2B2621] placeholder-[#A89F91] focus:outline-none focus:border-[#D95338] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2B2621] mb-1">
                    Message <span className="text-[#D95338]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Prerna, I loved your work on the Agentic Literature Review system..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] text-xs sm:text-sm text-[#2B2621] placeholder-[#A89F91] focus:outline-none focus:border-[#D95338] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2B2621] text-white text-xs sm:text-sm font-semibold hover:bg-[#D95338] transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <FiSend className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
