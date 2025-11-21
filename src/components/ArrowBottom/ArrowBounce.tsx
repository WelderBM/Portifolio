import React from "react";
import "./ArrowBounce.css";

interface ArrowBounceProps {
  goToSection: string;
}

export const ArrowBounce: React.FC<ArrowBounceProps> = ({ goToSection }) => {
  const handleClick = () => {
    const el = document.getElementById(goToSection);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="arrow-container" onClick={handleClick}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="arrow-svg"
      >
        <polyline points="6 8 12 14 18 8" />
        <polyline points="6 12 12 18 18 12" />
        <polyline points="6 16 12 22 18 16" />
      </svg>
    </div>
  );
};
