import React, { useContext } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import { ThemeContext } from "../../context/themeContext";

const Education = () => {
    const theme = useContext(ThemeContext)
    return (
      <div className="education-main">
        <Header theme={theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifcations
                </h3>
              </div>
            </div>
          </Fade>
          <Educations />
        </div>
        <Footer  />
        <TopButton/>
      </div>
    );
}

export default Education;
