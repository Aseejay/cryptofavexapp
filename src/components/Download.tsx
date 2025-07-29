import { AppleStore } from "./AppleStore";
import GoogleStore from "./GoogleStore";
import mobile from "../assets/Rectangle.png";
import "../styles/Download.css";
import { motion } from "framer-motion";

export const Download = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <div className="download-favex">
      {/* Left Side */}
      <motion.div
        className="download-favex-left"
        {...fadeUp}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
      >
        <motion.h4
          className="header"
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
        >
          Start Trading to Earn Rewards
        </motion.h4>

        <motion.p
          className="desc"
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
        >
          Ready to Dive In? Let's Kickstart Your Experience with Your First
          Transaction! Download Favex app.
        </motion.p>

        <motion.div
          className="download-group"
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
        >
          <AppleStore />
          <GoogleStore />
        </motion.div>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        className="download-favex-right"
        {...fadeUp}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" as const }}
      >
        <img src={mobile} alt="Mobile App Preview" />
      </motion.div>
    </div>
  );
};

export default Download;
