import { useTranslation } from 'react-i18next';

const publicationsData = [
  {
    key: "ieee",
    logo: "logo/ieee-wcci-2024.png",
    titleUrl: "https://ieeexplore.ieee.org/document/10650009/",
    organizationUrl: "https://2024.ieeewcci.org/"
  },
  {
    key: "medium",
    logo: "logo/medium.png",
    titleUrl: "https://medium.com/low-code-for-advanced-data-science/product-recommendation-for-huimitu-e-commerce-using-association-rule-with-knime-4c7e172707f1",
    organizationUrl: "https://medium.com/low-code-for-advanced-data-science"
  }
];

const Publications = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="section-heading" id="publications">
        <h3>{t('publications.title')}</h3>
      </div>
      <div className="section-content">
        {publicationsData.map((pub, index) => (
          <div className="certificate row" key={index}>
            <div className="col-3 col-lg-2">
              <img 
                className="certificate-logo" 
                src={`${process.env.PUBLIC_URL}/img/${pub.logo}`} 
                alt={t(`publications.${pub.key}.title`)} 
              />
            </div>
            <div className="col">
              <div>
                <a href={pub.titleUrl} target="_blank" rel="noopener noreferrer">
                  <b>{t(`publications.${pub.key}.title`)}</b>
                </a>
              </div>
              <div>
                <a href={pub.organizationUrl} target="_blank" rel="noopener noreferrer">
                  <small>{t(`publications.${pub.key}.organization`)}</small>
                </a>
              </div>
              <p>{t(`publications.${pub.key}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Publications;
