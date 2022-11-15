import React from "react";
import styles from "./TodoItem.module.scss";

export const TodoItem = ({ id, title, priority, completed }) => {
	return (
		<article className={styles.card}>
			<h2 className={styles.card_element}>{title}</h2>
			<h2 className={styles.card_element}>{id}</h2>
			<h4 className={styles.card_element}>{priority}</h4>
			<h4 className={`${styles.card_element} ${styles.card_element_checkmark}`}>
				{completed ? "true" : "false"}
			</h4>
		</article>
	);
};
