import React, { useEffect, useState } from "react";
import {
  WhatsAppPopupContainer,
  WhatsAppButton,
  ScrollUpButton,
} from "./WhatsAppPopup.styles";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

const WhatsAppPopup: React.FC = () => {
  const phoneNumber = "5595991341586";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Armazena a última posição de rolagem

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Se o usuário voltar ao topo, esconde o botão
    if (scrollY === 0) {
      setShowScrollButton(false);
    } else {
      setShowScrollButton(true); // Mostra o botão ao rolar para baixo
    }

    setLastScrollY(scrollY); // Atualiza a última posição de rolagem
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <WhatsAppPopupContainer className="animate__animated animate__shakeX">
      <WhatsAppButton
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoWhatsapp size={40} />{" "}
        {/* Aumentei o tamanho do ícone para maior destaque */}
      </WhatsAppButton>
      <ScrollUpButton
        className={showScrollButton ? "show" : ""}
        onClick={scrollToTop}
      >
        <a href="#inicio">
          <FaArrowUp size={20} color="white" />
        </a>
      </ScrollUpButton>
    </WhatsAppPopupContainer>
  );
};

export default WhatsAppPopup;
