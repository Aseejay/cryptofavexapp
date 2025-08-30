import "../styles/HeroSection.css";
import heroImg from "../assets/Rectangle.png";
import { AppleStore } from "./AppleStore";
import GoogleStore from "./GoogleStore";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div className="bg-green">
      <div className="hero-section">
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
            The All-in-One Platform for Crypto Trading
          </motion.h4>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="desc"
          >
            Favex makes it easy to turn your crypto into cash quickly and
            effortlessly no stress, no delays, just fast payouts when you need
            them most.
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
          <img src={heroImg} alt="Hero" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
