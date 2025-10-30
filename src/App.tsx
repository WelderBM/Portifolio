import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
import { darkTheme, lightTheme } from "./theme";

import {
  Background,
  Content,
  Main,
  BackgroundGeometric,
  BackgroundBack,
} from "./styles";

import Header from "./components/Header/Header";
import Texts from "./components/Texts/Texts";
import ContactIcons from "./components/ContactIcons/ContactIcons";
import IconsSlider from "./components/IconsSlider/IconsSlider";
import About from "./components/About/About";
import ProjectsCads from "./components/ProjectsCads/ProjectsCads";
import WhatsAppPopup from "./components/WhatsAppPopup/WhatsAppPopup";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/ProjectsCads";

function App() {
  const [theme, setTheme] = useState("dark");
  const [selectedFlag, setSelectedFlag] = useState<"EN" | "BR">("EN");

  const themeToggler = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle theme={theme === "light" ? lightTheme : darkTheme} />
      <WhatsAppPopup />
      <Background id="inicio">
        <Content>
          <Header
            themeToggler={themeToggler}
            selectedFlag={selectedFlag}
            setSelectedFlag={setSelectedFlag}
          />
          <Main>
            <Texts />
            <ContactIcons theme={theme} />
          </Main>
          <IconsSlider />
        </Content>
      </Background>
      <BackgroundGeometric id="sobre">
        <About selectedFlag={selectedFlag} />
      </BackgroundGeometric>
      <BackgroundBack id="projetos">
        <ProjectsCads />
      </BackgroundBack>
      <BackgroundBack id="experiencia">
        <Experience />
      </BackgroundBack>
      <Footer id="contatos" theme={theme} />
    </ThemeProvider>
  );
}

export default App;
