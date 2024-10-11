import { About, Image, Content, Title, Description, SecondTitle, Button } from './About.styles'; 
import programmer from '/programmer.png';
import ButtonLink from '../DownloadCv/DownloadCv';
import { useTranslation } from 'react-i18next';

const AboutComponent = () => {
  const { t } = useTranslation();

  const languages = {
    buttonNames: ["JavaScript", "Typescript", "React", "Next.js", "Vite"],
    buttonColors: [
      "#F7DF1E",  
      "#3178C6",  
      "#61DAFB",  
      "#000000",  
      "#646CFF"   
    ],
    fontColors: [
      "#000000",
      "#FFFFFF",
      "#000000",
      "#FFFFFF",
      "#000000"
    ]
  };

  return (
    <About>
      <Image src={programmer} alt={t('about.image_alt')} />
      <Content>
        <Title>{t('about.title')}</Title>
        <Description>{t('about.description_1')}</Description>
        <SecondTitle>{t('about.description_2')}</SecondTitle>
        <div>
          {languages.buttonNames.map((name, index) => (
            <Button 
              key={index} 
              backgroundColor={languages.buttonColors[index]} 
              fontColor={languages.fontColors[index]}
            >
              {name}
            </Button>
          ))}
        </div>
        <ButtonLink href="/Profile.pdf">{t('about.download_cv')}</ButtonLink>
      </Content>
    </About>
  );
};

export default AboutComponent;
