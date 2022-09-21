import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { TodoItemType } from './todo-types';

/**
 * @interface IProps Component's props interface.
 * @author Patrik Duch
 */
interface IProps {
    todo: TodoItemType
}

const TodoItemDetailContainerStyled = styled('div')({
    marginTop: '1.6vh'
});

const TodoDetailBox = styled(Box)({
    marginTop: '2vh',
    border: '1px dashed grey',
    padding: '0.7vw'
});


/**
 * @function TodoItemDetail Detailed information about selected Todo item.
 * @param todo Todo item that be rendered.
 * @author Patrik Duch
 */
const TodoItemDetail: React.FC<IProps> = ( { todo }) => {
    return (
        <TodoItemDetailContainerStyled>
            <TodoDetailBox>
                {todo.id}. {todo.title}, {todo.description}
            </TodoDetailBox>
        </TodoItemDetailContainerStyled >
    );
}

export default TodoItemDetail;