import { motion } from "framer-motion";
import giftcard from "../assets/Frame 1000008582 (2).png";
import "../styles/TradeGiftcard.css";
import { AppleStore } from "./AppleStore";
import GoogleStore from "./GoogleStore";

export const TradeGiftCard = () => {
  return (
    <div className="trade-giftcard">
      {/* Image Section */}
      <motion.div
        className="left-giftcard"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img src={giftcard} alt="giftcard" />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="right-giftcard"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h4 className="header">
          Trade Crypto Instantly Simple, Fast and Secure
        </h4>
        <p className="desc">
          Trade crypto, pay bills, buy gift cards and create virtual cards all
          in one app. Instant, secure and built for your financial freedom.
        </p>

        <div className="download-group">
          <AppleStore bg="#1D6A4B" color="white" />
          <GoogleStore bg="#1D6A4B" color="white" />
        </div>
      </motion.div>
    </div>
  );
};

export default TradeGiftCard;
