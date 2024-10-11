import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const CircleButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.fontColor};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.neutralColor};
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 60px; /* Ajuste a distância do botão */
  left: 0;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  overflow: hidden;
  z-index: 10;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.neutralColor};

  &:hover {
    background-color: ${props => props.theme.backgroundColor};
  }
   span{
    width: 20px;
    height: 20px;
   }
`;
