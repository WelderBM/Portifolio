import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column; /* Muda para coluna em telas menores */
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundColor};

  @media (min-width: 768px) {
    flex-direction: row; /* Muda para linha em telas maiores */
    gap: 40px;
  }
`;

const colors = {
  whatsapp: "#25D366",
  linkedin: "#0077B5",
  github: "#181717",
};

// Componente Row com efeitos de hover
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  gap: 25px;

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Permite que os ícones se movam para a próxima linha em telas pequenas */
    justify-content: center;
  }

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
    font-weight: bold;
    transition: color 0.3s ease;
    padding: 5px;
    border-radius: 10px;

    &:nth-child(1):hover {
      color: ${colors.whatsapp};
    }

    &:nth-child(2):hover {
      color: ${colors.linkedin};
    }

    &:hover {
      scale: 1.1;
    }

    &:nth-child(3):hover {
      color: white;
    }

    svg {
      transition: color 0.3s;
    }

    &:nth-child(1):hover svg {
      color: ${colors.whatsapp};
    }

    &:nth-child(2):hover svg {
      color: ${colors.linkedin};
    }

    &:nth-child(3):hover svg {
      color: white;
    }
  }
`;
