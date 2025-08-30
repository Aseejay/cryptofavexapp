import heroImg from "../../assets/IMG_4167 1.png";

import { motion } from "framer-motion";
import { AppleStore } from "../AppleStore";
import GoogleStore from "../GoogleStore";

export const HeroSection = () => {
  return (
    <div className="bg-green">
      <div className="hero-section giftcard">
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
            How to Earn Reward
          </motion.h4>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="desc"
          >
            Shop and pay anywhere in the world with a virtual dollar card that
            always works.
          </motion.p>
          <motion.div
            className="download-group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AppleStore />

            <GoogleStore />
          </motion.div>
        </motion.div>

        {/* Image with clean fade + slide + scale */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <img
            src={heroImg}
            alt="Hero"
            style={{ maxWidth: "100%", borderRadius: "1rem" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
