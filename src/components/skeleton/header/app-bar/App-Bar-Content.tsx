import { AppBar, Toolbar, IconButton, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TodoLinkStyled = styled(Link)({
    fontWeight: 'normal',
    color: 'white',
    textDecoration: 'none',
});

/**
 * @function AppBarContent Content of Appbar component.
 * @author Patrik Duch
 * @returns JSX content to display Appbar component.
 */
const AppBarContent: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                ></IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <TodoLinkStyled to='/'>TODO list</TodoLinkStyled>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarContent;