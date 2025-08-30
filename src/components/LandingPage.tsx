import { Faq } from "./Faq";
import HeroSection from "./HeroSection";
import Scroll from "./Scroll";
import TradeGiftCard from "./TradeGiftCard";
import { TrustSection } from "./TrustSection";
import UtilityBill from "./UtilityBill";
import WhyChoose from "./Whychoose";

export const LandingPage = () => {
  return (
    <>
      <>
        <div className="bg-green">
          <HeroSection />
          <Scroll />
        </div>
        <br />
        <br />
        <TradeGiftCard />
        <UtilityBill />
        <WhyChoose />
        <TrustSection />
        <Faq />
      </>
    </>
  );
};
