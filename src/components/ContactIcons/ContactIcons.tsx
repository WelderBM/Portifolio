import { Row, HorizontalLine } from './ContactIcons.styles'

import { darkTheme, lightTheme } from '../../theme'

import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactIcons = ({theme}) => {

    return (<>
            <Row>
              <HorizontalLine></HorizontalLine>
              <IconContext.Provider value={{className: "contactIcon" }}>
                <a href="https://wa.me/5595991341586" target="_blank" rel="noopener noreferrer">
                  <IoLogoWhatsapp size="30px" color={theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor} />
                </a>
                <a href="https://www.linkedin.com/in/welder-barroso-37b654207/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size="30px" color={theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor} />
                </a>
                <a href="https://github.com/WelderBM" target="_blank" rel="noopener noreferrer">
                  <FaGithub size="30px" color={theme === 'light' ? lightTheme.fontColor : darkTheme.fontColor} />
                </a>
              </IconContext.Provider>
              <HorizontalLine></HorizontalLine>
            </Row> 
        </>
)};

export default ContactIcons