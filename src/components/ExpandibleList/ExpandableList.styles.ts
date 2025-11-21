import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  background: none;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
`;

export const Content = styled.div<{
  isExpanded: boolean;
  totalItems: number;
  maxItemsToShow: number;
  individualHeight: number;
}>`
  transition: max-height 0.5s ease-in-out;
  max-height: ${(props) =>
    props.isExpanded
      ? "100%"
      : `${props.maxItemsToShow * props.individualHeight}px`};
`;

export const Overlay = styled.div<{ width: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.7) 20%,
    rgba(255, 255, 255, 0.4) 45%,
    rgba(255, 255, 255, 0.15) 70%,
    rgba(255, 255, 255, 0.05) 85%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const SeeMoreButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f97c22;
  color: white;
  border-radius: 10px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  z-index: 10;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d9691a;
  }

  @media (max-width: 768px) {
    bottom: 8px;
    right: 8px;
  }
`;
