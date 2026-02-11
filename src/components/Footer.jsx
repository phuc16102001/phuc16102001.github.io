import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p style={{ textAlign: 'center' }}>
        <small>- {t('name')} &copy; {new Date().getFullYear()} -</small>
        <LanguageSwitcher />
      </p>
    </div>
  );
};

export default Footer;
