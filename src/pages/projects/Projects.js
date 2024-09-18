import React, { useContext } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { ThemeContext } from "../../context/themeContext.js";

const Projects = () => {

  const theme = useContext(ThemeContext)
  return (
    <div className="projects-main">
      <Header theme={theme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme?.text }}
              >
                {projectsHeader?.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme?.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {ProjectsData.data.map((repo, index) => {
          return <GithubRepoCard repo={repo} theme={theme} index={index} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting?.githubProfile}
        newTab={true}
        theme={theme}
      />

      {/* Publications  */}
      {publications?.data?.length > 0 ? (
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="publications-heading-div">
              <div className="publications-heading-text-div">
                <h1
                  className="publications-heading-text"
                  style={{ color: theme?.text }}
                >
                  {publicationsHeader?.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme?.secondaryText }}
                >
                  {publicationsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
      ) : null}

      <div className="repo-cards-div-main">
        {publications?.data?.map((pub, index) => {
          return <PublicationCard pub={pub} theme={theme} index={index} />;
        })}
      </div>

      <Footer theme={theme}
      // onToggle={onToggle} 
      />
      <TopButton theme={theme} />
    </div>
  );

}

export default Projects;
