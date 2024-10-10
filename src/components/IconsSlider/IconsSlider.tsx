import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaYarn, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiStyledcomponents, SiFigma } from 'react-icons/si';
import { SliderContainer, Slider, IconItem } from './IconsSlider.styles';

const IconsSlider: React.FC = () => {
  const icons = [
    { icon: <FaHtml5 />, color: '#E34F26' },
    { icon: <FaCss3Alt />, color: '#1572B6' },
    { icon: <FaJs />, color: '#F7DF1E' },
    { icon: <SiTypescript />, color: '#3178C6' },
    { icon: <FaReact />, color: '#61DAFB' },
    { icon: <SiNextdotjs />, color: '#000' },
    { icon: <SiStyledcomponents />, color: '#DB7093' },
    { icon: <FaYarn />, color: '#2C8EBB' },
    { icon: <FaGitAlt />, color: '#F05032' },
    { icon: <FaGithub />, color: '#181717' },
    { icon: <SiFigma />, color: '#F24E1E' },
  ];

  return (
    <SliderContainer>
      <Slider>
        {icons.map((item, index) => (
          <IconItem key={index} color={item.color}>
            {item.icon}
          </IconItem>
        ))}
        {icons.map((item, index) => (
          <IconItem key={`duplicate-${index}`} color={item.color}>
            {item.icon}
          </IconItem>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default IconsSlider;
