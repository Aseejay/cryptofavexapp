import { motion } from "framer-motion";
import { WhyImg, WhyImgTwo } from "../../icon";
export const Vision = () => {
  return (
    <div className="why-container">
      <div className="why-choose">
        <motion.div
          className="why-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <WhyImg />
          <h4>Our Mission</h4>
          <p>
            At Favex, our mission is to empower individuals through seamless and
            secure financial solutions. We strive to simplify the complexities
            of crypto, ensuring everyone can participate in the digital economy
            with confidence.
          </p>
        </motion.div>

        <motion.div
          className="why-right"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <WhyImgTwo />
          <h4>Our Vision</h4>
          <p>
            Our vision at Favex is to be the leading platform that transforms
            how people manage and utilize their digital assets worldwide. We
            envision a future where financial transactions are effortless,
            transparent, and accessible to all.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
