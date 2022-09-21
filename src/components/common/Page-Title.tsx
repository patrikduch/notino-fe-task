import { Typography } from '@mui/material';
import React from 'react';
import styled from "styled-components";

/**
 * @interface IProps Component's props interface.
 * @author Patrik Duch
 */
interface IProps {
    text: string;
}

const TypographyStyled = styled(Typography)({
    marginTop: '1.5vh !important',
});

/**
 * @function PageTitle Common component for rendering H2 title.
 * @param text Content that will be rendered inside Typography. 
 * @returns JSX with typography content.
 */
const PageTitle: React.FC<IProps> = ({ text }) => {
    return (
        <TypographyStyled variant="h2">{text}</TypographyStyled>
    );
}

export default PageTitle;