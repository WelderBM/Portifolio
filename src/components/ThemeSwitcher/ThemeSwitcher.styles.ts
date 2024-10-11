import styled from 'styled-components';
import { darkTheme } from '../../theme';
import { lightTheme } from '../../theme';

export const SwitchContainer = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 7px;
  background-color: ${({ theme }) => (theme === 'light' ? darkTheme.fontColor : lightTheme.fontColor)};
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => (theme === 'light' ?  darkTheme.neutralColor : lightTheme.neutralColor)};
  }
`;

export const SunIcon = styled.div`
  color: #f39c12; /* Cor do ícone do sol */
`;

export const MoonIcon = styled.div`
  color: #fff; /* Cor do ícone da lua */
`;
