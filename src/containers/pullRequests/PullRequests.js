import React, { useContext } from "react";
import "./PullRequests.css";
import { Fade } from "react-reveal";
import PullRequestCard from "../../components/pullRequestCard/PullRequestCard";
import pullRequestsData from "../../shared/opensource/pull_requests.json";
import { ThemeContext } from "../../context/themeContext";

const PullRequests = () => {
  const theme = useContext(ThemeContext)
  return (
    <div>
      <div className="pull-requests-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="pull-requests-header" style={{ color: theme.text }}>
            Pull Requests
          </h1>
        </Fade>
      </div>
      <div className="pull-request-body-div">
        {pullRequestsData["data"].map((pullRequest) => {
          return <PullRequestCard pullRequest={pullRequest} />;
        })}
      </div>
    </div>
  );
}

export default PullRequests;
