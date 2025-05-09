import React from "react";
import "./TodoContent.scss";
import { Outlet } from "react-router-dom";
import SearchContent from "./search/SearchContent";

const TodoContent = () => {
  return (
    <div className="todo-content-container">
      <SearchContent />
      <Outlet />
    </div>
  );
};

export default TodoContent;
