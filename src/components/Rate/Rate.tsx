import { Faq } from "../Faq";
import HeroSectionRate from "./HeroSectionRate";
import { HowRate } from "./HowRate";

export const Rate = () => {
  return (
    <>
      <div>
        <HeroSectionRate />
      </div>
      <HowRate />
      <Faq />
    </>
  );
};
