import { WhyImg, WhyImgTwo } from "../icon";
import "../styles/Whychoose.css";
export const WhyChoose = () => {
  return (
    <>
      <div className="why-container">
        <h4>Why choose Favex?</h4>
        <div className="why-choose">
          <div className="why-left">
            <WhyImg />
            <h4>
              One year of Exceptional Crypto & Gift Card Trading Services.
            </h4>
            <p>
              In just one year, Favex has grown into a trusted platform for
              thousands of users. We’ve streamlined the trading experience,
              simplified payment solutions and made crypto and gift card trading
              easier and more rewarding than ever.
            </p>
          </div>

          <div className="why-right">
            <WhyImgTwo />
            <h4>Secure Crypto, Gift Card Trading and Bills Payment</h4>
            <p>
              At Favex, security is at the core of everything we do. From crypto
              trades to gift card sales and bill payments. Your transactions are
              protected with advanced encryption, 2FA, and real-time fraud
              monitoring.
            </p>
          </div>
        </div>

        <div className="why-choose">
          <div className="why-left">
            <WhyImg />
            <h4>24/7 Customer Support Service.</h4>
            <p>
              Need help at midnight? No problem. Our customer support team is
              available 24/7 and ready to assist with any questions,
              transactions or issues. We’re committed to giving you the support
              you need, whenever you need it.
            </p>
          </div>

          <div className="why-right">
            <WhyImgTwo />
            <h4>10,000+ Satisfied Customers and Counting</h4>
            <p>
              Our growing community of over 10,000 active users speaks for
              itself. Favex is trusted for its fast payouts, best rates and
              smooth user experience. We’re excited to welcome even more users
              to the family.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
