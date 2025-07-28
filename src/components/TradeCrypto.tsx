import crypto from "../assets/Frame 1000008582 (1).png";
import "../styles/TradeCrypto.css";
export const TradeCrypto = () => {
  return (
    <>
      <div className="trade-crypto">
        <div className="left-crypto">
          <img src={crypto} alt="" />
        </div>

        <div className="right-crypto">
          <h4>Trade Crypto Instantly Simple, Fast and Secure</h4>
          <p>
            Trade crypto, pay bills, buy gift cards and create virtual cards all
            in one app. Instant, secure and built for your financial freedom.
          </p>
        </div>
      </div>
    </>
  );
};

export default TradeCrypto;
