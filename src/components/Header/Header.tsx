import { useEffect, useState } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import DownloadCv from '../DownloadCv/DownloadCv';
import ToggleFlags from '../ToggleFlags/ToggleFlags';
import { Header, Nav } from './Header.styles';
import { useTranslation } from 'react-i18next';

const HeaderComponent = ({ themeToggler }) => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) { // Quando o scroll passar 50px
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id='inicio'></div>
      <Header className={scrolled ? 'scrolled' : ''}> {/* Adiciona a classe 'scrolled' */}
        <h2>WELDER<span>&lt;BARROSO/&gt;</span></h2>
        <Nav>
          <ul>
            <li><a href="#inicio">{t('header.start')}</a></li>
            <li><a href="#sobre">{t('header.about')}</a></li>
            <li><a href="#projetos">{t('header.projects')}</a></li>
            <li><a href="#contatos">{t('header.contacts')}</a></li>
            <li>|</li>
            <DownloadCv href="/src/assets/Profile.pdf">{t('header.download_cv')}</DownloadCv>
            <ToggleFlags />
            <ThemeSwitcher onClick={themeToggler} />
          </ul>
        </Nav>
      </Header>
    </>
  );
};

export default HeaderComponent;
