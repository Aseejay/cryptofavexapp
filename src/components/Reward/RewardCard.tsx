import "../../styles/Reward.css";
import { motion } from "framer-motion";
import rewardImg from "../../assets/image 28.png";
import rewardImgTwo from "../../assets/image 29.png";
export const RewardCard = () => {
  const smoothSlide = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <motion.div className="reward-card">
      {/* Heading */}
      <motion.h4
        {...smoothSlide}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
      >
        Favex Royalty reward
      </motion.h4>

      {/* Subheading */}
      <motion.p
        {...smoothSlide}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" as const }}
      >
        Earn royalty rewards when you perform and complete task on Favex app,
        and earn cashbacks on your crypto and gift card transactions.
      </motion.p>

      {/* Card Container */}
      <motion.div
        className="rc-group"
        {...smoothSlide}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" as const }}
      >
        {/* Left Card */}
        <motion.div
          className="rc-left"
          {...smoothSlide}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" as const }}
        >
          <h4>How to get Royalty point</h4>
          <p>
            Complete daily login or transaction task on the task section and
            accumulate points
          </p>
          <div className="img-container">
            <img src={rewardImg} alt="" />
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="rc-right"
          {...smoothSlide}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" as const }}
        >
          <h4>How to redeem Royalty Points</h4>
          <p>
            Goto Rewards and Bonus, click on “Claim Reward” and confirm action.
          </p>
          <div className="img-container">
            <img src={rewardImgTwo} alt="" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RewardCard;
