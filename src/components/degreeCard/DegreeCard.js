import React, {useContext } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import { ThemeContext } from "../../context/themeContext";

const DegreeCard = (props) => {
  const { degree } = props
  const theme = useContext(ThemeContext)
  return (
    <article className="degree-item">
      <div className="degree-rail" aria-hidden="true">
        {degree.logo_path ? (
          <Flip left duration={1400}>
            <div className="degree-logo" style={{ borderColor: theme.text }}>
              <img
                className="degree-logo-img"
                src={require(`../../assets/images/${degree.logo_path}`)}
                alt={degree.alt_name}
                loading="lazy"
              />
            </div>
          </Flip>
        ) : (
          <div className="degree-dot" style={{ backgroundColor: theme.text }} />
        )}
        <div className="degree-line" style={{ backgroundColor: theme.text }} />
      </div>

      <Fade bottom duration={1200} distance="20px">
        <div className="degree-card" style={{ borderColor: theme.headerColor }}>
          <div className="degree-card-top">
            <div className="degree-title-wrap">
              <h3 className="degree-title" style={{ color: theme.text }}>
                {degree.title}
              </h3>
              <p className="degree-subtitle" style={{ color: theme.text }}>
                {degree.subtitle}
              </p>
            </div>
            <div className="degree-meta">
              <span className="degree-duration" style={{ color: theme.text }}>
                {degree.duration}
              </span>
            </div>
          </div>

          <div className="degree-card-body">
            {degree.descriptions.map((sentence) => (
              <p key={sentence} className="degree-desc" style={{ color: theme.text }}>
                {sentence}
              </p>
            ))}

            {degree.website_link && (
              <a
                className="degree-link"
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.text }}
              >
                Visit website →
              </a>
            )}
          </div>
        </div>
      </Fade>
    </article>
  );
}

export default DegreeCard;
