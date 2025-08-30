import { motion } from "framer-motion";
import { WhyImg, WhyImgFour, WhyImgThree, WhyImgTwo } from "../icon";
import "../styles/Whychoose.css";

export const WhyChoose = () => {
  return (
    <div className="why-container">
      <h4>Why choose Favex?</h4>

      <div className="why-choose">
        <motion.div
          className="why-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <WhyImg />
          <h4>One year of Exceptional Crypto Trading Services.</h4>
          <p>
            In just one year, Favex has grown into a trusted platform for
            thousands of users. We’ve streamlined the trading experience,
            simplified payment solutions and made crypto trading easier and more
            rewarding than ever.
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
          <h4>Secure Crypto Trading and Bills Payment</h4>
          <p>
            At Favex, security is at the core of everything we do. Gift card
            sales and bill payments. Your transactions are protected with
            advanced encryption, 2FA, and real-time fraud monitoring.
          </p>
        </motion.div>
      </div>

      <div className="why-choose">
        <motion.div
          className="why-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <WhyImgThree />
          <h4>24/7 Customer Support Service.</h4>
          <p>
            Need help at midnight? No problem. Our customer support team is
            available 24/7 and ready to assist with any questions, transactions
            or issues. We’re committed to giving you the support you need,
            whenever you need it.
          </p>
        </motion.div>

        <motion.div
          className="why-right"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <WhyImgFour />
          <h4>50,000+ Satisfied Customers and Counting</h4>
          <p>
            Our growing community of over 50,000 active users speaks for itself.
            Favex is trusted for its fast payouts, best rates and smooth user
            experience. We’re excited to welcome even more users to the family.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChoose;
