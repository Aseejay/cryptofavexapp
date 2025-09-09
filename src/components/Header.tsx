import { useNavigate } from "react-router-dom";
import { Logo } from "../icon";
import "../styles/Header.css";
import { motion } from "framer-motion";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

// Define navigation links
const navLinks = [
  { label: "Products", url: "/" },
  { label: "About", url: "/about" },
  { label: "Contact us", url: "/contact-us" },
  { label: "Faqs", url: "/faqs" },
  { label: "Get App", url: "https://favex.onelink.me/SAov/favexapp" },
];

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "button_click",
      label: "Mobile CTA Download",
    });
  };

  return (
    <motion.div
      className="header-container"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" as const }}
    >
      <header>
        {/* Logo */}
        <motion.a
          onClick={() => navigate("/")}
          className="logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
        >
          <Logo />
        </motion.a>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
        >
          <ul>
            {navLinks.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut" as const,
                }}
              >
                <motion.a
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : "_self"}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.35 + index * 0.1,
                    ease: "easeOut" as const,
                  }}
                >
                  {link.label}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Download Button */}
        <motion.a
          href="https://favex.onelink.me/SAov/favexapp"
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="mobile-download-link"
          onClick={handleClick}
          className="download"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" as const }}
        >
          Download App
        </motion.a>
      </header>
    </motion.div>
  );
};

export default Header;
