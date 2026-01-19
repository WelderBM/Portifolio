import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer } from "./Slider.style";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import Card from "../Card/Card";
import { ModalConfirm } from "../ModalConfirm/ModalConfirm";

interface SliderProps {
  onSlideChange?: (image: string) => void;
}

function SwipeToSlide({ onSlideChange }: SliderProps) {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      imageSrc: "/mix-webapp-preview.png",
      title: t("projects.mix_webapp.title"),
      description: t("projects.mix_webapp.description"),
      buttonNames: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      buttonColors: ["#000000", "#3178C6", "#06B6D4", "#FFCA28"],
      linkDeploy: "https://www.mixnovidades.com/",
    },
    {
      imageSrc: "/portal-descomplicado-preview.png",
      title: t("projects.portal_descomplicado.title"),
      description: t("projects.portal_descomplicado.description"),
      buttonNames: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      buttonColors: ["#000000", "#3178C6", "#06B6D4", "#3ECF8E"],
      linkDeploy: "https://portal-descomplicado.vercel.app/",
    },
    {
      imageSrc: "/rpg-cousins-preview.png",
      title: t("projects.rpg_cousins.title"),
      description: t("projects.rpg_cousins.description"),
      buttonNames: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      buttonColors: ["#000000", "#3178C6", "#06B6D4", "#FFCA28"],
      linkDeploy: "https://rpg-cousins.vercel.app/",
    },
    {
      imageSrc: "/barbearia-background.png",
      title: t("projects.barbearia.title"),
      description: t("projects.barbearia.description"),
      buttonNames: ["HTML", "CSS", "JavaScript", "firebase"],
      buttonColors: ["#E44D26", "#1572B6", "#F7DF1E", "#FF9100"],
      linkDeploy: "https://jsskullbarber.netlify.app/",
    },
    {
      imageSrc: "/senaigame.png",
      title: t("projects.senaigame.title"),
      description: t("projects.senaigame.description"),
      buttonNames: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      buttonColors: ["#E44D26", "#1572B6", "#F7DF1E", "#0d6efd"],
      linkDeploy: "https://senaigameactivity.netlify.app/",
    },
    {
      imageSrc: "/instagramApp.webp",
      title: t("projects.instagram_app.title"),
      description: t("projects.instagram_app.description"),
      buttonNames: ["HTML", "CSS", "JavaScript", "React", "Vite", "Yarn"],
      buttonColors: [
        "#E44D26",
        "#1572B6",
        "#F7DF1E",
        "#61DAFB",
        "#646CFF",
        "#2C8EBB",
      ],
      linkDeploy: "https://ubiquitous-tapioca-4da5cb.netlify.app/",
    },
    {
      imageSrc: "/burgerApp.webp",
      title: t("projects.burger_app.title"),
      description: t("projects.burger_app.description"),
      buttonNames: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
      buttonColors: ["#E44D26", "#1572B6", "#F7DF1E", "#61DAFB", "#3C873A"],
      linkDeploy: "https://burgerapp-welder.netlify.app/",
    },
    {
      imageSrc: "/forecast.webp",
      title: t("projects.weather_forecast.title"),
      description: t("projects.weather_forecast.description"),
      buttonNames: ["HTML", "CSS", "JavaScript", "React", "Vite", "Yarn"],
      buttonColors: [
        "#E44D26",
        "#1572B6",
        "#F7DF1E",
        "#61DAFB",
        "#646CFF",
        "#2C8EBB",
      ],
      linkDeploy: "https://weatherprev.netlify.app/",
    },
    {
      imageSrc: "/photografy.webp",
      title: t("projects.login_fotografia.title"),
      description: t("projects.login_fotografia.description"),
      buttonNames: ["HTML", "CSS", "JavaScript", "React", "Vite", "Yarn"],
      buttonColors: [
        "#E44D26",
        "#1572B6",
        "#F7DF1E",
        "#61DAFB",
        "#646CFF",
        "#2C8EBB",
      ],
      linkDeploy: "https://vigorous-nobel-529923.netlify.app/",
    },
    {
      imageSrc: "/darkLogin.webp",
      title: t("projects.login_dark.title"),
      description: t("projects.login_dark.description"),
      buttonNames: ["HTML", "CSS"],
      buttonColors: ["#E44D26", "#1572B6"],
      linkDeploy: "https://iridescent-churros-46f30b.netlify.app/",
    },
    {
      imageSrc: "/skullPage.webp",
      title: t("projects.landing_halloween.title"),
      description: t("projects.landing_halloween.description"),
      buttonNames: ["HTML", "CSS", "JavaScript", "React", "Vite", "Yarn"],
      buttonColors: [
        "#E44D26",
        "#1572B6",
        "#F7DF1E",
        "#61DAFB",
        "#646CFF",
        "#2C8EBB",
      ],
      linkDeploy: "https://beautiful-medovik-149e7d.netlify.app/",
    },
    {
      imageSrc: "/blackAndWhite.webp",
      title: t("projects.login_black_white.title"),
      description: t("projects.login_black_white.description"),
      buttonNames: ["HTML", "CSS", "JavaScript"],
      buttonColors: ["#E44D26", "#1572B6", "#F7DF1E"],
      linkDeploy: "https://iridescent-churros-46f30b.netlify.app/",
    },
    {
      imageSrc: "/bakery.webp",
      title: t("projects.landing_padaria.title"),
      description: t("projects.landing_padaria.description"),
      buttonNames: ["HTML", "CSS", "JavaScript"],
      buttonColors: ["#E44D26", "#1572B6", "#F7DF1E"],
      linkDeploy: "https://welderbm.github.io/landingPage-bakery/",
    },
  ];

  useEffect(() => {
    if (onSlideChange && projects.length > 0) {
      let slideOffset = 0;
      if (window.innerWidth > 600) {
        slideOffset = 2; // Middle of 5 is index 2
      }
      const initialIndex = (0 + slideOffset) % projects.length;
      onSlideChange(projects[initialIndex].imageSrc);
    }
  }, [onSlideChange]);

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    swipeToSlide: true,
    speed: 800,
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
    variableWidth: true,
    beforeChange: (current: number, next: number) => {
      if (onSlideChange) {
        let slideOffset = 0;
        if (window.innerWidth > 600) {
          slideOffset = 2;
        }
        const index = (next + slideOffset) % projects.length;
        const project = projects[index];
        if (project) {
          onSlideChange(project.imageSrc);
        }
      }
    },
    afterChange: () => {
      isDragging.current = false;
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  const mouseDownX = useRef(0);
  const mouseDownY = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDownCapture = (e: React.MouseEvent) => {
    isDragging.current = false;
    mouseDownX.current = e.clientX;
    mouseDownY.current = e.clientY;
  };

  const handleMouseMoveCapture = (e: React.MouseEvent) => {
    if (isDragging.current) return;
    if (
      Math.abs(e.clientX - mouseDownX.current) > 6 ||
      Math.abs(e.clientY - mouseDownY.current) > 6
    ) {
      isDragging.current = true;
    }
  };

  const handleTouchStartCapture = (e: React.TouchEvent) => {
    isDragging.current = false;
    mouseDownX.current = e.touches[0].clientX;
    mouseDownY.current = e.touches[0].clientY;
  };

  const handleTouchMoveCapture = (e: React.TouchEvent) => {
    if (isDragging.current) return;
    if (
      Math.abs(e.touches[0].clientX - mouseDownX.current) > 6 ||
      Math.abs(e.touches[0].clientY - mouseDownY.current) > 6
    ) {
      isDragging.current = true;
    }
  };

  return (
    <SliderContainer
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
      data-aos-once="true"
      onMouseDownCapture={handleMouseDownCapture}
      onMouseMoveCapture={handleMouseMoveCapture}
      onTouchStartCapture={handleTouchStartCapture}
      onTouchMoveCapture={handleTouchMoveCapture}
    >
      <ModalConfirm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          if (selectedProject) {
            window.open(selectedProject.linkDeploy, "_blank");
          }
          setIsModalOpen(false);
        }}
        projectName={selectedProject?.title || ""}
      />
      {/* @ts-expect-error */}
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Card
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            buttonNames={project.buttonNames}
            buttonColors={project.buttonColors}
            theme={""}
            onClick={() => {
              if (isDragging.current) {
                return;
              }
              setSelectedProject(project);
              setIsModalOpen(true);
            }}
          />
        ))}
      </Slider>
    </SliderContainer>
  );
}

export default SwipeToSlide;
