import React from "react";
import { TitlesContainer, Title, Subtitle } from "./TitlesComponent.styles";

const TitlesComponent: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <TitlesContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </TitlesContainer>
  );
};

export default TitlesComponent;
