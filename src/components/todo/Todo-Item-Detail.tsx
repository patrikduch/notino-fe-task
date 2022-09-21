import React from 'react';
import { TodoItemType } from './todo-types';

/**
 * @interface IProps Component's props interface.
 * @author Patrik Duch
 */
interface IProps {
    todo: TodoItemType
}

/**
 * @function TodoItemDetail Detailed information about selected Todo item.
 * @author Patrik Duch
 */
const TodoItemDetail: React.FC<IProps> = ( { todo }) => {
    return (
        <>
            {todo.id}
            {todo.title}
            {todo.description}
        </>
    );
}

export default TodoItemDetail;