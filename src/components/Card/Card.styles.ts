import styled from 'styled-components';

export const CardContainer = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.body}, ${props => props.theme.backgroundColor}); /* Linear gradient em 135 graus com duas cores */
  border-radius: 20px;
  width: 300px;
  height: 500px;
  text-align: center;
  margin: 20px;
  position: relative;
  z-index: 1;
  overflow: hidden;

  /* Sombra contínua estilo Apple */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), /* Sombra difusa */
              0 10px 10px rgba(0, 0, 0, 0.07); /* Sombra secundária */
  transition: transform 0.3s ease; /* Somente transição para a escala */

  &:hover {
    transform: scale(1.05); /* Mantém o efeito de zoom ao passar o mouse */
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: auto; /* Ajusta a altura da imagem em telas menores */
  }
`;

export const ButtonContainer = styled.div`
  padding-top: 20px;
  height: 80px;
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
