import { Row, FooterContainer } from './Footer.styles'; // Você pode criar o arquivo Footer.styles.js
import { darkTheme, lightTheme } from '../../theme';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

interface FooterProps {
  theme: string;
  id: string;
}

const Footer: React.FC<FooterProps> = ({ theme, id }) => {
  return (
    <FooterContainer id={id}>
      <Row>
        <IconContext.Provider value={{ className: 'contactIcon' }}>
          <a href="https://wa.me/5595991341586" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp size="30px" color={theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor} />
            Whatsapp
          </a>
          <a href="https://www.linkedin.com/in/welder-barroso-37b654207/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="30px" color={theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor} />
            Linkedin
          </a>
          <a href="https://github.com/WelderBM" target="_blank" rel="noopener noreferrer">
            <FaGithub size="30px" color={theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor} />
            Github
          </a>
        </IconContext.Provider>
      </Row>
      <p style={{ textAlign: 'center', color: theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor }}>
        &copy; {new Date().getFullYear()} Welder Barroso. Todos os direitos reservados.
      </p>
    </FooterContainer>
  );
};

export default Footer;
