import { Email, Facebook, Instagram, Linkedin, Logo, Mobile } from "../icon";
import "../styles/Footer.css";
import theguardian from "../assets/Theguardian.png";
import pulse from "../assets/Pulse.png";
import premium from "../assets/Premium.png";
import vanuard from "../assets/Vanguard.png";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.div
      className="footer-group"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Media Mentions */}
      <div className="footer-top">
        <img src={theguardian} alt="The Guardian" />
        <img src={premium} alt="Premium Times" />
        <img src={pulse} alt="Pulse" />
        <img src={vanuard} alt="Vanguard" />
      </div>

      <div className="footers">
        {/* Left Side */}
        <div className="footer-left">
          <Logo />
          <p>
            Favex makes it easy to turn your gift cards into cash quickly and
            effortlessly — no stress, no delays, just fast payouts when you need
            them most.
          </p>

          <a href="#">
            <Email />
            Support@favexapp.com
          </a>

          <a href="#">
            <Mobile />
            +234 (0) 8148736835
          </a>

          <div className="socials">
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          {/* Products */}
          <div className="footer">
            <h4>Products</h4>
            <ul>
              <li>
                <a href="#">Trade Gift Card</a>
              </li>
              <li>
                <a href="#">Trade Gift Card</a>
              </li>
              <li>
                <a href="#">Trade Crypto</a>
              </li>
              <li>
                <a href="#">Virtual Card</a>
              </li>
              <li>
                <a href="#">Bills Payment</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Rate Calculator</a>
              </li>
              <li>
                <a href="#">Trade Gift Card</a>
              </li>
              <li>
                <a href="#">How to trade Gift Card</a>
              </li>
              <li>
                <a href="#">How to trade Crypto</a>
              </li>
              <li>
                <a href="#">How to Earn Reward</a>
              </li>
              <li>
                <a href="#">Referral Program</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">support@favexapp.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
