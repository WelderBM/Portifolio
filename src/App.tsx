import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import { darkTheme, lightTheme } from './theme';

import { Background, Content, Main, BackgroundGeometric, BackgroundBack } from './styles';

import Header from './components/Header/Header';
import Texts from './components/Texts/Texts';
import ContactIcons from './components/ContactIcons/ContactIcons';
import IconsSlider from './components/IconsSlider/IconsSlider';
import About from './components/About/About';
import ProjectsCads from './components/ProjectsCads/ProjectsCads';
import WhatsAppPopup from './components/WhatsAppPopup/WhatsAppPopup';
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    return theme === "light" ? setTheme('dark') : setTheme('light');
  };

  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
      <WhatsAppPopup />
      <Background id="inicio">
        <Content>
          <Header themeToggler={themeToggler} />
          <Main>
            <Texts />
            <ContactIcons theme={theme} />
          </Main>
          <IconsSlider />
        </Content>
      </Background>
      <BackgroundGeometric
        id="sobre"
        ref={aboutRef}
      >
        <div style={{width: "100%", margin: "0", zIndex:"1"}} className={`animate-section ${aboutInView ? 'visible' : ''}`}><About/></div>
        
      </BackgroundGeometric>
      <BackgroundBack
        id="projetos"
        ref={projectsRef}
      >
        <div style={{width: "100%", margin: "0", zIndex:"1"}} className={`animate-section ${projectsInView ? 'visible' : ''}`}><ProjectsCads /></div>
        
      </BackgroundBack>
      <Footer id="contatos" theme={theme} />
    </ThemeProvider>
  );
}

export default App;
