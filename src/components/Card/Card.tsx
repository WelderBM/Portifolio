import React from "react";
import {
  CardContainer,
  Image,
  ButtonContainer,
  Button,
  Title,
  Description,
  LinkBox,
} from "./Card.styles";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { darkTheme, lightTheme } from "../../theme";

interface ProjectCardsProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonNames: string[];
  buttonColors: string[];
  theme: string;
  onClick?: () => void;
}

const Card: React.FC<ProjectCardsProps> = ({
  imageSrc,
  title,
  description,
  buttonNames,
  buttonColors,
  theme,
  onClick,
}) => {
  return (
    <IconContext.Provider value={{ className: "contactIcon" }}>
      <CardContainer onClick={onClick}>
        <Image
          src={imageSrc}
          alt="Project"
          style={{ cursor: "pointer" }}
          loading="lazy"
        />
        <ButtonContainer>
          {buttonNames.map((name, index) => (
            <Button key={index} color={buttonColors[index]}>
              {name}
            </Button>
          ))}
        </ButtonContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <LinkBox className="link">
          <FaExternalLinkAlt
            color={
              theme === "light" ? lightTheme.fontColor : darkTheme.fontColor
            }
          ></FaExternalLinkAlt>
        </LinkBox>
      </CardContainer>
    </IconContext.Provider>
  );
};

export default Card;
