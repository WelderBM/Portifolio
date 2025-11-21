import React from "react";
import {
  Container,
  ExperienceCard,
  CardContent,
  CardImage,
  RoleContainer,
  RoleTitle,
  RoleSubtitle,
  Period,
  Paragraph,
  UsedTech,
  TechList,
  TechTag,
  HighlightsList,
  HighlightItem,
  RoleDivider,
  LogoDiv,
} from "./Experience.styles";
import { useTranslation } from "react-i18next";
import TitlesComponent from "../TitlesComponent/TitlesComponent";

interface ExperienceRole {
  titleKey: string;
  subtitleKey: string;
  periodKey: string;
  descriptionKey: string;
  highlightsKey: string;
  techs: string[];
}

interface Experience {
  company: string;
  image: string;
  roles: ExperienceRole[];
  dataKey: "r2t" | "pigz";
}

const TECH_COLORS: Record<string, { bg: string; text: string }> = {
  React: { bg: "#61DAFB", text: "#000000" },
  "Next.js": { bg: "#000000", text: "#FFFFFF" },
  "React Native": { bg: "#61DAFB", text: "#000000" },
  JavaScript: { bg: "#F7DF1E", text: "#000000" },
  TypeScript: { bg: "#3178C6", text: "#FFFFFF" },
  "Styled Components": { bg: "#DB7093", text: "#FFFFFF" },
  TailwindCSS: { bg: "#06B6D4", text: "#FFFFFF" },
  "Ant Design": { bg: "#1890FF", text: "#FFFFFF" },
  Redux: { bg: "#764ABC", text: "#FFFFFF" },
  "Context API": { bg: "#61DAFB", text: "#000000" },
  "React Hooks": { bg: "#61DAFB", text: "#000000" },
  Storybook: { bg: "#FF4785", text: "#FFFFFF" },
  Git: { bg: "#F1502F", text: "#FFFFFF" },
  GitHub: { bg: "#181717", text: "#FFFFFF" },
  GitLab: { bg: "#FC6D26", text: "#FFFFFF" },
  Postman: { bg: "#FF6C37", text: "#FFFFFF" },
  Jira: { bg: "#0052CC", text: "#FFFFFF" },
  Figma: { bg: "#F24E1E", text: "#FFFFFF" },
  "Google Lighthouse": { bg: "#FFA500", text: "#000000" },
  HTML5: { bg: "#E34C26", text: "#FFFFFF" },
  CSS3: { bg: "#1572B6", text: "#FFFFFF" },
  Scrum: { bg: "#6B8E23", text: "#FFFFFF" },
  Agile: { bg: "#228B22", text: "#FFFFFF" },
  "Google Workspace": { bg: "#4285F4", text: "#FFFFFF" },
};

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences: Experience[] = [
    {
      company: "Pigz",
      image: "/pigz_logo.jpg",
      dataKey: "pigz",
      roles: [
        {
          titleKey: "experience.pigz.web.title",
          subtitleKey: "experience.pigz.web.subtitle",
          periodKey: "experience.pigz.web.period",
          descriptionKey: "experience.pigz.web.description",
          highlightsKey: "experience.pigz.web.highlights",
          techs: [
            "React",
            "Next.js",
            "TypeScript",
            "Redux",
            "Styled Components",
            "TailwindCSS",
            "Git",
            "GitHub",
            "Postman",
            "Jira",
            "Google Lighthouse",
            "Agile",
          ],
        },
        {
          titleKey: "experience.pigz.mobile.title",
          subtitleKey: "experience.pigz.mobile.subtitle",
          periodKey: "experience.pigz.mobile.period",
          descriptionKey: "experience.pigz.mobile.description",
          highlightsKey: "experience.pigz.mobile.highlights",
          techs: [
            "React Native",
            "TypeScript",
            "Redux",
            "Styled Components",
            "Git",
            "GitHub",
            "Postman",
            "Jira",
            "Agile",
          ],
        },
      ],
    },
    {
      company: "R2T",
      image: "/r2t-logo.webp",
      dataKey: "r2t",
      roles: [
        {
          titleKey: "experience.r2t.junior.title",
          subtitleKey: "experience.r2t.junior.subtitle",
          periodKey: "experience.r2t.junior.period",
          descriptionKey: "experience.r2t.junior.description",
          highlightsKey: "experience.r2t.junior.highlights",
          techs: [
            "React",
            "Next.js",
            "JavaScript",
            "Styled Components",
            "Context API",
            "Git",
            "GitHub",
            "Postman",
            "Google Lighthouse",
            "Scrum",
          ],
        },
        {
          titleKey: "experience.r2t.intern.title",
          subtitleKey: "experience.r2t.intern.subtitle",
          periodKey: "experience.r2t.intern.period",
          descriptionKey: "experience.r2t.intern.description",
          highlightsKey: "experience.r2t.intern.highlights",
          techs: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Git",
            "GitHub",
            "React",
            "Next.js",
            "Figma",
          ],
        },
      ],
    },
  ];

  const getTechColor = (tech: string) => {
    return TECH_COLORS[tech] || { bg: "#808080", text: "#FFFFFF" };
  };

  return (
    <Container>
      <TitlesComponent
        title={t("experience.section.title")}
        subtitle={t("experience.section.subtitle")}
      />
      {experiences.map((exp) => (
        <ExperienceCard key={exp.company}>
          <CardContent>
            <div>
              {exp.roles.map((role, roleIndex) => (
                <div key={`${exp.company}-${roleIndex}`}>
                  <RoleContainer>
                    <div>
                      <RoleTitle>{t(role.titleKey)}</RoleTitle>
                      <RoleSubtitle>{t(role.subtitleKey)}</RoleSubtitle>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Period>{t(role.periodKey)}</Period>
                    </div>
                  </RoleContainer>

                  <Paragraph>{t(role.descriptionKey)}</Paragraph>

                  <HighlightsList>
                    {Array.isArray(
                      t(role.highlightsKey, { returnObjects: true })
                    ) &&
                      (
                        t(role.highlightsKey, {
                          returnObjects: true,
                        }) as string[]
                      ).map((highlight, idx) => (
                        <HighlightItem key={idx}>• {highlight}</HighlightItem>
                      ))}
                  </HighlightsList>

                  <UsedTech>
                    {t("experience.section.title") ===
                    "Experiência Profissional"
                      ? "Tecnologias utilizadas:"
                      : "Technologies used:"}
                  </UsedTech>
                  <TechList>
                    {role.techs.map((tech) => {
                      const colors = getTechColor(tech);
                      return (
                        <TechTag
                          key={tech}
                          $bgColor={colors.bg}
                          $textColor={colors.text}
                        >
                          {tech}
                        </TechTag>
                      );
                    })}
                  </TechList>

                  {roleIndex < exp.roles.length - 1 && <RoleDivider />}
                </div>
              ))}
            </div>
            <LogoDiv>
              <CardImage src={exp.image} alt={`${exp.company} logo`} />
              <RoleTitle>{exp.company}</RoleTitle>
            </LogoDiv>
          </CardContent>
        </ExperienceCard>
      ))}
    </Container>
  );
};

export default Experience;
