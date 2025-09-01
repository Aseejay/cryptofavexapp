import amazon from "../assets/btc.png";
import ebay from "../assets/eth.png";
import nike from "../assets/bnb.png";
import sephora from "../assets/usdt.png";
import macys from "../assets/usdc.png";
import visa from "../assets/sol.png";
import walmart from "../assets/trx.png";

const coins = [
  { img: amazon, header: "BTC", name: "Bitcoin" },
  { img: ebay, header: "ETH", name: "Ethereum" },
  { img: walmart, header: "TRX", name: "Tron" },
  { img: visa, header: "SOL", name: "Solana" },
  { img: sephora, header: "USDT", name: "Tether" },
  { img: macys, header: "USDC", name: "Dollar" },
  { img: nike, header: "BNB", name: "BNB" },
];

const Scroll = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-track">
        {[...coins, ...coins].map((coin, index) => (
          <div key={index} className="scroll-card">
            <img src={coin.img} alt={coin.name} className="scroll-img" />
            <div>
              <h4>{coin.header}</h4>
              <p>{coin.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;
