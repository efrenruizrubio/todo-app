import { useEffect, useState } from "react";
import { TodosContext } from "./context/todos-context";
import {
	Pagination,
	TodoFilter,
	TodoInput,
	TodoList,
} from "./components/index";

export const App = () => {
	const [todos, setTodos] = useState([{}]);

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
		setTodos((prevTodos) => {
			if (Object.keys(...prevTodos).length === 0) {
				newTodo.id = 1;
				localStorage.setItem("todos", JSON.stringify(newTodo));
				return [newTodo];
			} else {
				const updatedTodos = [...prevTodos, newTodo];
				localStorage.setItem("todos", JSON.stringify(updatedTodos));
				return updatedTodos;
			}
		});
	};

	const removeTodo = (id) => {
		// const todoToRemove = todos[id - 1];
		// console.log(todoToRemove);
		console.log(id);
	};

	return (
		<TodosContext.Provider value={{ todos, addTodo, removeTodo }}>
			<TodoInput addTodo={addTodo} todos={todos} />
			<TodoFilter />
			<TodoList todos={todos} removeTodo={removeTodo} />
			<Pagination />
		</TodosContext.Provider>
	);
};
