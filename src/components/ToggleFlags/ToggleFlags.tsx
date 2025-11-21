import React, { useState } from "react";
import {
  DropdownContainer,
  CircleButton,
  Dropdown,
  DropdownItem,
} from "./ToggleFlags.styles";
import { useTranslation } from "react-i18next";
import "../../../i18n";

interface ToggleFlagsProps {
  selectedFlag: "EN" | "BR";
  setSelectedFlag: (flag: "EN" | "BR") => void;
}

const ToggleFlags: React.FC<ToggleFlagsProps> = ({
  selectedFlag,
  setSelectedFlag,
}) => {
  const { i18n } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleFlagChange(lng === "pt" ? "BR" : "EN");
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleFlagChange = (flag: "EN" | "BR") => {
    setSelectedFlag(flag);
    setDropdownOpen(false);
  };

  return (
    <DropdownContainer
      aria-label={`Mudar idioma para ${
        selectedFlag === "EN" ? "português" : "inglês"
      }`}
    >
      <CircleButton onClick={toggleDropdown}>
        {selectedFlag === "EN" ? (
          <img
            width="20"
            height="20"
            src="/euaFlag.webp"
            alt="EN"
            style={{ width: "20px" }}
            loading="lazy"
          />
        ) : (
          <img
            width="20"
            height="20"
            src="/brasilFlag.webp"
            alt="BR"
            style={{ width: "20px" }}
            loading="lazy"
          />
        )}
      </CircleButton>
      {isDropdownOpen && (
        <Dropdown>
          <DropdownItem onClick={() => changeLanguage("pt")}>
            <img
              width="20"
              height="20"
              src="/brasilFlag.webp"
              alt="BR"
              style={{ width: "20px", marginRight: "8px" }}
              loading="lazy"
            />{" "}
            PT
          </DropdownItem>
          <DropdownItem onClick={() => changeLanguage("en")}>
            <img
              width="20"
              height="20"
              src="/euaFlag.webp"
              alt="EN"
              style={{ width: "20px", marginRight: "8px" }}
              loading="lazy"
            />{" "}
            EN
          </DropdownItem>
        </Dropdown>
      )}
    </DropdownContainer>
  );
};

export default ToggleFlags;
