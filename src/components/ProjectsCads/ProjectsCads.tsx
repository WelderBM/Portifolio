import React from "react";
import { Container } from "./ProjectsCads.styles";
import { useTranslation } from "react-i18next";
import Slider from "../Slider/Slider";
import TitlesComponent from "../TitlesComponent/TitlesComponent";

const ProjectsCads: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <TitlesComponent
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      ></TitlesComponent>
      <Slider />
    </Container>
  );
};

export default ProjectsCads;
