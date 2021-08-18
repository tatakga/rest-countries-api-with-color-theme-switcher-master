import styled, { createGlobalStyle } from "styled-components";
import { COLORS, FONT_FAMILIES } from "./globalVariables";

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 16px;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: ${FONT_FAMILIES.NUNITO_SANS};
        color: ${COLORS.DARK_BLUE};
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    select, input {
        font-family: ${FONT_FAMILIES.NUNITO_SANS};
    }
    img {
        max-width: 100%;
        height: auto;
    }
`;

const Container = styled.div`
  padding: 0 2rem;
  margin: 0 auto;

  @media (min-width: 900px) {
    max-width: 1280px;
    padding: 0 2rem;
  }
`;

export default GlobalStyles;
export { Container };
