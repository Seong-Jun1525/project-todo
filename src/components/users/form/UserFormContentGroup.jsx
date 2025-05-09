import React, { useState } from "react";
import "./UserFormContentGroup.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyInput } from "../../input/MyInput";
import { authCode, checkId, login, registerUser, sendEmail } from "../../../../services/apiService";
import { errorAlert, successAlter } from "../../../../services/toastUtils";

export const UserLoginFormContent = ({ setIsLogin }) => {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async () => {
    console.log(userId);
    console.log(userPwd);
    const result = await login({ userId, userPwd });

    if (result === "success") {
      successAlter("로그인 성공!");
      setIsLogin(true);
      localStorage.setItem("loginInfo", true); // 로그인 여부 저장
    } else {
      errorAlert("로그인 실패!");
    }
  };

  return (
    <div className="login-form">
      <MyInput
        type="text"
        placeholder="아이디"
        name="userId"
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <MyInput
        type="password"
        placeholder="비밀번호"
        name="userPwd"
        onChange={(e) => {
          setUserPwd(e.target.value);
        }}
      />
      <div className="btn-group">
        <MyInput type="submit" className="btn-submit" value="로그인" onClick={loginHandler} />
        <Link className="btn-register" to="/register">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export const UserRegisterFormContent = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [disabledCheckId, setDisabledCheckId] = useState("");
  const [disabledSendEmail, setDisabledSendEmail] = useState("");
  const [disabledAuth, setDisabledAuth] = useState("");
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [nickname, setNickname] = useState("");

  const sendHandler = async () => {
    // alert(`${email}`);
    const result = await sendEmail(email);
    setDisabledSendEmail("disabled");
    console.log("result : " + result);
  };

  const authHandler = async () => {
    const result = await authCode(email, code);
    console.log("result : " + result);

    if (result === "success") {
      setDisabledAuth("disabled");
    }
  };

  const checkIdHandler = async () => {
    const result = await checkId(userId);

    console.log(result);

    if (result === "NNNNY") {
      successAlter("중복된 회원이 없습니다!");
      setDisabledCheckId("disabled");
    } else errorAlert("이미 사용중인 아이디입니다.");
  };

  const registerHandler = async () => {
    const user = {
      userId: userId,
      userPwd: userPwd,
      email: email,
      nickname: nickname,
    };
    const result = await registerUser(user);

    if (result === "success") {
      successAlter("회원가입에 성공했습니다.");
      // 로그인 페이지로 이동

      setTimeout(() => {
        location.href = "/";
      }, 1000);
    } else errorAlert("회원가입에 실패했습니다.");
  };

  return (
    <div className="register-form">
      <div className="input-check-area">
        <MyInput type="text" placeholder="아이디" id="userId" name="userId" onChange={(e) => setUserId(e.target.value)} />
        <MyInput type="button" className="btn-check" value="중복체크" onClick={checkIdHandler} disabled={disabledCheckId} />
      </div>
      <MyInput
        type="password"
        placeholder="비밀번호"
        id="userPwd"
        name="userPwd"
        onChange={(e) => {
          setUserPwd(e.target.value);
        }}
      />
      <MyInput
        type=""
        placeholder="닉네임"
        name="nickname"
        id="nickname"
        onChange={(e) => {
          setNickname(e.target.value);
        }}
      />
      <div className="input-check-area">
        <MyInput type="email" placeholder="이메일" id="userEmail" name="userEmail" onChange={(e) => setEmail(e.target.value)} />
        <MyInput type="button" value="인증" className="btn-check" onClick={sendHandler} disabled={disabledSendEmail} />
      </div>
      <div className="input-check-area">
        <MyInput type="" placeholder="인증코드" onChange={(e) => setCode(e.target.value)} />
        <MyInput type="button" className="btn-check" value="확인" onClick={authHandler} disabled={disabledAuth} />
      </div>
      <MyInput type="button" className="btn-submit" value="회원가입" onClick={registerHandler} />
    </div>
  );
};
