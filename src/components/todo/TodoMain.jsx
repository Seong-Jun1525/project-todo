import React from "react";
import Navbar from "./nav/Navbar";
import "./TodoMain.scss";
import TodoContent from "./content/TodoContent";

const TodoMain = () => {
  return (
    <div className="container">
      <Navbar />
    </div>
  );
};

export default TodoMain;
