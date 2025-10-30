import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 80px;
  text-align: center;
`;

export const Title = styled.h3`
  color: ${props => props.theme.fontColor};
  font-size: 60px;
  font-weight: 600;
  font-family: 'Montserrat';
  margin-top: 70px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Paragraph = styled.p`
  width: 60%;
  text-align: center;
  color: ${props => props.theme.fontColor};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: 'Montserrat';

  @media (max-width: 768px) {
    width: 80%;
    font-size: 14px;
  }
`;