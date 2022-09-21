import { createTheme } from "@mui/material";

const arcBlue = '#00539f';
const arcOrange = '#FFBA60';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
    }
  },

  typography: {
    h1: {
      fontSize: '1.7em'
    },
    h2: {
      fontSize: '1.6em'
    },
    h3: {
      fontSize: '1.5em',
      fontWeight: 'unset'
    },
  }
});

export default theme;