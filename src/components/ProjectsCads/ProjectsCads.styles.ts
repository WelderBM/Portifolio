import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 80px;
  text-align: center;
`;

export const Title = styled.h3`
  color: ${props => props.theme.fontColor};
  font-size: 72px;
  font-weight: 600;
  font-family: 'Montserrat';
  margin-top: 70px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Paragraph = styled.p`
  width: 60%;
  text-align: center;
  color: ${props => props.theme.fontColor};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: 'Montserrat';

  @media (max-width: 768px) {
    width: 80%;
    font-size: 14px;
  }
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 20px;
  padding-bottom: 40px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 300px;

  @media (max-width: 1200px) {
    flex: 1 1 45%;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

export const ArrowButton = styled.button<{ position: 'left' | 'right' }>`
  background-color: ${props => props.theme.backgroundColor};
  border: none;
  color: ${props => props.theme.fontColor};
  cursor: pointer;
  position: absolute;
  top: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  opacity: 0.8;
  z-index: 2;
  border-radius: 50%;
  transform: translateY(-50%);

  left: ${({ position }) => (position === 'left' ? '10px' : 'auto')};
  right: ${({ position }) => (position === 'right' ? '10px' : 'auto')};

  &:hover {
    opacity: 1;
  }

  svg {
    font-size: 1.5rem;
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOutRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const fadeOutLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

export const FadeInRight = styled.div`
  animation: ${fadeInRight} 0.5s linear;
`;

export const FadeInLeft = styled.div`
  animation: ${fadeInLeft} 0.5s linear;
`;

export const FadeOutRight = styled.div`
  animation: ${fadeOutRight} 0.5s linear forwards;
`;

export const FadeOutLeft = styled.div`
  animation: ${fadeOutLeft} 0.5s linear forwards;
`;

