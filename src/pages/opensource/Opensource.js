import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";

const Opensource = (props) => {
  return (
    <div className="opensource-main">
      <Header />
      <Organizations />
      <OpensourceCharts />
      <PullRequests />
      <Issues />
      <Footer onToggle={props.onToggle} />
      <TopButton />
    </div>
  );
}

export default Opensource;
