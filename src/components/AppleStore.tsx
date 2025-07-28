import { AppleIcon } from "../icon";
import "../styles/DownloadIcon.css";
export const AppleStore = () => {
  return (
    <>
      <div className="download-app">
        <AppleIcon />
        <div className="download-desc">
          <p>Available on</p>
          <h4>Apple iOS</h4>
        </div>
      </div>
    </>
  );
};
