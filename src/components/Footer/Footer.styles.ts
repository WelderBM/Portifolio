import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 20px;
  background-color: ${props => props.theme.backgroundColor}; 
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  gap: 25px;
  
  a {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.neutralColor};
    }
  }
`;

