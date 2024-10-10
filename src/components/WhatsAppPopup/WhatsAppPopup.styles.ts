import styled from 'styled-components';

export const WhatsAppPopupContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25D366; // Cor do botão do WhatsApp
  color: white;
  padding: 15px;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #18A64F;
  }
`;

export const ScrollUpButton = styled.button`
  position: absolute;
  bottom: 120px;
  right: 12px;
  background-color: #f97c22;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px; 
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  opacity: 0; // Começa invisível
  transform: translateY(30px);
  transition: opacity 0.3s ease, transform 0.3s ease; // Transição para opacidade e movimento

  &.show {
    opacity: 1; // Fica visível quando a classe show é aplicada
    transform: translateY(0); // Move para cima quando visível
  }
`;
