import React from 'react';
import App from "./App";
import ReactDOM from 'react-dom';
import {createGlobalStyle, ThemeProvider} from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Consolas, sans-serif;
  }
`

const theme = {
    colors: {
        primary: 'green',
        secondary: 'red'
    },
    media: {
        phone: '(max-width:425px)',
        tablet: '(max-width:768px) and (min-width:425px)',
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Global/>
        <App/>
    </ThemeProvider>
    ,
    document.getElementById('root')
)