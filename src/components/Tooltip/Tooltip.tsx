import React, { useEffect, useRef } from 'react';
import { TooltipContainer } from './Tooltip.styles';

interface TooltipProps {
  text: string;
  targetRef: React.RefObject<HTMLDivElement>;
}

const Tooltip: React.FC<TooltipProps> = ({ text, targetRef }) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState<{ left: number; top: number }>({ left: 0, top: 0 });

  useEffect(() => {
    if (targetRef.current && tooltipRef.current) {
      const { left, top, height } = targetRef.current.getBoundingClientRect();
      const tooltipWidth = tooltipRef.current.offsetWidth; // Obtém a largura do tooltip
      const tooltipLeft = left + (targetRef.current.offsetWidth / 2) - (tooltipWidth / 2); // Centraliza o tooltip

      // Certifique-se de que o tooltip não saia da tela
      const adjustedLeft = Math.max(0, tooltipLeft); // Impede que o tooltip saia da tela pela esquerda
      setPosition({ left: adjustedLeft, top: top + height + 5 }); // Adiciona um pequeno espaçamento
    }
  }, [targetRef]);

  return (
    <TooltipContainer ref={tooltipRef} left={position.left} top={position.top}>
      {text}
    </TooltipContainer>
  );
};

export default Tooltip;
