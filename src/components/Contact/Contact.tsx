import { Faq } from "../Faq";
import { ContactInfo } from "./ContactInfo";
import HeroSectionContact from "./HeroSection";

export const Contact = () => {
  return (
    <>
      <HeroSectionContact />
      <ContactInfo />
      <Faq />
    </>
  );
};
