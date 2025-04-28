import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";
import Register from "./components/users/register/Register";
import TodoMain from "./components/todo/TodoMain";
import CompletedTodo from "./components/todo/content/completed/CompletedTodo";
import DeletedTodo from "./components/todo/content/deleted/DeletedTodo";
import Doing from "./components/todo/content/doing/Doing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainContent />} />
        <Route path="/register" element={<Register />} />

        <Route path="/todos" element={<TodoMain />}>
          <Route index element={<Doing />} />
          <Route path="completed" element={<CompletedTodo />} />
          <Route path="deleted" element={<DeletedTodo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
