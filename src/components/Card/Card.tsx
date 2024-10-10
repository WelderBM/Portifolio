import React, { useState } from 'react';
import { CardContainer, Image, ButtonContainer, Button, Title, Description, Overlay, EnlargedImage } from './Card.styles';

interface ProjectCardsProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonNames: string[];
  buttonColors: string[];
}

const Card: React.FC<ProjectCardsProps> = ({ imageSrc, title, description, buttonNames, buttonColors }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <>
    {isOpen && (
      <Overlay onClick={handleOverlayClick}>
        <EnlargedImage src={imageSrc} alt="Enlarged Project" />
      </Overlay>
    )}
    
    <CardContainer>
      <Image src={imageSrc} alt="Project" onClick={handleImageClick} style={{ cursor: 'pointer' }} />
      <ButtonContainer>
        {buttonNames.map((name, index) => (
          <Button key={index} color={buttonColors[index]}>
            {name}
          </Button>
        ))}
      </ButtonContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
    </>
  );
};

export default Card;
