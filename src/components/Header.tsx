import { Logo } from "../icon";
import "../styles/Header.css";
import { motion } from "framer-motion";

export const Header = () => {
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
          href="#"
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
            {["Products", "Company", "Rate Calculator", "Blog", "Get App"].map(
              (text, index) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut" as const,
                  }}
                >
                  <motion.a
                    href="#"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.35 + index * 0.1,
                      ease: "easeOut" as const,
                    }}
                  >
                    {text}
                  </motion.a>
                </motion.li>
              )
            )}
          </ul>
        </motion.nav>

        {/* Download Button */}
        <motion.a
          href="#"
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
