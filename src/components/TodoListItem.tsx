import React from 'react';
import styles from './TodoListItem.module.scss';

interface TodoItemProps {}

const TodoListItem: React.FC<TodoItemProps> = () => {
	return <div className={styles.todoItem}>todo item</div>;
};

export default TodoListItem;
