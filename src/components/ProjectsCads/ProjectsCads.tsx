import React from 'react';
import Card from '../Card/Card';
import { Container, Title, Paragraph } from './ProjectsCads.styles';
import { useTranslation } from 'react-i18next';

const ProjectsCads: React.FC = () => {
  const { t } = useTranslation();

  const projectData = [
    {
      imageSrc: "/public/instagramApp.png",
      title: t('projects.instagram_app.title'),
      description: t('projects.instagram_app.description'),
      buttonNames: ["HTML", "CSS", "JavaScript", "React", "Vite", "Yarn"],
      buttonColors: [
        "#E44D26",
        "#1572B6",
        "#F7DF1E",
        "#61DAFB",
        "#646CFF",
        "#2C8EBB"
      ],
    },
    {
      imageSrc: "/public/burgerApp.png",
      title: t('projects.burger_app.title'),
      description: t('projects.burger_app.description'),
      buttonNames: ["HTML", "CSS", "JavaScript", "React", "Vite", "Yarn"],
      buttonColors: [
        "#E44D26",
        "#1572B6",
        "#F7DF1E",
        "#61DAFB",
        "#646CFF",
        "#2C8EBB"
      ],
    },
    {
      imageSrc: "/public/forecast.png",
      title: t('projects.weather_forecast.title'),
      description: t('projects.weather_forecast.description'),
      buttonNames: ["HTML", "CSS", "JavaScript", "React", "Vite", "Yarn"],
      buttonColors: [
        "#E44D26",
        "#1572B6",
        "#F7DF1E",
        "#61DAFB",
        "#646CFF",
        "#2C8EBB"
      ],
    },
    {
      imageSrc: "/public/photografy.png",
      title: t('projects.login_fotografia.title'),
      description: t('projects.login_fotografia.description'),
      buttonNames: ["HTML", "CSS", "JavaScript", "React", "Vite", "Yarn"],
      buttonColors: [
        "#E44D26",
        "#1572B6",
        "#F7DF1E",
        "#61DAFB",
        "#646CFF",
        "#2C8EBB"
      ],
    },
    {
      imageSrc: "/public/darkLogin.png",
      title: t('projects.login_dark.title'),
      description: t('projects.login_dark.description'),
      buttonNames: ["HTML", "CSS"],
      buttonColors: [
        "#E44D26",
        "#1572B6"
      ],
    },
    {
      imageSrc: "/public/skullPage.png",
      title: t('projects.landing_halloween.title'),
      description: t('projects.landing_halloween.description'),
      buttonNames: ["HTML", "CSS", "JavaScript", "React", "Vite", "Yarn"],
      buttonColors: [
        "#E44D26",
        "#1572B6",
        "#F7DF1E",
        "#61DAFB",
        "#646CFF",
        "#2C8EBB"
      ],
    },
    {
      imageSrc: "/public/blackAndWhite.png",
      title: t('projects.login_black_white.title'),
      description: t('projects.login_black_white.description'),
      buttonNames: ["HTML", "CSS", "JavaScript"],
      buttonColors: [
        "#E44D26",
        "#1572B6",
        "#F7DF1E"
      ],
    },
    {
      imageSrc: "/public/bakery.png",
      title: t('projects.landing_padaria.title'),
      description: t('projects.landing_padaria.description'),
      buttonNames: ["HTML", "CSS", "JavaScript"],
      buttonColors: [
        "#E44D26",
        "#1572B6",
        "#F7DF1E"
      ],
    },
  ];

  return (
    <Container>
      <Title>{t('projects.title')}</Title>
      <Paragraph>{t('projects.description')}</Paragraph>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {projectData.map((project, index) => (
          <Card 
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            buttonNames={project.buttonNames}
            buttonColors={project.buttonColors}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProjectsCads;
