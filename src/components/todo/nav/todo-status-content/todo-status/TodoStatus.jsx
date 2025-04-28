import React from "react";
import { Link } from "react-router-dom";
import "./TodoStatus.scss";

const TodoStatus = ({ statusText, pathName }) => {
  return (
    <Link to={pathName} className="status-link">
      {statusText}
    </Link>
  );
};

export default TodoStatus;
