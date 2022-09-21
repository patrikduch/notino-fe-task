import { ArrowBack } from '@mui/icons-material';
import { Button, Container } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

    const passedTodo : TodoItemType = {
        id: location.state.todo.id,
        title: location.state.todo.title,
        description: ''
    }

    return (
        <Container>
            <Button variant="text" onClick={() => navigate("/")}>
                <ArrowBack />
            </Button>
            <TodoItemDetail todo={passedTodo} />
        </Container>
    );
}

export default TodoDetailPage;