import amazon from "../assets/amazon.png";
import ebay from "../assets/ebay.png";
import nike from "../assets/nike.png";
import sephora from "../assets/sephora.png";
import macys from "../assets/macys.png";
import visa from "../assets/visa.png";
import walmart from "../assets/walmart.png";
import steam from "../assets/steam.png";

const images = [amazon, ebay, nike, sephora, macys, visa, walmart, steam];

const Scroll = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-track">
        {[...images, ...images].map((img, index) => (
          <img key={index} src={img} alt="" className="scroll-img" />
        ))}
      </div>
    </div>
  );
};

export default Scroll;
