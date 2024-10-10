import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  text-align: center;
  margin: 20px;

  position: relative;
  z-index: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ButtonContainer = styled.div`
  padding-top: 20px;
`;

export const Button = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9; /* Leve efeito de hover */
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.fontColor};
  font-size: 1.6rem; /* Aumentando o tamanho da fonte para maior destaque */
  margin: 15px 0 10px;
  padding: 10px;
  transition: color 0.3s, text-shadow 0.3s; /* Adicionando transições para cor e sombra */

  &:hover {
    color: ${(props) => props.theme.hoverColor || 'lightgray'}; /* Cor do texto ao passar o mouse */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Sombra ao passar o mouse */
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-size: 1.1rem;
  padding: 0 15px 15px;
  line-height: 1.5;
  transition: filter 0.3s;

  &:hover {
    filter: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const EnlargedImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: cover;
  border-radius: 10px;
`;
