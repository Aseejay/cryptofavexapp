import { Allstars } from "../icon";
import "../styles/TrustSection.css";
import Testimonial from "./Testimonial";

export const TrustSection = () => {
  return (
    <>
      <div className="trust-section">
        <h4>Trusted by over 10,000+ customers</h4>
        <Allstars />
        <p>
          Score based on thousands of reviews on the Google Playstore and Apple
          App Store
        </p>
        <Testimonial />
      </div>
    </>
  );
};
