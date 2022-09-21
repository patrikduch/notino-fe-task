import { Container } from '@mui/material';
import React from 'react';
import TodoList from '../components/todo/Todo-List';

/**
 * @function TodoPage Page component for displaying list of todos.
 * @author Patrik Duch
 * @returns JSX content that displays all todos.
 */
const TodoPage: React.FC = () => {

    return (
        <Container>
            <TodoList />
        </Container>
    );
}

export default TodoPage;