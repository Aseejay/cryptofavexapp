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
      <motion.div
        className="footer-top"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <img src={theguardian} alt="The Guardian" />
        <img src={premium} alt="Premium Times" />
        <img src={pulse} alt="Pulse" />
        <img src={vanuard} alt="Vanguard" />
      </motion.div>

      <div className="footers">
        {/* Left Side */}
        <motion.div
          className="footer-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Logo />
          <p>
            Favex makes it easy to turn your gift cards into cash quickly and
            effortlessly — no stress, no delays, just fast payouts when you need
            them most.
          </p>

          <a href="mailto:support@favexapp.com">
            <Email />
            Support@favexapp.com
          </a>

          <a href="tel:+2348148736835">
            <Mobile />
            +234 (0) 8148736835
          </a>

          <div className="socials">
            <a
              href="https://facebook.com/favex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com/favex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://linkedin.com/company/favex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <div className="footer-right">
          {[
            {
              title: "Products",
              links: [
                { name: "Trade Crypto Card", url: "/crypto" },

                { name: "Virtual Card", url: "/virtualcard" },
                // { name: "Bills Payment", url: "" },
              ],
            },
            {
              title: "Resources",
              links: [
                // { name: "Rate Calculator", url: "/rate" },

                {
                  name: "How to trade Crypto",
                  url: "/crypto",
                },

                { name: "How to Earn Reward", url: "/reward" },
                // { name: "Referral Program", url: "/referral" },
              ],
            },
            {
              title: "Company",
              links: [
                { name: "About Us", url: "/about" },
                { name: "FAQs", url: "/faqs" },
                { name: "Contact us", url: "/contact" },
                {
                  name: "support@favexapp.com",
                  url: "mailto:support@favexapp.com",
                },
              ],
            },
          ].map((section, idx) => (
            <motion.div
              className="footer"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
