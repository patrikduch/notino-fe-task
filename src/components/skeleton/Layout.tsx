import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBarContainer from './header/app-bar/App-Bar-Container';

/**
 * @function Layout Shared design for all routes.
 * @author Patrik Duch
 * @returns JSX for rendering basic shared design.
 */
const Layout: React.FC = () => {
    return (
      <>
        <AppBarContainer />
        <Outlet />
    </>
    );
}

export default Layout;