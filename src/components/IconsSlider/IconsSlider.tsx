import React, { useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaYarn, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiStyledcomponents, SiFigma } from 'react-icons/si';
import { SliderContainer, Slider, IconItem } from './IconsSlider.styles';
import Tooltip from '../Tooltip/Tooltip';

const IconsSlider: React.FC = () => {
  const icons = [
    { icon: <FaHtml5 />, color: '#E34F26', label: 'HTML5' },
    { icon: <FaCss3Alt />, color: '#1572B6', label: 'CSS3' },
    { icon: <FaJs />, color: '#F7DF1E', label: 'JavaScript' },
    { icon: <SiTypescript />, color: '#3178C6', label: 'TypeScript' },
    { icon: <FaReact />, color: '#61DAFB', label: 'React' },
    { icon: <SiNextdotjs />, color: '#000', label: 'Next.js' },
    { icon: <SiStyledcomponents />, color: '#DB7093', label: 'Styled Components' },
    { icon: <FaYarn />, color: '#2C8EBB', label: 'Yarn' },
    { icon: <FaGitAlt />, color: '#F05032', label: 'Git' },
    { icon: <FaGithub />, color: '#181717', label: 'GitHub' },
    { icon: <SiFigma />, color: '#F24E1E', label: 'Figma' },
  ];

  const duplicateIcons = [...icons, ...icons, ...icons, ...icons, ...icons, ...icons];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const refs = useRef<(React.RefObject<HTMLDivElement>)[]>(duplicateIcons.map(() => React.createRef<HTMLDivElement>()));

  return (
    <SliderContainer>
      <Slider>
        {duplicateIcons.map((item, index) => (
          <IconItem
            key={index}
            color={item.color}
            ref={refs.current[index]}
            onMouseEnter={() => setActiveIndex(index)} // Mantendo para mostrar o tooltip
            onMouseLeave={() => setActiveIndex(null)} // Mantendo para esconder o tooltip
          >
            {item.icon}
            {activeIndex === index && (
              <Tooltip text={item.label} targetRef={refs.current[index]} />
            )}
          </IconItem>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default IconsSlider;
