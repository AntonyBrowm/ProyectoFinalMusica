import {createTheme} from "@mui/material";

export const theme =createTheme({
    palette:{
        neutral: {
            main: '#FFFFFF',
            contrastText: '#000',
          },
          primary: {
            main: "rgb(251 26 45 / 74%)"
          },
          secondary: {
            main: '#1E90FF'
          }
        },
        typography: {
          fontFamily: 'Roboto'
        },
        shape: {
          borderRadius: 0
        },
        props: {
          MuiButton: {
            variant: 'contained',
            disableRipple: true,
            color: 'primary'
          },
          MuiTextField: {
            variant: 'outlined',
            InputLabelProps: {
              shrink: true
            }
          },
          MuiPaper: {
            elevation: 0
          }  
    }
})