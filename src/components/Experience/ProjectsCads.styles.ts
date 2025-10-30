import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-bottom: 120px;
  position: relative;
  z-index: 1;
`;

export const Header = styled.div`
  text-align: center;
  margin-top: 70px;
  padding: 60px 40px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 25px;
    margin-top: 50px;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.fontColor};
  font-size: 56px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 16px;
  letter-spacing: -1.5px;
  line-height: 1.2;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 36px;
    letter-spacing: -0.5px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  width: 75%;
  max-width: 900px;
  color: ${(props) => props.theme.fontColor};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.7;
  text-align: center;
  margin: 0 auto;
  letter-spacing: 0.3px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 95%;
    font-size: 16px;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ExperienceCard = styled.article`
  width: 90%;
  max-width: 1400px;
  background-color: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.fontColor}40;
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  backdrop-filter: blur(6px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.fontColor}80;
    box-shadow: 0 12px 24px ${(props) => props.theme.fontColor}15;
  }

  @media (max-width: 1024px) {
    width: 85%;
    padding: 35px;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
  justify-content: space-between;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 25px;

    > div {
      width: 100%;
    }
  }
`;

export const CardImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  flex-shrink: 0;
  transition: all 0.3s ease;
  filter: brightness(1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  &:hover {
    filter: brightness(1.1);
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1024px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

export const RoleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const RoleTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
  font-family: "Montserrat", sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const RoleSubtitle = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.neutralColor};
  font-style: italic;
  margin: 4px 0 0 0;
  letter-spacing: 0.2px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Period = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.fontColor};
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  margin: 0;
  letter-spacing: 0.2px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.fontColor};
  line-height: 1.7;
  margin: 0;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HighlightItem = styled.li`
  font-size: 16px;
  color: ${(props) => props.theme.fontColor};
  line-height: 1.6;
  border-left: 3px solid ${(props) => props.theme.fontColor}60;
  padding-left: 16px;
  transition: all 0.3s ease;

  &:hover {
    border-left-color: ${(props) => props.theme.fontColor};
    padding-left: 20px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const UsedTech = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
  margin: 10px 0 0 0;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;`;

interface TechTagProps {
  $bgColor: string;
  $textColor: string;
}

export const TechTag = styled.span<TechTagProps>`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: default;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

export const RoleDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${(props) => props.theme.fontColor}30 50%,
    transparent 100%
  );
  margin: 24px 0;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;