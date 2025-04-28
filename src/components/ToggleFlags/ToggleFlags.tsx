import React, { useState } from 'react';
import { DropdownContainer, CircleButton, Dropdown, DropdownItem } from './ToggleFlags.styles';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

interface ToggleFlagsProps {
  selectedFlag: 'EN' | 'BR';
  setSelectedFlag: (flag: 'EN' | 'BR') => void;
}

const ToggleFlags: React.FC<ToggleFlagsProps> = ({ selectedFlag, setSelectedFlag }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleFlagChange(lng === 'pt' ? 'BR' : 'EN');
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleFlagChange = (flag: 'EN' | 'BR') => {
    setSelectedFlag(flag);
    setDropdownOpen(false);
  };

  return (
    <DropdownContainer aria-label={`Mudar idioma para ${selectedFlag  === 'EN' ? 'português' : 'inglês'}`}>
      <CircleButton onClick={toggleDropdown}>
        {selectedFlag === 'EN' ? (
          <img src="/euaFlag.png" alt="EN" style={{ width: '20px' }} />
        ) : (
          <img src="/brasilFlag.png" alt="BR" style={{ width: '20px' }} />
        )}
      </CircleButton>
      {isDropdownOpen && (
        <Dropdown>
          <DropdownItem onClick={() => changeLanguage('pt')}>
            <img src="/brasilFlag.png" alt="BR" style={{ width: '20px', marginRight: '8px' }} /> PT
          </DropdownItem>
          <DropdownItem onClick={() => changeLanguage('en')}>
            <img src="/euaFlag.png" alt="EN" style={{ width: '20px', marginRight: '8px' }} /> EN
          </DropdownItem>
        </Dropdown>
      )}
    </DropdownContainer>
  );
};

export default ToggleFlags;
