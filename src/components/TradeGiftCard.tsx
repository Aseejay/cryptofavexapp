import giftcard from "../assets/Frame 1000008582 (2).png";
import "../styles/TradeGiftcard.css";
export const TradeGiftCard = () => {
  return (
    <>
      <div className="trade-giftcard">
        <div className="left-giftcard">
          <img src={giftcard} alt="" />
        </div>

        <div className="right-giftcard">
          <h4>Buy & Sell Gift Cards Instantly – Easy, Fast and Reliable</h4>
          <p>
            Turn your gift cards into cash or buy new ones with ease using
            Favex. A trusted platform built for speed, security, and
            convenience.
          </p>
        </div>
      </div>
    </>
  );
};

export default TradeGiftCard;
