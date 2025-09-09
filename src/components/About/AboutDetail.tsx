import { motion } from "framer-motion";
import img from "../../assets/Rectangle.png";
import "../../styles/About.css";

export const AboutDetail = () => {
  return (
    <div className="about-us">
      {/* Image Section */}
      <motion.div
        className="left-about"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={img} alt="crypto" />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="right-about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h4 className="header">About us</h4>
        <p className="desc">
          Favex is a leading platform dedicated to revolutionizing the way
          individuals manage and trade digital assets. Established in February
          2024, Favex has quickly emerged as a trusted name in the industry,
          committed to simplicity, security, and innovation. Our platform offers
          a seamless experience for buying and selling, ensuring that our users
          can conduct their transactions with ease and confidence.
        </p>

        <p className="desc">
          At Favex, we understand the complexities and challenges that come with
          digital asset management. That's why we have designed our platform to
          be user-friendly and accessible, catering to both beginners and
          experienced traders. Our intuitive interface allows users to navigate
          the world of cryptocurrencies, making trading more straightforward and
          less intimidating.
        </p>

        <p className="desc">
          Favex is here to make crypto trading easier than ever before. Whether
          you're looking to diversify your investment portfolio, redeem crypto.
          Favex is your trusted partner. Join us as we pave the way for a more
          accessible and secure future in digital asset trading.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutDetail;
