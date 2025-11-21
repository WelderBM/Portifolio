import styled from "styled-components";

export const TitlesContainer = styled.div`
  text-align: center;
  padding: 40px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding: 40px 25px;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.fontColor};
  font-size: 56px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 16px;
  letter-spacing: -1.5px;
  line-height: 1.2;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 36px;
    letter-spacing: -0.5px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  width: 75%;
  max-width: 900px;
  color: ${(props) => props.theme.fontColor};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.7;
  text-align: center;
  margin: 0 auto;
  letter-spacing: 0.3px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 95%;
    font-size: 16px;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
