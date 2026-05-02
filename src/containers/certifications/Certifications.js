import React, { useContext } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { ThemeContext } from "../../context/themeContext";

const Certifications = () => {
  const theme = useContext(ThemeContext)
  return (
    <section className="certs-section" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <div className="certs-heading">
            <h2 className="certs-header" style={{ color: theme.text }}>
              Certifications
            </h2>
            <p className="certs-subheader" style={{ color: theme.text }}>
              Credentials and course completions
            </p>
          </div>
        </Fade>
      </div>
      <div className="certs-grid">
        {certifications.certifications.map((cert) => (
          <CertificationCard key={`${cert.title}-${cert.credential_id || cert.subtitle}`} certificate={cert} />
        ))}
      </div>
    </section>
  );
}

export default Certifications;
