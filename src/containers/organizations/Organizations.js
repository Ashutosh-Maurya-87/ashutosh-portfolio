import React, { useContext } from "react";
import "./Organizations.css";
import { Fade } from "react-reveal";
import OrganizationList from "../../components/organizationList/OrganizationList";
import OrganizationsData from "../../shared/opensource/organizations.json";
import { ThemeContext } from "../../context/themeContext";

const Organizations = () => {
  const theme = useContext(ThemeContext)
  return (
    <div id="organizations">
      <div className="organizations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="organizations-header" style={{ color: theme.text }}>
            Contributed Organizations
          </h1>
        </Fade>
      </div>
      <OrganizationList logos={OrganizationsData["data"]} />
    </div>
  );
}

export default Organizations;
