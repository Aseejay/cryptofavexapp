import { Logo } from "../icon";
import "../styles/Header.css";
export const Header = () => {
  return (
    <>
      <div className="header-container">
        <header>
          <a href="#" className="logo">
            <Logo />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Rate Calculator</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>

              <li>
                <a href="#">Get App</a>
              </li>
            </ul>
          </nav>

          <a href="#" className="download">
            Download App
          </a>
        </header>
      </div>
    </>
  );
};
