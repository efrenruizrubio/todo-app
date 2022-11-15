import React from "react";
import { TodosContext } from "../../context/todos-context";
import { TodoItem } from "../TodoItem";
import styles from "./TodoList.module.scss";

export const TodoList = ({ todos }) => {
	return (
		<section className={styles.list}>
			{todos.length > 0 &&
				todos.map((todo, i) => {
					return (
						<TodoItem
							key={i}
							id={todo.id}
							title={todo.title}
							priority={todo.priority}
							completed={todo.completed}
						/>
					);
				})}
		</section>
	);
};
