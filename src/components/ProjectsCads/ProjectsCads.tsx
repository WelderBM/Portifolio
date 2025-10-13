import React from "react";
import {
  Container,
  Title,
  Paragraph,
} from "./ProjectsCads.styles";
import { useTranslation } from "react-i18next";
import Slider from "../Slider/Slider";

const ProjectsCads: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("projects.title")}</Title>
      <Paragraph>{t("projects.description")}</Paragraph>
      <Slider/>
    </Container>
  )
};

export default ProjectsCads;
