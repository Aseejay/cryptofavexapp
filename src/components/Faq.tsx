import { useState } from "react";
import { Add } from "../icon";
import "../styles/Faqs.css";
import { motion, AnimatePresence } from "framer-motion";

export const Faq = () => {
  const [questions, setQuestions] = useState([
    {
      questions: "How do I trade crypto on Favex?",
      answer:
        "To trade crypto on Favex, log into the app, go to the 'Trade' section, choose the cryptocurrency you want to buy or sell, enter the amount, and confirm the transaction. The system will process it instantly.",
      show: false,
    },
    {
      questions: "How long does it take to complete a crypto trade?",
      answer:
        "Crypto trades on Favex are usually completed within 5–10 minutes. In rare cases, network congestion or additional verification may cause slight delays, but we always aim for a fast and seamless experience.",
      show: false,
    },
    {
      questions: "Is it safe to trade crypto on Favex?",
      answer:
        "Yes, Favex uses bank-level security and encryption to protect all transactions. Your wallet addresses, funds, and personal data are secured, and our support team is always available if you need help.",
      show: false,
    },
    {
      questions: "What cryptocurrencies can I trade on Favex?",
      answer:
        "Favex supports popular cryptocurrencies including Bitcoin, Ethereum, USDT, BNB, and more. You can view the full list of supported assets directly in the app.",
      show: false,
    },
    {
      questions: "What happens if my crypto transaction fails?",
      answer:
        "If a transaction fails, it’s usually due to network issues, insufficient balance, or an incorrect wallet address. Our support team will notify you and guide you on how to resolve the issue quickly.",
      show: false,
    },
    {
      questions: "Can I track the status of my crypto trade?",
      answer:
        "Absolutely. Once you place a crypto trade, you can monitor its progress in real-time within the Favex app under the 'Transactions' or 'Trade History' section.",
      show: false,
    },
  ]);

  const update = (i: number) => {
    setQuestions((prev) =>
      prev.map((item, index) =>
        index === i ? { ...item, show: !item.show } : item
      )
    );
  };

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="faqs">
      {/* Heading animation */}
      <motion.h4
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h4>

      {/* FAQ Questions */}
      {questions.map((data, index) => (
        <motion.div
          className="question"
          key={index}
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div>
            <div className="question-header" onClick={() => update(index)}>
              <p>{data.questions}</p>
              <Add />
            </div>

            {/* Toggle answer with animation */}
            <AnimatePresence>
              {data.show && (
                <motion.p
                  style={{ color: "#667085", lineHeight: "25px" }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {data.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
