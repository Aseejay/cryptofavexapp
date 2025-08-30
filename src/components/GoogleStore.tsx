import { GoogleIcon } from "../icon";
import "../styles/DownloadIcon.css";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const GoogleStore = ({ bg, color }: any) => {
  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "button_click",
      label: "Google Play Download",
    });
  };

  return (
    <a
      href="https://favex.onelink.me/SAov/favexapp"
      target="_blank"
      rel="noopener noreferrer"
      data-gtm="google-play-download"
      onClick={handleClick}
    >
      <div style={{ background: bg }} className="download-app">
        <GoogleIcon />
        <div className="download-desc">
          <p style={{ color: color }}>Available on</p>
          <h4 style={{ color: color }}>Android</h4>
        </div>
      </div>
    </a>
  );
};

export default GoogleStore;
