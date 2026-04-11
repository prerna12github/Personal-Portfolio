import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/prernakumari.sharma.1/',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
      hoverColor: 'hover:text-blue-500 hover:scale-110'
    },

    {
      name: 'Instagram',
      url: 'https://www.instagram.com/___prernaaaa__/?hl=en',
      icon: (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      ),
      hoverColor: 'hover:text-pink-400 hover:scale-110'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/prerna-kumari-sharma-4304b8253/',
      icon: (
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24" className="w-5 h-5">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" stroke="none" />
        </svg>
      ),
      hoverColor: 'hover:text-blue-600 hover:scale-110'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/prerna12github',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      hoverColor: 'hover:text-gray-200 hover:scale-110'
    }
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-slate-900 via-slate-900 to-black border-t border-white/10">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="container mx-auto px-5 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left section - Brand */}
          <div className="flex flex-col items-start space-y-4">
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
    
              </div>
              <span className="text-2xl font-mono font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              PRERNA
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Crafting beautiful digital experiences with passion and precision.
            </p>
          </div>

          {/* Center section - Quick Links */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h3>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>
          </div>

          {/* Right section - Contact */}
          <div className="flex flex-col items-end space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Get in Touch
            </h3>
            <a 
              href="mailto:prerna@example.com" 
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              prernakumarisharma2003@gmail.com
            </a>
            <p className="text-sm text-gray-500">
              Based in India
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {currentYear} <span className="text-purple-400 font-medium">Prerna Kumari Sharma</span>. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`text-gray-400 ${social.hoverColor} transition-all duration-300 p-2 rounded-full hover:bg-white/5`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute -top-5 right-8 p-2 rounded-full bg-slate-800 border border-white/20 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
          aria-label="Back to top"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
