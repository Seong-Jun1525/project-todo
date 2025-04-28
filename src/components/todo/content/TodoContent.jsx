import React from "react";
import "./TodoContent.scss";
import { Outlet } from "react-router-dom";

const TodoContent = () => {
  return (
    <div className="todo-content-container">
      <Outlet />
    </div>
  );
};

export default TodoContent;
