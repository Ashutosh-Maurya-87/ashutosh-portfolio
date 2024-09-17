import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import { ThemeContext } from "../../context/themeContext.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  const theme = useContext(ThemeContext)
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
