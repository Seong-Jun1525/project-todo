import React from "react";
import TodoStatus from "./todo-status/TodoStatus";
import "./TodoStatusContent.scss";

const TodoStatusContent = () => {
  return (
    <div className="todo-status-container">
      <TodoStatus statusText="진행중" pathName="/todos" />
      <TodoStatus statusText="완료" pathName="/todos/completed" />
      <TodoStatus statusText="삭제" pathName="/todos/deleted" />
    </div>
  );
};

export default TodoStatusContent;
