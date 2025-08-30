import "../../styles/HeroSection.css";

import { motion } from "framer-motion";

export const HeroSectionFaqs = () => {
  return (
    <div className="bg-green">
      <div className="hero-section rate">
        {/* Left Content */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <br />
          <br />
          {/* Header Text */}
          <motion.h4
            className="header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h4>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="desc"
            style={{ textAlign: "center", margin: "0 auto" }}
          >
            Exchange unused gift cards for cash at amazing rates in split
            seconds.
          </motion.p>
          <br />
          <br />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSectionFaqs;
