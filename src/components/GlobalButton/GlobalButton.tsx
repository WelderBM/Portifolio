import React from "react";
import { GlobalButton } from "./GlobalButton.styles";

interface GlobalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const GlobalButtonComponent: React.FC<GlobalButtonProps> = ({
  children,
  onClick,
}) => {
  return <GlobalButton onClick={onClick}>{children}</GlobalButton>;
};

export default GlobalButtonComponent;
