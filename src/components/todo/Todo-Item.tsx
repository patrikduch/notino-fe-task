import { styled } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { TodoItemType } from './todo-types';

/**
 * @interface IProps Component's props interface.
 * @author Patrik Duch.
 */
interface IProps {
    todo: TodoItemType
}

const TodoStyledContainer = styled('div')({
	marginTop: '1vh'
});
  
/**
 * @function TodoItem Displays Todo item.
 * @author Patrik Duch
 * @param todo Particular todo item.
 * @returns JSX with todo item information.
 */
const TodoItem: React.FC<IProps> = ( { todo }) => {

	const navigate = useNavigate();

	const handleOnClick = (todo: {id: string, title: string, description: string}) => {
		navigate("/todo-detail", {state: {todo: todo}});
	}

    return (
		<TodoStyledContainer onClick={(() => handleOnClick(todo)) }>
			<span>{todo.id}{'.'}{todo.title}</span>
		</TodoStyledContainer>
	);
}

export default TodoItem;