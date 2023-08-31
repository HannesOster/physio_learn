import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Tahoma, Verdana, Helvetica, sans-serif;
    font-weight: 450;
    background-color: white;
    color: #1F1C1C;
  }
`;
