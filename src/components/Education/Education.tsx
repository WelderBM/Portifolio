import React from "react";
import {
  Container,
  Header,
  Title,
  Subtitle,
  EducationCard,
  CardContent,
  CardImage,
  EducationContainer,
  EducationTitle,
  EducationSubtitle,
  Period,
  Description,
  EducationLevel,
  CertificationsList,
  CertificationItem,
  EducationDivider,
} from "./Education.styles";
import { useTranslation } from "react-i18next";

interface EducationItem {
  titleKey: string;
  subtitleKey: string;
  periodKey: string;
  descriptionKey: string;
  certificationsKey: string;
  institution: string;
  dataKey: "ifrr" | "cubos" | "senai" | "senac" | "devclub";
}

interface Education {
  institution: string;
  image: string;
  items: EducationItem[];
}

const Education: React.FC = () => {
  const { t } = useTranslation();

  const educations: Education[] = [
    {
      institution: "Instituto Federal de Roraima",
      image: "/ifrr_logo.jpg",
      items: [
        {
          titleKey: "education.ifrr.technical.title",
          subtitleKey: "education.ifrr.technical.subtitle",
          periodKey: "education.ifrr.technical.period",
          descriptionKey: "education.ifrr.technical.description",
          certificationsKey: "education.ifrr.technical.certifications",
          institution: "IFRR",
          dataKey: "ifrr",
        },
      ],
    },
    {
      institution: "DevClub",
      image: "/devclub_logo.jpg",
      items: [
        {
          titleKey: "education.devclub.fullstack.title",
          subtitleKey: "education.devclub.fullstack.subtitle",
          periodKey: "education.devclub.fullstack.period",
          descriptionKey: "education.devclub.fullstack.description",
          certificationsKey: "education.devclub.fullstack.certifications",
          institution: "DevClub",
          dataKey: "devclub",
        },
      ],
    },
    {
      institution: "SENAI",
      image: "/senai_logo.jpg",
      items: [
        {
          titleKey: "education.senai.frontend.title",
          subtitleKey: "education.senai.frontend.subtitle",
          periodKey: "education.senai.frontend.period",
          descriptionKey: "education.senai.frontend.description",
          certificationsKey: "education.senai.frontend.certifications",
          institution: "SENAI",
          dataKey: "senai",
        },
      ],
    },
    {
      institution: "Cubos Academy",
      image: "/cubos_logo.png",
      items: [
        {
          titleKey: "education.cubos.backend.title",
          subtitleKey: "education.cubos.backend.subtitle",
          periodKey: "education.cubos.backend.period",
          descriptionKey: "education.cubos.backend.description",
          certificationsKey: "education.cubos.backend.certifications",
          institution: "Cubos",
          dataKey: "cubos",
        },
      ],
    },
    {
      institution: "SENAC",
      image: "/senac_logo.png",
      items: [
        {
          titleKey: "education.senac.english.title",
          subtitleKey: "education.senac.english.subtitle",
          periodKey: "education.senac.english.period",
          descriptionKey: "education.senac.english.description",
          certificationsKey: "education.senac.english.certifications",
          institution: "SENAC",
          dataKey: "senac",
        },
      ],
    },
  ];

  return (
    <Container>
      <Header>
        <Title>{t("education.section.title")}</Title>
        <Subtitle>{t("education.section.subtitle")}</Subtitle>
      </Header>

      {educations.map((edu) => (
        <EducationCard key={edu.institution}>
          <CardContent>
            <div>
              {edu.items.map((item, itemIndex) => (
                <div key={`${edu.institution}-${itemIndex}`}>
                  <EducationContainer>
                    <div>
                      <EducationTitle>{t(item.titleKey)}</EducationTitle>
                      <EducationSubtitle>
                        {t(item.subtitleKey)}
                      </EducationSubtitle>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Period>{t(item.periodKey)}</Period>
                    </div>
                  </EducationContainer>

                  <Description>{t(item.descriptionKey)}</Description>

                  <CertificationsList>
                    {Array.isArray(
                      t(item.certificationsKey, { returnObjects: true })
                    ) &&
                      (
                        t(item.certificationsKey, {
                          returnObjects: true,
                        }) as string[]
                      ).map((certification, idx) => (
                        <CertificationItem key={idx}>
                          ✓ {certification}
                        </CertificationItem>
                      ))}
                  </CertificationsList>

                  {itemIndex < edu.items.length - 1 && <EducationDivider />}
                </div>
              ))}
            </div>
            <div style={{ flex: 0 }}>
              <CardImage src={edu.image} alt={`${edu.institution} logo`} />
              <EducationLevel>{edu.institution}</EducationLevel>
            </div>
          </CardContent>
        </EducationCard>
      ))}
    </Container>
  );
};

export default Education;
