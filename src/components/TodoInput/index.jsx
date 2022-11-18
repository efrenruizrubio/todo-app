import React, { useState, useRef } from "react";
import styles from "./TodoInput.module.scss";

export const TodoInput = ({ addTodo }) => {
	const [title, setTitle] = useState("");
	const [priority, setPriority] = useState("Baja");

	const ref = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo({ title, priority });
		ref.current.value = "";
		ref.current.focus();
		setTitle("");
		setPriority("Baja");
	};

	return (
		<section className={styles.input}>
			<form className={styles.input__form} autoComplete="off">
				<label htmlFor="name" className={styles.input__form_label}>
					Agrega un nuevo elemento a la lista de cosas por hacer
				</label>
				<input
					type="text"
					id="name"
					required
					placeholder="Descripción de la tarea"
					ref={ref}
					className={styles.input__form_name}
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				<label htmlFor="priority">Prioridad</label>
				<select
					id="priority"
					required
					className={styles.input__form_priority}
					value={priority}
					onChange={(e) => setPriority(e.target.value)}
				>
					<option value="Baja">Baja</option>
					<option value="Media">Media</option>
					<option value="Alta">Alta</option>
				</select>
				<input
					type="submit"
					value="Añadir elemento"
					onClick={(e) => handleSubmit(e)}
					disabled={!title}
				/>
			</form>
		</section>
	);
};
