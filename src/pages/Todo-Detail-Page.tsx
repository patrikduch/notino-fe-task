import { ArrowBack } from '@mui/icons-material';
import { Button, Container, styled } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageTitle from '../components/common/Page-Title';
import TodoItemDetail from '../components/todo/Todo-Item-Detail';
import { TodoItemType } from '../components/todo/todo-types';

/**
 * @function TodoDetailPage Page component for displaying detail of particular Todo.
 * @author Patrik Duch
 * @returns JSX content that displays basic information about particular todo item.
 */
const TodoDetailPage: React.FC = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const ButtonStyled = styled(Button)({
        marginTop: '1.6vh'
    });
    
    const passedTodo : TodoItemType = {
        id: location.state.todo.id,
        title: location.state.todo.title,
        description: location.state.todo.description
    }

    return (
        <Container>
            <ButtonStyled variant="outlined" onClick={() => navigate("/")}>
                <ArrowBack />
            </ButtonStyled>
            <PageTitle text={`Detail of todo item #${passedTodo.id}`} />
            <TodoItemDetail todo={passedTodo} />
        </Container>
    );
}

export default TodoDetailPage;