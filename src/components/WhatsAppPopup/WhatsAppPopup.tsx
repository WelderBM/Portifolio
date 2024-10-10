import React from 'react';
import { WhatsAppPopupContainer, WhatsAppButton } from './WhatsAppPopup.styles';
import { IoLogoWhatsapp } from 'react-icons/io';

const WhatsAppPopup: React.FC = () => {
  const phoneNumber = "5595991341586";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <WhatsAppPopupContainer>
      <WhatsAppButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <IoLogoWhatsapp size={40} /> {/* Aumentei o tamanho do ícone para maior destaque */}
      </WhatsAppButton>
    </WhatsAppPopupContainer>
  );
};

export default WhatsAppPopup;
