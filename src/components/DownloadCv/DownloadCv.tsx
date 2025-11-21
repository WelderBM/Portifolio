import React from "react";
import { DownloadCv } from "./DownloadCv.styles";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children }) => {
  return (
    <DownloadCv
      href={href}
      download="Welder_Barroso_CV"
      className="animate__animated animate__tada"
    >
      {children}
    </DownloadCv>
  );
};

export default ButtonLink;
