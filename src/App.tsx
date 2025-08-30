import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Download from "./components/Download";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LandingPage } from "./components/LandingPage";
import { Giftcard } from "./components/Giftcard/Giftcard";
import { Crypto } from "./components/Crypto/Crypto";
import { VC } from "./components/VirtualCard/Vc";
import { Reward } from "./components/Reward/Reward";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Faqs } from "./components/Faqs/Faqs";
import { Rate } from "./components/Rate/Rate";
import { Copyright } from "./icon";

function App() {
  return (
    <Router>
      <div className="bg-green">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rate" element={<Rate />} />
        <Route path="/giftcard" element={<Giftcard />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/virtualcard" element={<VC />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Faqs" element={<Faqs />} />
      </Routes>

      <Download />
      <Footer />
      <div className="copyright">
        <Copyright />
      </div>
    </Router>
  );
}

export default App;
