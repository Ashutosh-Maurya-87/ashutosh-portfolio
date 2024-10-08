import React, { useContext, useEffect, useState } from "react";
import "./Splash.css";
import { Navigate } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";
import { ThemeContext } from "../../context/themeContext.js";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
}

const Splash = () => {
  const theme = useContext(ThemeContext)

  const [state, setState] = useState(false)
  useEffect(
    () => {
    const id =  setTimeout(() => setState(true), 5500)

      return () => {
        clearTimeout(id);
      }
    }, [])
  
    return state ? (
      <Navigate to="/home" />
    ) : (
      <AnimatedSplash theme={theme} />
    );
}

export default Splash;
