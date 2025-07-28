import { AppleStore } from "./AppleStore";
import GoogleStore from "./GoogleStore";
import mobile from "../assets/Rectangle.png";
import "../styles/Download.css";
import { motion } from "framer-motion";

export const Download = () => {
  return (
    <motion.div
      className="download-favex"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="download-favex-left">
        <h4 className="header">Start Trading to Earn Rewards</h4>
        <p className="desc">
          Ready to Dive In? Let's Kickstart Your Experience with Your First
          Transaction! Download Favex app.
        </p>
        <div className="download-group">
          <AppleStore />
          <GoogleStore />
        </div>
      </div>

      <div className="download-favex-right">
        <img src={mobile} alt="Mobile App Preview" />
      </div>
    </motion.div>
  );
};

export default Download;
