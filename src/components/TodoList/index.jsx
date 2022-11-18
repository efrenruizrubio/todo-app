import React from "react";
import { TodoItem } from "../TodoItem";
import styles from "./TodoList.module.scss";

export const TodoList = ({ todos }) => {
	return (
		<section className={styles.list}>
			{Object.keys(todos).length > 0
				? todos.map((todo, i) => {
						return (
							<TodoItem
								key={i}
								id={todo.id}
								title={todo.title}
								priority={todo.priority}
								completed={todo.completed}
								todos={todos}
							/>
						);
				  })
				: null}
		</section>
	);
};
