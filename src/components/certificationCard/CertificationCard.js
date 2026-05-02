import React, { useContext } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import { ThemeContext } from "../../context/themeContext";

const CertificationCard = (props) => {
  const { certificate } = props;
  const theme = useContext(ThemeContext)
  const hasLink = Boolean(certificate.certificate_link);

  const CardInner = (
    <>
      <div
        className="cert-hero"
        style={{ backgroundColor: certificate.color_code || theme.headerColor }}
      >
        <div className="cert-logo-wrap">
          <img
            className="cert-logo"
            src={require(`../../assets/images/${certificate.logo_path}`)}
            alt={certificate.alt_name}
            loading="lazy"
          />
        </div>
      </div>
      <div className="cert-body">
        <h3 className="cert-title" style={{ color: theme.text }}>
          {certificate.title}
        </h3>
        <p className="cert-subtitle" style={{ color: theme.secondaryText }}>
          {certificate.subtitle}
        </p>

        {(certificate.issued || certificate.credential_id) && (
          <div className="cert-meta" style={{ color: theme.secondaryText }}>
            {certificate.issued && (
              <span className="cert-pill">{certificate.issued}</span>
            )}
            {certificate.credential_id && (
              <span className="cert-pill">ID: {certificate.credential_id}</span>
            )}
          </div>
        )}

        <div className="cert-cta">
          <span
            className={`cert-cta-text ${hasLink ? "" : "disabled"}`}
            style={{ color: theme.text }}
          >
            {hasLink ? "Show credential →" : "Credential link not added"}
          </span>
        </div>
      </div>
    </>
  );

  return (
    <Fade bottom duration={2000} distance="20px">
      {hasLink ? (
        <a
          className="cert-card"
          href={certificate.certificate_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {CardInner}
        </a>
      ) : (
        <div className="cert-card" role="article">
          {CardInner}
        </div>
      )}
    </Fade>
  );
}

export default CertificationCard;
