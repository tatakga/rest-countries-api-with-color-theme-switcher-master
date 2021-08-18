import styled from "styled-components";
import { COLORS, FONT_WEIGHTS } from "../../styles/globalVariables";

const HeaderContainer = styled.header`
  width: 100%;
  background: ${COLORS.WHITE};
  box-shadow: 0px 0px 16px rgba(17, 17, 26, 0.1);
  color: ${COLORS.VERY_DARK_BLUE_LIGHT_MODE_TEXT};
  margin-bottom: 1px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.1875rem 0;
  > p:first-child {
    font-size: 1.25rem;
    font-weight: ${FONT_WEIGHTS.BOLD};
  }
`;

const DarkMode = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  button {
    display: flex;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    margin-right: 10px;
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
  > p {
    font-weight: ${FONT_WEIGHTS.MEDIUM};
  }
`;

export { HeaderContainer, HeaderWrapper, DarkMode };
