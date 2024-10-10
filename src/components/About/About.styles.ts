import styled from 'styled-components'

export const About = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  height: min-content;
  width: 80%;
  padding: 20px;

  background-color: rgba(255, 255, 255, 0.3);

  backdrop-filter: blur(10px);

  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 80px 0;
`;
export const Image = styled.img`
  width: 400px;
  height: 400px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  gap: 20px;
`;

export const Title = styled.h3`
  color: #f97c22;
  font-size: 4.3rem;
  line-height: 1;
  font-family: "Rowdies", sans-serif;
`;
export const Description = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
`;
