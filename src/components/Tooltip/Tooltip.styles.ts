import styled from 'styled-components';

export const TooltipContainer = styled.div<{ left: number; top: number }>`
  position: absolute;
  margin-right: -155px;
  color: ${props => props.theme.backgroundColor};
  background-color: ${props => props.theme.fontColor};
  border-radius: 10px;
  padding: 5px 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  z-index: 1000;
`;


