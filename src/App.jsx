import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";
import Register from "./components/users/register/Register";
import TodoMain from "./components/todo/TodoMain";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(() => {
    /**
     * const loginInfo = localStorage.getItem("loginInfo");
     * return loginInfo !== null && loginInfo !== undefined && loginInfo === true;
     */
    return !!localStorage.getItem("loginInfo");
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={isLogin ? <TodoMain /> : <MainContent setIsLogin={setIsLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
