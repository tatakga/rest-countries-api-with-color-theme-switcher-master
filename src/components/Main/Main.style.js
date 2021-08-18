import styled from "styled-components";
import { COLORS, FONT_WEIGHTS } from "../../styles/globalVariables";

const Section = styled.section`
  padding: 1.5rem 0;
  background-color: ${COLORS.VERY_LIGHT_GRAY};
`;

const InputChangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  > div {
    display: flex;
    align-items: center;
    background-color: ${COLORS.WHITE};
    padding: 1.125rem 2rem;
    box-shadow: 0px 0px 22px rgba(17, 17, 26, 0.1), 0px 8px 32px rgba(17, 17, 26, 0.05);
    border-radius: 5px;
    margin-bottom: 2.5rem;
    width: 100%;
    @media (min-width: 900px) {
      max-width: 480px;
      margin-bottom: 0;
    }
  }
  svg {
    width: 16px;
    height: 19px;
    margin-right: 1.5rem;
  }

  input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 1rem;
    background-color: ${COLORS.WHITE};
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    padding: 1.125rem 1.5rem;
    margin: 0;
    width: 100%;
    max-width: 200px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.3;
    cursor: default;
    outline: none;
    border: none;
    border-radius: 5px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='292.4' height='292.4'%3E%3Cpath fill='%23333' d='M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1.5rem center;
    background-size: 9px;
    box-shadow: 0px 0px 22px rgba(17, 17, 26, 0.1), 0px 8px 32px rgba(17, 17, 26, 0.05);
    ::-ms-expand {
      display: none;
    }
    :hover {
      border-color: #777;
    }
    :focus {
      border-color: #999;
      box-shadow: 0 0 1px 2px #6db4ff;
      outline: none;
    }
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-top: 1.5rem;
  padding: 0 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0;
    gap: 4rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 0px 22px rgba(17, 17, 26, 0.1), 0px 8px 32px rgba(17, 17, 26, 0.05);
  overflow: hidden;
  transition: all 0.25s linear;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardMedia = styled.div.attrs((props) => ({
  style: {
    background: props.bgUrl,
  },
}))`
  width: 100%;
  min-height: 10rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 2.875rem;
  background-color: ${COLORS.WHITE};

  h3 {
    margin-bottom: 1.375rem;
  }
  p:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const MessageText = styled.p`
  color: ${(props) => (props.type === "loading" ? "black" : "red")};
  margin-top: 1rem;
  font-size: 2.5rem;
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  text-align: center;
`;

const BackButton = styled.button`
  display: inline-flex;
  padding: 0.6rem 2rem;
  background-color: ${COLORS.WHITE};
  box-shadow: 0px 0px 22px rgba(17, 17, 26, 0.1), 0px 8px 32px rgba(17, 17, 26, 0.05);
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 5rem;
  > svg {
    margin-right: 8px;
    width: 1rem;
    height: 1rem;
  }
`;

const DetailCountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FlagImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 28.75rem;
  margin-bottom: 5rem;
  > img {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 900px) {
    max-width: 35rem;
  }
`;

const TextDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 900px) {
    max-width: 37.5rem;
  }
`;

const FlexTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: start;
  }
  > div {
    margin-bottom: 1.75rem;
    width: 100%;
    @media (min-width: 900px) {
      display: inline;
      width: 50%;
    }
  }
`;

const BorderCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  > p {
    display: inline-block;
    text-align: center;
    padding: 0.6rem 2rem;
    background-color: ${COLORS.WHITE};
    box-shadow: 0px 0px 22px rgba(17, 17, 26, 0.1), 0px 8px 32px rgba(17, 17, 26, 0.05);
    margin-bottom: 0;
    border-radius: 5px;
  }
  @media (min-width: 375px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 640px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export { Section, InputChangeContainer, CardContainer, Card, CardMedia, CardContent, MessageText, BackButton, DetailCountryContainer, FlagImageContainer, TextDetailContainer, BorderCardContainer, FlexTextContainer };
