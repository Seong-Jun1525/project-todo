import React from "react";
import "./MainContent.scss";
import Login from "./users/login/Login";

const MainContent = (props) => {
  return (
    <div className="main-content">
      <Login {...props} />
    </div>
  );
};

export default MainContent;
