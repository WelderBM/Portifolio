import React from "react";
import { TitlesContainer, Title, Subtitle } from "./TitlesComponent.styles";

const TitlesComponent: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <TitlesContainer
      data-aos="flip-up"
      data-aos-offset="150"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
    >
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </TitlesContainer>
  );
};

export default TitlesComponent;
