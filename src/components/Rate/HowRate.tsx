import "../../styles/How.css";
import { motion } from "framer-motion";

export const HowRate = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="how">
      <motion.h4
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        How to Sell Gift Cards On Favex
      </motion.h4>

      <motion.p
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Here's a streamlined guide on how to sell gift cards using the Favex
        mobile app:
      </motion.p>

      <div className="how-works">
        {[
          // First row
          {
            title: "1. Download Favex App & Register",
            desc: "Download the Favex app from the App Store or Google Play Store. Sign up and create your account on Favex. If you already have an account, simply log in.",
          },
          {
            title: "2. Navigate, select Gift Card and fill card details.",
            desc: 'Once logged in, navigate to the "Trade Gift Card". Choose the specific brand of the gift card you want to sell from the available options and fill the card details',
          },
        ].map((item, index) => (
          <motion.div
            className="how-card"
            key={index}
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
          >
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="how-works">
        {[
          // Second row
          {
            title: "3. Review Rate and Amount",
            desc: "Review rate and amount and proceed to submit your gift card for sale",
          },
          {
            title: "4. Receive Payment",
            desc: "Once the transaction is completed and confirmed, you will receive payment for your gift card through the payment method specified by Favex.",
          },
        ].map((item, index) => (
          <motion.div
            className="how-card"
            key={index}
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
          >
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
