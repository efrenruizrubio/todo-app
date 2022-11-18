import React from "react";

export const TodosContext = React.createContext({
	todos: [],
	addTodo: (title) => {},
	removeTodo: (index) => {},
});
