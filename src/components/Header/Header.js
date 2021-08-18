import React from "react";
import { Container } from "../../styles/globalStyles";
import { DarkMode, HeaderContainer, HeaderWrapper } from "./Header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderWrapper>
          <p>Where in the world</p>
          <DarkMode>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <p>Dark Mode</p>
          </DarkMode>
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
};
export default Header;
