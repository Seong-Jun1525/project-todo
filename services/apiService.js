import axios from "axios";
import { errorAlert } from "./toastUtils";

const baseURL = "http://localhost:8080";

const apiAxios = axios.create({
  baseURL: baseURL,
  withCredentials: true, // 쿠키 또는 인증 헤더를 포함하여 요청할 것인지에 대한 설정
});

/**
 * 세션은 서버에서만 접근이 가능하고 클라이언트는 접근을 할 수 없다.
 */

// 통신 오류 발생 시 처리
apiAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // localstorage 값 제거
    if (error.status === 401) {
      localStorage.removeItem("loginInfo");
      // 훅은 조건문이나 반복문 내에서 사용할 수 없다!
      location.href = "/";
    }
    // 2xx 외의 범위의 코드 시 현재 함수를 실행.
    errorAlert("문제가 발생했습니다.");
    return Promise.reject(error); // 응답 오류가 있는 작업 수행
  }
);

export const sendEmail = async (email) => {
  const response = await apiAxios.post("/email/send", {
    email: email,
  });

  return response.data;
};

export const authCode = async (email, code) => {
  console.log(email, code);
  const response = await apiAxios.post("/email/verify", {
    email: email,
    code: code,
  });
  if (response.status === 200) return response.data;
};

export const checkId = async (userId) => {
  console.log(userId);

  const response = await apiAxios.post("/checkId", {
    userId: userId,
  });
  if (response.status === 200) return response.data;
};

export const registerUser = async (user) => {
  const response = await apiAxios.post("/user", user);
  if (response.status === 200) return response.data;
};

// 로그인
export const login = async (loginInfo) => {
  // 데이터를 노출시키지 않기 위해서 post로 사용
  const response = await apiAxios.post("/login", loginInfo);
  if (response.status === 200) return response.data;
};

// 할일 목록 조회
export const getTodoList = async () => {
  const response = await apiAxios.get("/todo");
  if (response.status === 200) return response.data;
};

/**
 * Request Method: OPTIONS 에 대해..
 */

export const insertTodo = async (content) => {
  const response = await apiAxios.post("/todo", { content: content });
  if (response.status === 200) return response.data;
};
