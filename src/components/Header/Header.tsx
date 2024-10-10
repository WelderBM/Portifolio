import { useEffect, useState } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import DownloadCv from '../DownloadCv/DownloadCv';
import ToggleFlags from '../ToggleFlags/ToggleFlags';
import { Header, Nav } from './Header.styles';
import { useTranslation } from 'react-i18next';

// Definindo a interface para o componente
interface HeaderComponentProps {
  themeToggler: () => void; // Definindo o tipo da função themeToggler
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ themeToggler }) => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState<boolean>(false); // Tipagem explícita para o estado scrolled

  // Função para lidar com o scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // useEffect para adicionar/remover o evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id="inicio"></div>
      <Header className={scrolled ? 'scrolled' : ''}> {/* Adiciona a classe 'scrolled' */}
        <h2>WELDER<span>&lt;BARROSO/&gt;</span></h2>
        <Nav>
          <ul>
            <li><a href="#inicio">{t('header.start')}</a></li>
            <li><a href="#sobre">{t('header.about')}</a></li>
            <li><a href="#projetos">{t('header.projects')}</a></li>
            <li><a href="#contatos">{t('header.contacts')}</a></li>
            <li>|</li>
            <DownloadCv href="/Profile.pdf">{t('header.download_cv')}</DownloadCv>
            <ToggleFlags />
            <ThemeSwitcher onClick={themeToggler} />
          </ul>
        </Nav>
      </Header>
    </>
  );
};

export default HeaderComponent;
