import React from 'react';
import styles from './TodoList.module.scss';
import TodoListItem from './TodoListItem';

interface TodoProps {}

const TodoList: React.FC<TodoProps> = () => {
	return (
		<div className={styles.todo}>
			<TodoListItem />
		</div>
	);
};

export default TodoList;
