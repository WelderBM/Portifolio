import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column; /* Muda para coluna em telas menores */
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.theme.backgroundColor}; 

  @media (min-width: 768px) {
    flex-direction: row; /* Muda para linha em telas maiores */
    gap: 40px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  gap: 25px;

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Permite que os ícones se movam para a próxima linha em telas pequenas */
    justify-content: center;
  }

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
