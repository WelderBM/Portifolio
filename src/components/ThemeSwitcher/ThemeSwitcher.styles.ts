import styled from 'styled-components';

export const SwitchContainer = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 7px;
  background-color: ${({ theme }) => (theme === 'light' ? '#f0f0f0' : '#333')};
  border-radius: 50%;
  transition: background-color 0.3s ease;

  /* Se quiser adicionar mais estilos ao hover */
  &:hover {
    background-color: ${({ theme }) => (theme === 'light' ? '#e0e0e0' : '#444')};
  }
`;

export const SunIcon = styled.div`
  color: #f39c12; /* Cor do ícone do sol */
`;

export const MoonIcon = styled.div`
  color: #fff; /* Cor do ícone da lua */
`;
