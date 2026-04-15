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
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative flex items-center justify-between min-h-screen px-40">
      <StarsBackground className="absolute inset-0" starColor="#370c3fff" speed={50}>
        {/* Left image with pixel animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10"
        >
          <motion.div variants={itemVariants}>
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
          viewport={{ once: true }}
          className="text-left relative z-10"
        >
          <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-white mb-2">
            Hi There, 👋
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-5xl font-semibold text-white">
            I'm <span className="text-purple-300">Prerna Kumari Sharma</span>
          </motion.h2>

          {/* Social icons */}
          <motion.div variants={itemVariants} className="flex space-x-6 mt-8">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook className="text-3xl text-blue-600 transition-transform"/>
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter className="text-3xl text-blue-400 transition-transform"/>
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram className="text-3xl text-pink-500 transition-transform"/>
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-3xl text-blue-700 transition-transform"/>
            </motion.a>
          </motion.div>
        </motion.div>
      </StarsBackground>
    </section>
  );
};

export default Home;