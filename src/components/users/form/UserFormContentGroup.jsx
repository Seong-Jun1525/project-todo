import React, { useState } from "react";
import "./UserFormContentGroup.scss";
import MyButton from "../btn/MyButton";
import { Link } from "react-router-dom";
import { MyInput } from "../../input/MyInput";
import { authCode, sendEmail } from "../../../../services/apiService";

export const UserLoginFormContent = () => {
  return (
    <form action="" method="get" className="login-form">
      <MyInput type="text" placeholder="아이디" name="userId" />
      <MyInput type="password" placeholder="비밀번호" name="userPwd" />
      <div className="btn-group">
        <MyButton className="btn-submit" btnText="로그인" />
        <Link className="btn-register" to="/register">
          회원가입
        </Link>
      </div>
    </form>
  );
};

export const UserRegisterFormContent = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [disabled, setDisabled] = useState("");

  const sendHandler = async () => {
    // alert(`${email}`);
    const result = await sendEmail(email);

    console.log("result : " + result);
  };

  const authHandler = async () => {
    const result = await authCode(email, code);
    console.log("result : " + result);

    if (result === "success") {
      setDisabled("disabled");
    }
  };

  return (
    <form action="" method="get" className="register-form">
      <div className="input-check-area">
        <MyInput type="text" placeholder="아이디" name="userId" />
        <MyButton className="btn-check" btnText="중복체크" />
      </div>
      <MyInput type="password" placeholder="비밀번호" name="userPwd" />
      <MyInput type="" placeholder="닉네임" name="userNickname" />
      <div className="input-check-area">
        <MyInput type="email" placeholder="이메일" name="userEmail" onChange={(e) => setEmail(e.target.value)} />
        <MyInput type="button" value="인증" className="btn-check" onClick={sendHandler} disabled={disabled} />
      </div>
      <div className="input-check-area">
        <MyInput type="" placeholder="인증코드" name="authCode" onChange={(e) => setCode(e.target.value)} />
        <MyInput type="button" className="btn-check" value="확인" onClick={authHandler} disabled={disabled} />
      </div>
      <MyButton className="btn-submit" btnText="회원가입" />
    </form>
  );
};
