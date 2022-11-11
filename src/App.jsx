import { useEffect, useState } from "react";
import { TodosContext } from "./context/todos-context";
import {
  Pagination,
  TodoFilter,
  TodoInput,
  TodoList,
} from "./components/index";

export const App = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) setTodos(todos);
  }, []);

  const addTodo = ({ title, priority }) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      priority,
      completed: false,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo }}>
      <TodoInput addTodo={addTodo} todos={todos} />
      <TodoFilter />
      <TodoList />
      <Pagination />
    </TodosContext.Provider>
  );
};
