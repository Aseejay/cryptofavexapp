import "../../styles/HeroSection.css";

import { motion } from "framer-motion";

export const HeroSectionRate = () => {
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
          {/* Header Text */}
          <motion.h4
            className="header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Gift Card Rate Calculator
          </motion.h4>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="desc"
            style={{ textAlign: "center", margin: "0 auto" }}
          >
            Enter your gift card details below to calculate how much naira you
            will be paid for selling the gift card on Favex.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSectionRate;
