import { useState } from "react";
import { Add } from "../icon";
import "../styles/Faqs.css";
import { motion, AnimatePresence } from "framer-motion";

export const Faq = () => {
  const [questions, setQuestions] = useState([
    {
      questions: "How do I trade on Favex App?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, nunc at fermentum luctus, nunc justo sagittis elit, vel scelerisque purus erat non velit. Nulla facilisi.",
      show: false,
    },
    {
      questions: "How do I receive payments?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, nunc at fermentum luctus, nunc justo sagittis elit, vel scelerisque purus erat non velit. Nulla facilisi.",
      show: false,
    },
    {
      questions: "Is trading on Favex secure?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula, nunc at fermentum luctus, nunc justo sagittis elit, vel scelerisque purus erat non velit. Nulla facilisi.",
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
            <div
              className="question-header"
              onClick={() => update(index)}
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
