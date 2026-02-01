import {
  About,
  Content,
  Title,
  Description,
  SecondTitle,
  Button,
} from "./About.styles";
import ButtonLink from "../DownloadCv/DownloadCv";
import { useTranslation } from "react-i18next";

interface ToggleFlagsProps {
  selectedFlag: "EN" | "BR";
}

const AboutComponent = ({ selectedFlag }: ToggleFlagsProps) => {
  const { t } = useTranslation();

  const languages = {
    buttonNames: ["JavaScript", "Typescript", "React", "Next.js"],
    buttonColors: ["#F7DF1E", "#3178C6", "#61DAFB", "#000000"],
    fontColors: ["#000000", "#FFFFFF", "#000000", "#FFFFFF"],
  };

  return (
    <About>
      <div
        className="badge-base LI-profile-badge"
        data-locale="pt_BR"
        data-size="large"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="welder-barroso-37b654207"
        data-version="v1"
      ></div>
      <Content>
        <Title>{t("about.title")}</Title>
        <Description>{t("about.description_1")}</Description>
        <SecondTitle>{t("about.description_2")}</SecondTitle>
        <div>
          {languages.buttonNames.map((name, index) => (
            <Button
              key={index}
              $backgroundCol={languages.buttonColors[index]}
              $fontCol={languages.fontColors[index]}
            >
              {name}
            </Button>
          ))}
        </div>
        <ButtonLink
          href={selectedFlag === "BR" ? "/ProfilePt.pdf" : "/ProfileEng.pdf"}
        >
          {t("about.download_cv")}
        </ButtonLink>
      </Content>
    </About>
  );
};

export default AboutComponent;
