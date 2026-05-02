import React, { useContext } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";
import { ThemeContext } from "../../context/themeContext.js";

const Educations = () => {
  const theme = useContext(ThemeContext)
  return (
    <section className="education-section" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <div className="educations-heading">
            <h2 className="educations-header" style={{ color: theme.text }}>
              Education
            </h2>
            <p className="educations-subheader" style={{ color: theme.text }}>
              Degrees and learning highlights
            </p>
          </div>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <DegreeCard key={`${degree.title}-${degree.duration}`} degree={degree} />;
        })}
      </div>
    </section>
  );
}

export default Educations;
