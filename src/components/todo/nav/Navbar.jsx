import React from "react";
import "./Navbar.scss";
import TodoStatusContent from "./todo-status-content/TodoStatusContent";
import TodoContent from "../content/TodoContent";
const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-title">TODO MANAGER</div>
        <TodoStatusContent />
      </div>
      <TodoContent />
    </>
  );
};

export default Navbar;
