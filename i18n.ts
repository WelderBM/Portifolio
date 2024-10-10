import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptTranslation from './public/locales/pt.json'
import enTranslation from './public/locales/en.json'


i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: ptTranslation
      },
      en: {
        translation: enTranslation
      }
    },
    lng: 'en', // Define a língua padrão
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false // React já escapa a saída
    }
  });

export default i18n;
