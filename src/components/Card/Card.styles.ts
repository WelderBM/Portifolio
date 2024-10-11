import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  height: 560px;
  text-align: center;
  margin: 20px;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 90%; /* Ajusta a largura para telas menores */
    height: auto; /* Permite que a altura se ajuste conforme o conteúdo */
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px; /* Ajusta a altura da imagem em telas menores */
  }
`;

export const ButtonContainer = styled.div`
  padding-top: 20px;
`;

export const Button = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  margin: 5px;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.fontColor};
  font-size: 1.6rem;
  margin: 15px 0 10px;
  padding: 10px;
  transition: color 0.3s, text-shadow 0.3s;

  ${CardContainer}:hover & {
    color: #f97c22; /* Exemplo de cor no hover */
  }

  @media (max-width: 768px) {
    font-size: 1.4rem; /* Ajusta o tamanho da fonte em telas menores */
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-size: 1.2rem;
  padding: 0 15px 15px;
  line-height: 1.5;
  transition: filter 0.3s;
  max-width: 350px;
  margin: 0 auto;

  &:hover {
    filter: none;
  }

  ${CardContainer}:hover & {
    color: #f97c22;
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Ajusta o tamanho da fonte em telas menores */
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

  @media (max-width: 768px) {
    max-width: 90%; /* Ajusta a largura máxima em telas menores */
    max-height: 90%; /* Ajusta a altura máxima em telas menores */
  }
`;
