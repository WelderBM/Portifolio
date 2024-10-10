import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { SwitchContainer, SunIcon, MoonIcon } from './ThemeSwitcher.styles';
import { IconContext } from 'react-icons';

interface ThemeSwitcherProps {
  onClick: (theme: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onClick }) => {
  const [theme, setTheme] = useState('light');

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    onClick(newTheme); // Chama a função passada para alternar o tema
  };

  return (
    <IconContext.Provider value={{ size: '20px' }}>
      <SwitchContainer onClick={handleToggle} theme={theme}>
        {theme === 'light' && (
          <SunIcon>
            <FaSun />
          </SunIcon>
        )}
        {theme === 'dark' && (
          <MoonIcon>
            <FaMoon />
          </MoonIcon>
        )}
      </SwitchContainer>
    </IconContext.Provider>
  );
};

export default ThemeSwitcher;
