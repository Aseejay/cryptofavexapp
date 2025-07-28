import { ChooseGC, Contact, Download, StartTrade } from "../icon";
import "../styles/How.css";
import { motion } from "framer-motion";

export const How = () => {
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
        How does it work?
      </motion.h4>

      <motion.p
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Your roadmap to success: Comprehensive steps to begin your journey with
        us.
      </motion.p>

      <div className="how-works">
        {[
          // First row
          {
            icon: <Download />,
            title: "Install App",
            desc: "Download and install the app from the Google Play Store or iOS App Store.",
          },
          {
            icon: <Contact />,
            title: "Create Account",
            desc: "Create your account quickly with simple steps.",
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
            <h4>
              {item.icon} {item.title}
            </h4>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="how-works">
        {[
          // Second row
          {
            icon: <ChooseGC />,
            title: "Choose Gift Card Brand",
            desc: "Pick your preferred gift card brand from the app.",
          },
          {
            icon: <StartTrade />,
            title: "Start Trading",
            desc: "Generate a crypto wallet and begin trading.",
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
            <h4>
              {item.icon} {item.title}
            </h4>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
