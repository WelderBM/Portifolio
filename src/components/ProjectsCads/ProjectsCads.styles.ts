import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

export const BackgroundLayer = styled.div<{ $backgroundImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center 20%;
  transition:
    background-image 1s ease-in-out,
    opacity 1s ease-in-out;
  opacity: 0.2; /* Subtly visible behind content */
  filter: blur(5px);
`;
