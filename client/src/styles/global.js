import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Ubuntu, 'Segoe UI', sans-serif;
    font-size: 14px;
    color: #222;
  }
`;

export default GlobalStyle;
