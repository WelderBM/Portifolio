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
} from './ProjectsCads.styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ProjectsCads: React.FC = () => {
  const { t } = useTranslation();
  const projectData = [
    {
      imageSrc: "/instagramApp.png",
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
      imageSrc: "/burgerApp.png",
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
      imageSrc: "/forecast.png",
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
      imageSrc: "/photografy.png",
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
      imageSrc: "/darkLogin.png",
      title: t('projects.login_dark.title'),
      description: t('projects.login_dark.description'),
      buttonNames: ["HTML", "CSS"],
      buttonColors: [
        "#E44D26",
        "#1572B6"
      ],
    },
    {
      imageSrc: "/skullPage.png",
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
      imageSrc: "/blackAndWhite.png",
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
      imageSrc: "/bakery.png",
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
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState(3); // Estado para controlar o número de projetos visíveis

  const totalCards = projects.length;

  const handleNext = () => {
    setProjects((prevProjects) => [
      ...prevProjects.slice(2),
      prevProjects[0],
      prevProjects[1],
    ]);
  };

  const handlePrev = () => {
    setProjects((prevProjects) => [
      prevProjects[totalCards - 2],
      prevProjects[totalCards - 1],
      ...prevProjects.slice(0, totalCards - 2),
    ]);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoSliding) {
      interval = setInterval(handleNext, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoSliding]);

  const handleMouseEnter = () => {
    setIsAutoSliding(false);
  };

  const handleMouseLeave = () => {
    setIsAutoSliding(true);
  };

  const updateVisibleProjects = () => {
    const width = window.innerWidth;
    if (width > 1200) {
      setVisibleProjects(3);
    } else if (width > 768) {
      setVisibleProjects(2);
    } else {
      setVisibleProjects(1);
    }
  };

  useEffect(() => {
    updateVisibleProjects(); // Chama a função no primeiro render
    window.addEventListener('resize', updateVisibleProjects); // Adiciona o listener de resize

    return () => {
      window.removeEventListener('resize', updateVisibleProjects); // Limpa o listener ao desmontar
    };
  }, []);

  return (
    <Container>
      <Title>{t('projects.title')}</Title>
      <Paragraph>{t('projects.description')}</Paragraph>

      <CarouselWrapper>
        <ArrowButton position="left" onClick={handlePrev}>
          <FaChevronLeft />
        </ArrowButton>
        <CarouselContent>
          {projects.slice(0, visibleProjects).map((project, index) => ( // Usa o número de projetos visíveis
            <CardWrapper key={index}>
              <Card
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
                buttonNames={project.buttonNames}
                buttonColors={project.buttonColors}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </CardWrapper>
          ))}
        </CarouselContent>
        <ArrowButton position="right" onClick={handleNext}>
          <FaChevronRight />
        </ArrowButton>
      </CarouselWrapper>
    </Container>
  );
};

export default ProjectsCads;
