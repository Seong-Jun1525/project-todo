import React from "react";
import "../UserMainContent.scss";
import { UserRegisterFormContent } from "../form/UserFormContentGroup";

const Register = () => {
  return (
    <div className="main-content">
      <div className="content">
        <div className="login-content-title">TODO MANAGER</div>
        <UserRegisterFormContent />
      </div>
    </div>
  );
};

export default Register;
