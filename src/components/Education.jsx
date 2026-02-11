import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="section-heading" id="education">
        <h3>{t('education.title')}</h3>
      </div>
      <div className="section-content">
        <ul className="timeline">
          <li>
            <b>{t('education.degree')}</b>
            <div className="float-end">{t('education.period')}</div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.hcmus.edu.vn/">
                <img src={`${process.env.PUBLIC_URL}/img/logo/hcmus.png`} className="small-logo" alt="hcmus" />
                <small>{t('education.university')}</small>
              </a>
            </div>
            <p>
              {t('education.major')}<br/>
              <b>{t('education.achievement')}</b>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Education;
