import { GoogleIcon } from "../icon";
import "../styles/DownloadIcon.css";
export const GoogleStore = () => {
  return (
    <>
      <div className="download-app">
        <GoogleIcon />
        <div className="download-desc">
          <p>Available on</p>
          <h4>Andriod</h4>
        </div>
      </div>
    </>
  );
};

export default GoogleStore;
