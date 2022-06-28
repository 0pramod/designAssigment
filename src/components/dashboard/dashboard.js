import React from "react";
import LeftContainer from "./leftContainer";
import MainContainer from "./mainContainer";
import RightContainer from "./rightContainer";
// import { Link } from "react-router-dom";
// import { crown, tick, figma, document } from "../../assets/images.js";
const Dashboard = () => {
  return (
    <div className="page-contains">
      <LeftContainer />
      <div className="vertical-line"></div>
      <MainContainer />
      <RightContainer />
    </div>
  );
};

export default Dashboard;
