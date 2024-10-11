import { About, Image, Content, Title, Description } from './About.styles'; 
import programmer from '/programmer.png';
import ButtonLink from '../DownloadCv/DownloadCv';
import { useTranslation } from 'react-i18next';

const AboutComponent = () => {
  const { t } = useTranslation();

  return (
    <About>
      <Image src={programmer} alt={t('about.image_alt')} />
      <Content>
        <Title>{t('about.title')}</Title>
        <Description>{t('about.description_1')}</Description>
        <ButtonLink href="/Profile.pdf">{t('about.download_cv')}</ButtonLink>
        <Description>{t('about.description_2')}</Description>
      </Content>
    </About>
  );
};

export default AboutComponent;
