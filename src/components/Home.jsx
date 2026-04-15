import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { StarsBackground } from './animate-ui/components/backgrounds/stars';
import { PixelImage } from './ui/pixel-image';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative flex items-center justify-between min-h-screen px-40 overflow-hidden">
      <StarsBackground className="absolute inset-0" starColor="#370c3fff" speed={50}>
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        {/* Left image with pixel animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative z-10"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <PixelImage
              src="/prernapic.png"
              grid="6x4"
              grayscaleAnimation={true}
              pixelFadeInDuration={1200}
              maxAnimationDelay={1500}
              colorRevealDelay={1500}
              puzzleSpread={250}
              triggerAnimation={true}
              animationType="spiral"
              glowEffect={true}
              shimmerEffect={true}
            />
          </motion.div>
        </motion.div>

        {/* Right text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-left relative z-10"
        >
          <motion.h1 
            variants={itemVariants} 
            whileHover={{ scale: 1.02 }}
            className="text-5xl font-extrabold text-white mb-2"
          >
            Hi There, 👋
          </motion.h1>
          <motion.h2 
            variants={itemVariants} 
            whileHover={{ scale: 1.01 }}
            className="text-5xl font-semibold text-white"
          >
            I'm <span className="text-purple-300">Prerna Kumari Sharma</span>
          </motion.h2>

          {/* Social icons */}
          <motion.div variants={itemVariants} className="flex space-x-6 mt-8">
            {[
              { icon: FaFacebook, url: "https://facebook.com", color: "text-blue-600" },
              { icon: FaTwitter, url: "https://twitter.com", color: "text-blue-400" },
              { icon: FaInstagram, url: "https://instagram.com", color: "text-pink-500" },
              { icon: FaLinkedin, url: "https://linkedin.com", color: "text-blue-700" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-full bg-slate-800/60 backdrop-blur-xl border border-purple-500/30 flex items-center justify-center ${social.color} hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300`}
              >
                <social.icon className="text-2xl" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </StarsBackground>
    </section>
  );
};

export default Home;