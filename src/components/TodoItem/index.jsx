import React from "react";
import styles from "./TodoItem.module.scss";
import logo from "../../assets/icons/trash-can.svg";

export const TodoItem = ({ id, title, priority, completed, removeTodo }) => {
	const deleteTodo = (id) => {
		removeTodo;
	};
	return (
		<article className={styles.card}>
			<div className={styles.card_left}>
				<h2 className={styles.card_element_id}>{id}</h2>
			</div>
			<div className={styles.card_center}>
				<h2 className={styles.card_element}>{title}</h2>
				<h2 className={styles.card_element}>{priority}</h2>
				<h2
					className={`${styles.card_element} ${styles.card_element_checkmark}`}
				>
					{completed ? "true" : "false"}
				</h2>
			</div>
			<div className={styles.card_right}>
				<img
					width="30"
					height="30"
					src={logo}
					alt="Trash icon"
					onClick={() => deleteTodo(id)}
				/>
			</div>
		</article>
	);
};
