import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="section-heading" id="about">
        <h3>{t('about.title')}</h3>
      </div>
      <div className="section-content px-2">
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
      </div>
    </>
  );
};

export default About;
