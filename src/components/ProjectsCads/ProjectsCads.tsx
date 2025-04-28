import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import {
  Container,
  Title,
  Paragraph,
  CarouselWrapper,
  CarouselContent,
  CardWrapper,
  ArrowButton,
  FadeInRight,
  FadeInLeft,
  FadeOutRight,
  FadeOutLeft,
} from './ProjectsCads.styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ProjectsCads: React.FC = () => {
  const { t } = useTranslation();

  const projectData = [
    {
      imageSrc: "/instagramApp.webp",
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
      imageSrc: "/burgerApp.webp",
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
      imageSrc: "/forecast.webp",
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
      imageSrc: "/photografy.webp",
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
      imageSrc: "/darkLogin.webp",
      title: t('projects.login_dark.title'),
      description: t('projects.login_dark.description'),
      buttonNames: ["HTML", "CSS"],
      buttonColors: [
        "#E44D26",
        "#1572B6"
      ],
    },
    {
      imageSrc: "/skullPage.webp",
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
      imageSrc: "/blackAndWhite.webp",
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
      imageSrc: "/bakery.webp",
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

  const [projects, setProjects] = useState([...projectData]);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [fadeOut, setFadeOut] = useState(false);
  const totalCards = projects.length;
  const cardWidth = 340;

  const handleNext = () => {
    setFadeOut(true);
    setSlideDirection('right');
    setTimeout(() => {
      setProjects((prevProjects) => [
        ...prevProjects.slice(visibleProjects),
        ...prevProjects.slice(0, visibleProjects),
      ]);
      setFadeOut(false);
    }, 500);
  };

  const handlePrev = () => {
    setFadeOut(true);
    setSlideDirection('left');
    setTimeout(() => {
      setProjects((prevProjects) => [
        ...prevProjects.slice(-visibleProjects),
        ...prevProjects.slice(0, totalCards - visibleProjects),
      ]);
      setFadeOut(false);
    }, 500);
  };

  const updateVisibleProjects = () => {
    const width = window.innerWidth;
    const availableSpace = width - 200;
    const numVisibleCards = Math.floor(availableSpace / cardWidth);
    const maxVisibleCards = Math.min(numVisibleCards, projects.length);
    setVisibleProjects(maxVisibleCards > 0 ? maxVisibleCards : 1);
  };

  useEffect(() => {
    updateVisibleProjects();
    window.addEventListener('resize', updateVisibleProjects);
    return () => window.removeEventListener('resize', updateVisibleProjects);
  }, []);

  return (
    <Container>
      <Title>{t('projects.title')}</Title>
      <Paragraph>{t('projects.description')}</Paragraph>

      <CarouselWrapper>
        {visibleProjects < totalCards && (
          <ArrowButton position="left" onClick={handlePrev}>
            <FaChevronLeft />
          </ArrowButton>
        )}

        <CarouselContent>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <CardWrapper
              key={index}
              as={
                fadeOut
                  ? slideDirection === 'right'
                    ? FadeOutLeft
                    : FadeOutRight
                  : slideDirection === 'right'
                  ? FadeInRight
                  : FadeInLeft
              }
            >
              <Card
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
                buttonNames={project.buttonNames}
                buttonColors={project.buttonColors}
              />
            </CardWrapper>
          ))}
        </CarouselContent>

        {visibleProjects < totalCards && (
          <ArrowButton position="right" onClick={handleNext}>
            <FaChevronRight />
          </ArrowButton>
        )}
      </CarouselWrapper>
    </Container>
  );
};

export default ProjectsCads;
