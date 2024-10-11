import styled from 'styled-components';

export const About = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: min-content;
  width: 80%;
  max-width: 1200px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 80px auto;

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
  line-height: 1;
  font-family: "Rowdies", sans-serif;

  @media (max-width: 810px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 810px) {
    font-size: 16px;
  }
`;
