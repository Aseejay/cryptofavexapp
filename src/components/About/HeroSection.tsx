import "../../styles/HeroSection.css";

import { motion } from "framer-motion";

export const HeroSectionAbout = () => {
  return (
    <div className="bg-green">
      <div className="hero-section rate">
        {/* Left Content */}
        <br />
        <br />
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header Text */}
          <motion.h4
            className="header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ lineHeight: "30px" }}
          >
            About us
          </motion.h4>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSectionAbout;
