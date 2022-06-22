import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = responsiveFontSizes(createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#24252C",
            paper:"#353A51"
        },
        primary: {
            main: "#4B8CFF",
            contrastText: "#000000",
            dark: "#0060cb",
            light: "#88bcff"
        },
        secondary: {
            main: "#F1C039",
            contrastText: "#24252C",
            dark: "#bb8e00",
            light: "#fff06c"
        }
    },
    typography: {
        fontSize: 12,
        fontFamily: 'PT Sans, sans-serif',
        h1: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 700,
        },
        h2: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 700,
        },
        h3: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 700,
        },
        h4: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 700,
        },
        h5: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 700,
        },
        h6: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 700,
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'PT Sans';
                    font-style: normal;
                    font-display: swap;
                }
                *{
                    font-family: 'PT Sans', Arial;
                }
            `,
        },
    },
}));