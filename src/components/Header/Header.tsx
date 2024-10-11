import { useEffect, useState } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import DownloadCv from '../DownloadCv/DownloadCv';
import ToggleFlags from '../ToggleFlags/ToggleFlags';
import { Header, NameLogo, Nav, PlusIcon, HamburgerIcon } from './Header.styles';
import { useTranslation } from 'react-i18next';

interface HeaderComponentProps {
  themeToggler: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ themeToggler }) => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [additionalMenuOpen, setAdditionalMenuOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 810);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 50);
  };

  const handleResize = () => {
    const isNowDesktop = window.innerWidth > 810;
    setIsDesktop(isNowDesktop);

    if (isNowDesktop) {
      setMenuOpen(false);
      setAdditionalMenuOpen(false);
    }
  };

  // Atualize o estado inicial de `menuOpen` e `isDesktop`
  useEffect(() => {
    handleResize(); // Verifique o tamanho da tela assim que o componente é montado
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setAdditionalMenuOpen(false); // Fecha o menu adicional
  };

  const toggleAdditionalMenu = () => {
    setAdditionalMenuOpen(prev => !prev);
    setMenuOpen(false); // Fecha o menu principal
  };

  return (
    <>
      <div id="inicio"></div>
      <Header className={scrolled ? 'scrolled' : ''}>
        <NameLogo>
          <h2>WELDER</h2><span>&lt;BARROSO/&gt;</span>
        </NameLogo>
        
        {!isDesktop ? (
          <Nav>
              <HamburgerIcon onClick={toggleMenu} className={menuOpen ? 'open' : 'closed'}>
                <span></span>
                <span></span>
                <span></span>
              </HamburgerIcon>
              <PlusIcon onClick={toggleAdditionalMenu} className={additionalMenuOpen ? 'open' : 'closed'} >+</PlusIcon>

            <ul className={menuOpen ? 'open' : ''}>
              <li><a href="#inicio">{t('header.start')}</a></li>
              <li><a href="#sobre">{t('header.about')}</a></li>
              <li><a href="#projetos">{t('header.projects')}</a></li>
              <li><a href="#contatos">{t('header.contacts')}</a></li>
            </ul>
            <ul className={additionalMenuOpen ? 'open' : ''}>
              <li><DownloadCv href="/Profile.pdf">{t('header.download_cv')}</DownloadCv></li>
              <li><ToggleFlags /></li>
              <li><ThemeSwitcher onClick={themeToggler} /></li>
            </ul>
          </Nav>
        ) : (
          <Nav className='desktopShow'>
            <ul className={menuOpen ? 'open' : ''}>
              <li><a href="#inicio">{t('header.start')}</a></li>
              <li><a href="#sobre">{t('header.about')}</a></li>
              <li><a href="#projetos">{t('header.projects')}</a></li>
              <li><a href="#contatos">{t('header.contacts')}</a></li>
            </ul>
            <DownloadCv href="/Profile.pdf">{t('header.download_cv')}</DownloadCv>
            <ToggleFlags />
            <ThemeSwitcher onClick={themeToggler} />
          </Nav>
        )}
      </Header>
    </>
  );
};

export default HeaderComponent;
