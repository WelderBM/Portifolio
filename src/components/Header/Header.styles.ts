import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  position: fixed;
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  transition: background-color 0.3s ease; /* Transição para o fundo */

  /* Adicionando um pseudo-elemento para a borda inferior */
  &::after {
    content: '';
    position: absolute; /* Coloca o pseudo-elemento em relação ao header */
    bottom: 0; /* Alinha ao fundo do header */
    left: 0; /* Inicia do lado esquerdo */
    width: 100%; /* A largura será 100% inicialmente */
    height: 5px; /* Altura da borda */
    background-color: #f97c22; /* Cor da borda */
    transform: translateX(-100%); /* Começa fora da tela à esquerda */
    transition: transform 0.3s ease; /* Transição suave para o movimento */
  }

  &.scrolled::after {
    transform: translateX(0); /* Move para a posição original ao rolar */
  }
  
  h2 {
    color: ${props => props.theme.fontColor};
    font-family: 'Montserrat';
    span {
      color: #f97c22;
    }
  }
`;

export const Nav = styled.nav`
  ul {
    color: ${props => props.theme.fontColor};
    display: flex;
    gap: 40px;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    list-style-type: none;
  }

  ul li a {
    text-decoration: none; /* Remove o sublinhado */
    color: inherit; 
    position: relative;
    cursor: pointer; 
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px; 
      background-color: #f97c22; 
      transition: width 0.3s ease; 
    }
  }
`;
