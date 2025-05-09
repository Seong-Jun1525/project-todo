import { useContext, useEffect } from "react";
import { getTodoList } from "../../../../services/apiService";
import TodoItem from "./todo/TodoItem";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoList() {
  const { todos, changeTodos } = useContext(TodoContext);

  const initialTodos = async () => {
    const list = await getTodoList();
    console.log(list);
    changeTodos(list);
  };

  // useEffect는 async await 불가
  useEffect(() => {
    // console.log(todos);
    initialTodos();
  }, []);

  return (
    <>
      {todos?.map((data, index) => {
        return !data.isCompleted && !data.isDeleted && <TodoItem key={"todo_" + index} index={index} {...data} />;
      })}
    </>
  );
}
