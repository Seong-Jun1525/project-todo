import axios from "axios";

const baseURL = "http://localhost:8080";

const apiAxios = axios.create({
  baseURL: baseURL,
});

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
