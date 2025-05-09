import React from "react";
import "./Login.scss";
import "../UserMainContent.scss";
import { UserLoginFormContent } from "../form/UserFormContentGroup";

const Login = (props) => {
  return (
    <div className="content">
      <div className="login-content-title">
        TODO
        <br />
        MANAGER
      </div>
      <UserLoginFormContent {...props} />
    </div>
  );
};

export default Login;
