import axios from "axios";

const baseURL = "http://localhost:8080";

const apiAxios = axios.create({
  baseURL: baseURL,
});

// 통신 오류 발생 시 처리
apiAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
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
