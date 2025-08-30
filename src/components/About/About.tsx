import { Faq } from "../Faq";
import AboutDetail from "./AboutDetail";
import HeroSectionAbout from "./HeroSection";
import Vision from "./Vision";

export const About = () => {
  return (
    <>
      <HeroSectionAbout />
      <AboutDetail />
      <Vision />
      <Faq />
    </>
  );
};
