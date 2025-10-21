import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.main};
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }
`;
