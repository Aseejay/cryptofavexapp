import { AppleIcon } from "../icon";
import "../styles/DownloadIcon.css";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const AppleStore = ({ bg, color }: any) => {
  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "button_click",
      label: "Apple Store Download",
    });
  };

  return (
    <a
      href="https://favex.onelink.me/SAov/favexapp"
      target="_blank"
      rel="noopener noreferrer"
      data-gtm="apple-store-download"
      onClick={handleClick}
    >
      <div style={{ background: bg }} className="download-app">
        <AppleIcon />
        <div className="download-desc">
          <p style={{ color: color }}>Available on</p>
          <h4 style={{ color: color }}>Apple iOS</h4>
        </div>
      </div>
    </a>
  );
};
