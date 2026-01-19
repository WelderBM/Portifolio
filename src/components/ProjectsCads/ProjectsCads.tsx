import React, { useState } from "react";
import { BackgroundLayer, Container } from "./ProjectsCads.styles";
import { useTranslation } from "react-i18next";
import Slider from "../Slider/Slider";
import TitlesComponent from "../TitlesComponent/TitlesComponent";

const ProjectsCads: React.FC = () => {
  const { t } = useTranslation();
  const [backgroundImage, setBackgroundImage] = useState("");

  return (
    <Container>
      <BackgroundLayer $backgroundImage={backgroundImage} />
      <TitlesComponent
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      ></TitlesComponent>
      <Slider onSlideChange={setBackgroundImage} />
    </Container>
  );
};

export default ProjectsCads;
