import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer } from "./Slider.style";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

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
    centerPadding: "60px",
    slidesToShow: howManyShow,
    swipeToSlide: true,
  };

  const projects = [
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
    },
    {
      imageSrc: "/burgerApp.webp",
      title: t("projects.burger_app.title"),
      description: t("projects.burger_app.description"),
      buttonNames: ["HTML", "CSS", "JavaScript", "React", "Vite", "Yarn"],
      buttonColors: [
        "#E44D26",
        "#1572B6",
        "#F7DF1E",
        "#61DAFB",
        "#646CFF",
        "#2C8EBB",
      ],
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
    },
    {
      imageSrc: "/darkLogin.webp",
      title: t("projects.login_dark.title"),
      description: t("projects.login_dark.description"),
      buttonNames: ["HTML", "CSS"],
      buttonColors: ["#E44D26", "#1572B6"],
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
    },
    {
      imageSrc: "/blackAndWhite.webp",
      title: t("projects.login_black_white.title"),
      description: t("projects.login_black_white.description"),
      buttonNames: ["HTML", "CSS", "JavaScript"],
      buttonColors: ["#E44D26", "#1572B6", "#F7DF1E"],
    },
    {
      imageSrc: "/bakery.webp",
      title: t("projects.landing_padaria.title"),
      description: t("projects.landing_padaria.description"),
      buttonNames: ["HTML", "CSS", "JavaScript"],
      buttonColors: ["#E44D26", "#1572B6", "#F7DF1E"],
    },
  ];

  return (
    <SliderContainer>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Card
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            buttonNames={project.buttonNames}
            buttonColors={project.buttonColors}
          />
        ))}
      </Slider>
    </SliderContainer>
  );
}

export default SwipeToSlide;
