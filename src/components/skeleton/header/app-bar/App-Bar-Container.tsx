import { Box } from '@mui/material';
import React from 'react';
import AppBarContent from './App-Bar-Content';

/**
 * @function AppBarContainer Encapsulation component for main Appbar.
 * @author Patrik Duch
 * @returns  Encapsulation JSX for Appbar component.
 */
const AppBarContainer: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBarContent />
        </Box>
    );
}

export default AppBarContainer;