import "./App.css";
import Download from "./components/Download";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import HeroSection from "./components/HeroSection";
import { How } from "./components/How";
import Scroll from "./components/Scroll";
import { Copyright } from "./icon";

function App() {
  return (
    <>
      <div className="bg-green">
        <Header />
        <HeroSection />
        <Scroll />
      </div>
      <How />
      <Faq />
      <Download />
      <Footer />
      <div className="copyright">
        <Copyright />
      </div>
    </>
  );
}

export default App;
