import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer } from "./Slider.style";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { ModalConfirm } from "../ModalConfirm/ModalConfirm";

function SwipeToSlide() {
  const { t } = useTranslation();

  const howManyShowDefault = () => {
    const cardWidth = 400;
    const containerWidth = window.innerWidth * 0.95;
    const possibleCards = Math.floor(containerWidth / cardWidth);
    return possibleCards;
  };

  const [howManyShow, setHowManyShow] = useState(() => {
    if (typeof window !== "undefined") {
      return howManyShowDefault();
    }
    return 3;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setHowManyShow(howManyShowDefault());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "40px",
    slidesToShow: howManyShow,
    swipeToSlide: true,
  };

  const projects = [
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

  return (
    <SliderContainer
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
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
