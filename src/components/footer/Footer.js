import { useContext } from "react";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./Footer.scss";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
<<<<<<< HEAD
          <a
            href=""
            target=""
=======
          
          <a
            href=""
            target="k"
>>>>>>> 833b5b493d1a1cce2a7a8d05c1749998104ecd31
            rel=""
          >
            
          </a>
        </p>
      </div>
    </Fade>
  );
}
