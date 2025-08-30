import { motion } from "framer-motion";
import crypto from "../assets/Frame 1000008582 (3).png";
import "../styles/TradeCrypto.css";
import { AppleStore } from "./AppleStore";
import GoogleStore from "./GoogleStore";

export const UtilityBill = () => {
  return (
    <div className="trade-crypto">
      {/* Image Section */}
      <motion.div
        className="left-crypto"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img src={crypto} alt="crypto" />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="right-crypto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h4 className="header">Pay Utility Bills Seamlessly</h4>
        <p className="desc">
          Pay your everyday bills in seconds right from your Favex wallet. Buy
          airtime, data, electricity, cable TV and bet funding anytime, anywhere
          without stress. Fast, secure, and reliable.
        </p>

        <div className="download-group">
          <AppleStore bg="#1D6A4B" color="white" />
          <GoogleStore bg="#1D6A4B" color="white" />
        </div>
      </motion.div>
    </div>
  );
};

export default UtilityBill;
