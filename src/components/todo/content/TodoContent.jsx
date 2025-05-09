import { TodoProvider } from "../contexts/TodoContext";
import TodoInput from "./todo/TodoInput";
import "./TodoContent.scss";
import TodoList from "./TodoList";

const TodoContent = () => {
  return (
    <TodoProvider>
      <div className="todo-content-container">
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default TodoContent;
