import styled from 'styled-components';

export const HiPhrase = styled.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  color: ${props => props.theme.fontColor};
  font-weight: 600;
  font-size: 1.8rem;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 810px) {
    font-size: 1.5rem;
  }
`;

export const MyName = styled.p`
  color: ${props => props.theme.fontColor};
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: 'Roboto';
  text-align: center;

  @media (max-width: 810px) {
    font-size: 2.5rem;
  }
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.fontColor};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 30px;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 810px) {
    font-size: 1.2rem;
  }
`;
