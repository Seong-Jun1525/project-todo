import React from "react";
import "./UserFormContentGroup.scss";
import MyButton from "../btn/MyButton";
import { Link } from "react-router-dom";
import { MyInput } from "../../input/MyInput";

export const UserLoginFormContent = () => {
  return (
    <form action="" method="get" className="login-form">
      <MyInput typeText="text" placeholderValue="아이디" nameValue="userId" />
      <MyInput typeText="password" placeholderValue="비밀번호" nameValue="userPwd" />
      <div className="btn-group">
        <MyButton classNameValue="btn-submit" btnText="로그인" />
        <Link className="btn-register" to="/register">
          회원가입
        </Link>
      </div>
    </form>
  );
};

export const UserRegisterFormContent = () => {
  return (
    <form action="" method="get" className="register-form">
      <div className="input-check-area">
        <MyInput typeText="text" placeholderValue="아이디" nameValue="userId" />
        <MyButton classNameValue="btn-check" btnText="중복체크" />
      </div>
      <MyInput typeText="password" placeholderValue="비밀번호" nameValue="userPwd" />
      <MyInput typeText="text" placeholderValue="닉네임" nameValue="userNickname" />
      <div className="input-check-area">
        <MyInput typeText="email" placeholderValue="이메일" nameValue="userEmail" />
        <MyButton classNameValue="btn-check" btnText="인증" />
      </div>
      <MyButton classNameValue="btn-submit" btnText="회원가입" />
    </form>
  );
};
