import { useTranslation } from 'react-i18next';

const workExperiences = [
  {
    key: 'microsoft',
    titleUrl: null,
    companyUrl: "https://www.microsoft.com/",
    logo: "microsoft.png"
  },
  {
    key: 'naver',
    titleUrl: null,
    companyUrl: "https://www.navercorp.com/en/naver/company",
    logo: "naver.ico"
  },
  {
    key: 'upwork',
    titleUrl: "https://www.upwork.com/freelancers/~01007eff56cc062f95",
    companyUrl: "https://www.upwork.com",
    logo: "upwork.png"
  },
  {
    key: 'vbpo',
    titleUrl: null,
    companyUrl: "https://vbpo.com.vn",
    logo: "vbpo.jpg"
  }
];

const Work = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="section-heading" id="work">
        <h3>{t('work.title')}</h3>
      </div>
      <div className="section-content">
        <ul className="timeline">
          {workExperiences.map((exp, index) => (
            <li key={index}>
              {exp.titleUrl ? (
                <a target="_blank" rel="noopener noreferrer" href={exp.titleUrl}>
                  <b>{t(`work.${exp.key}.title`)}</b>
                </a>
              ) : (
                <b>{t(`work.${exp.key}.title`)}</b>
              )}
              <span className="float-end">{t(`work.${exp.key}.period`)}</span>
              <div>
                {exp.companyUrl ? (
                  <a target="_blank" rel="noopener noreferrer" href={exp.companyUrl}>
                    <img className="small-logo" src={`${process.env.PUBLIC_URL}/img/logo/${exp.logo}`} alt={t(`work.${exp.key}.company`)} />
                    <small>{t(`work.${exp.key}.company`)} | {t(`work.${exp.key}.market`)}</small>
                  </a>
                ) : (
                  <>
                    <img className="small-logo" src={`${process.env.PUBLIC_URL}/img/logo/${exp.logo}`} alt={t(`work.${exp.key}.company`)} />
                    <small>{t(`work.${exp.key}.company`)} | {t(`work.${exp.key}.market`)}</small>
                  </>
                )}
              </div>
              <p>{t(`work.${exp.key}.description`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Work;
