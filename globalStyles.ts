import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(to bottom, #cde9f9, #fff);
    color: #333;
    height: 100vh;
    overflow: hidden;
  }
`;
