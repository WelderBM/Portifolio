import { HiPhrase, MyName, Paragraph } from './Texts.styles';
import { useTranslation } from 'react-i18next';

const Texts = () => {
  const { t } = useTranslation();

  return (
    <>
      <HiPhrase>
        {t('texts.hello_visitor')}
      </HiPhrase>
      <MyName>{t('texts.my_name')}</MyName>
      <Paragraph>{t('texts.job_title')}</Paragraph>
    </>
  );
};

export default Texts;
