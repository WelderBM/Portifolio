import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const SliderContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  z-index: 100;

  &:hover div {
    animation-play-state: paused;
  }
`;

export const Slider = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  animation: ${slide} 20s linear infinite;
  animation-play-state: running;
`;

export const IconItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: 'Arial', sans-serif;
  font-size: 20px;
  color: #333;

  div {
    font-weight: bold;
    font-size: 20px;
  }

  svg {
    font-size: 30px;
    transition: transform 0.2s ease, color 0.3s ease;
    color: #808080;

    &:hover {
      color: ${(props) => props.color};
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;
