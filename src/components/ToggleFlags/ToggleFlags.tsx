import React, { useState } from 'react';
import { DropdownContainer, CircleButton, Dropdown, DropdownItem } from './ToggleFlags.styles';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

const ToggleFlags: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleFlagChange(lng === 'pt' ? 'BR' : 'EN');
  };

  const [selectedFlag, setSelectedFlag] = useState('EN'); // Estado para a bandeira selecionada
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleFlagChange = (flag: string) => {
    setSelectedFlag(flag);
    setDropdownOpen(false);
  };

  return (
    <DropdownContainer>
      <CircleButton onClick={toggleDropdown}>
        {selectedFlag === 'EN' ? (
          <img src="/public/euaFlag.png" alt="EN" style={{ width: '20px' }} />
        ) : (
          <img src="/public/brasilFlag.png" alt="BR" style={{ width: '20px' }} />
        )}
      </CircleButton>
      {isDropdownOpen && (
        <Dropdown>
          <DropdownItem onClick={() => changeLanguage('pt')}>
            <img src="/public/brasilFlag.png" alt="BR" style={{ width: '20px', marginRight: '8px' }} /> PT
          </DropdownItem>
          <DropdownItem onClick={() => changeLanguage('en')}>
            <img src="/public/euaFlag.png" alt="EN" style={{ width: '20px', marginRight: '8px' }} /> EN
          </DropdownItem>
        </Dropdown>
      )}
    </DropdownContainer>
  );
};

export default ToggleFlags;
