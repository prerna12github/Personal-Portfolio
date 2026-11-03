import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiSend, FiCheck, FiArrowUpRight } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Prerna,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="wrap py-20 sm:py-28 border-b border-[#dedede] text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left: Tanuja's Iconic Large Heading & Socials */}
        <div className="lg:col-span-6 space-y-6">
          {/* <p className="eyebrow mb-2">LET'S CONNECT</p>*/}
          <h2 className="leading-[1.1] tracking-[-2px] text-[#242424]">
            Let's make<br />something <em>matter.</em>
          </h2>

          <p className="text-sm sm:text-base text-[#5c5c5c] leading-[1.75] max-w-md">
            I'm always open to discussing new AI architectures, research collaborations, internship opportunities, or interesting full-stack projects.
          </p>

          {/* Tanuja-style contact action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="button"
            >
              <FiMail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="button bg-white text-[#242424] border-[#919191] hover:bg-[#b11f4b] hover:border-[#b11f4b] hover:text-white"
            >
              <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button bg-white text-[#242424] border-[#919191] hover:bg-[#b11f4b] hover:border-[#b11f4b] hover:text-white"
            >
              <FaGithub className="w-4 h-4" />
              <span>GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="pt-4 text-xs font-mono text-[#5c5c5c]">
            <span>Direct Inbox: </span>
            <a href={`mailto:${personalInfo.email}`} className="text-[#b11f4b] hover:underline">
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Right: Direct message box */}
        <div className="lg:col-span-6 p-7 sm:p-9 rounded-[20px] bg-white border border-[#dedede] shadow-soft">
          <p className="eyebrow mb-2">SEND A NOTE</p>
          <h3 className="text-xl font-[500] text-[#242424] mb-4">
            Start a Conversation
          </h3>

          {submitted ? (
            <div className="py-8 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#f4f7f6] text-emerald-700 flex items-center justify-center mx-auto mb-2 border border-emerald-300">
                <FiCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-medium text-[#242424]">Message Prepared</h4>
              <p className="text-xs text-[#5c5c5c] max-w-sm mx-auto">
                Your email client has been opened. I look forward to connecting with you!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 text-xs text-[#b11f4b] hover:underline cursor-pointer block mx-auto font-mono"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#5c5c5c] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#dedede] text-sm text-[#242424] placeholder-[#919191] bg-[#fff8f1]/50 focus:outline-none focus:border-[#b11f4b] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#5c5c5c] mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#dedede] text-sm text-[#242424] placeholder-[#919191] bg-[#fff8f1]/50 focus:outline-none focus:border-[#b11f4b] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#5c5c5c] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Agentic AI discussion, project collaboration, or hello"
                  className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#dedede] text-sm text-[#242424] placeholder-[#919191] bg-[#fff8f1]/50 focus:outline-none focus:border-[#b11f4b] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#5c5c5c] mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Prerna, I noticed your work on the LangGraph literature review system..."
                  className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#dedede] text-sm text-[#242424] placeholder-[#919191] bg-[#fff8f1]/50 focus:outline-none focus:border-[#b11f4b] focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="button cursor-pointer"
              >
                <FiSend className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};

export default Contact;
