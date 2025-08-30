import "../../styles/Vc.css";
import { motion } from "framer-motion";

export const VirtualCard = () => {
  const smoothSlide = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <motion.div className="virtual-card">
      {/* Heading */}
      <motion.h4
        {...smoothSlide}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
      >
        The modern way to spend better than your bank card.
      </motion.h4>

      {/* Subheading */}
      <motion.p
        {...smoothSlide}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" as const }}
      >
        Enjoy global convenience with Favex Virtual Mastercard and Visa Card.
      </motion.p>

      {/* Card Container */}
      <motion.div
        className="vc-group"
        {...smoothSlide}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" as const }}
      >
        {/* Left Card */}
        <motion.div
          className="vc-left"
          {...smoothSlide}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" as const }}
        >
          <h4>Zero maintenance card</h4>
          <p>
            Get debited only for your purchases. No maintenance and hidden fees.
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="vc-right"
          {...smoothSlide}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" as const }}
        >
          <h4>Pay on any digital store</h4>
          <p>
            Pay for your bills, flight tickets, or subscriptions, and shop in
            international stores online.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default VirtualCard;
