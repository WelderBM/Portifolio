import styled from 'styled-components';

export const WhatsAppPopupContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

export const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza o ícone dentro do botão */
  background-color: #25D366;
  color: white;
  padding: 15px; /* Ajuste o padding para dar mais espaço ao ícone */
  border-radius: 50%; /* Mantém o formato circular */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #18A64F;
  }
`;
