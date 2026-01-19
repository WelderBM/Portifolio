import styled from "styled-components";

export const About = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: min-content;
  width: 80%;
  max-width: 1200px;
  padding: 40px;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.body},
    ${(props) => props.theme.backgroundColor}
  );
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  margin: 80px auto;

  @media (max-width: 810px) {
    background: linear-gradient(
      180deg,
      ${(props) => props.theme.body},
      ${(props) => props.theme.backgroundColor}
    );
  }

  @media (min-width: 810px) {
    flex-direction: row;
    justify-content: center;
    gap: 30px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (min-width: 810px) {
    width: 40%;
  }
`;

export const Title = styled.h3`
  color: #f97c22;
  font-size: 4.3rem;
  line-height: 1.1;
  font-family: "Rowdies", sans-serif;

  @media (max-width: 810px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-size: 20px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 810px) {
    font-size: 16px;
  }
`;

export const SecondTitle = styled.p`
  margin-top: 20px;
  color: #f97c22;
  font-size: 24px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 810px) {
    font-size: 16px;
  }
`;

export const Button = styled.button<{
  $backgroundCol: string;
  $fontCol: string;
}>`
  background-color: ${(props) => props.$backgroundCol};
  color: ${(props) => props.$fontCol};
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  margin: 5px;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;
