import { useTranslation } from 'react-i18next';

const awardsData = [
  {
    id: "msHackathon",
    logo: "award/ms-hackathon-2025.png",
    titleUrl: "https://www.credly.com/badges/9ee446bd-d7d5-47e6-8cb7-e165b2dc071d",
    organizationUrl: "https://www.credly.com/org/microsoftgarage"
  },
  {
    id: "valedictorian",
    logo: "logo/hcmus.png",
    titleUrl: "certificate/graduate-list.pdf",
    organizationUrl: "https://www.hcmus.edu.vn/"
  },
  {
    id: "upwork",
    logo: "logo/upwork.png",
    titleUrl: "https://www.upwork.com/freelancers/~01007eff56cc062f95",
    organizationUrl: "https://www.upwork.com/"
  },
  {
    id: "near",
    logo: "logo/near.png",
    titleUrl: "certificate/near_certificate.jpg",
    organizationUrl: "https://gfiblockchain.com/"
  },
  {
    id: "stepStem",
    logo: "award/step-stem-alive.jpg",
    organizationUrl: "https://www.science.edu.sg/stem-inc"
  },
  {
    id: "knime",
    logo: "certificate/knime-l1.png",
    titleUrl: "https://www.credly.com/org/knime/badge/basic-proficiency-in-knime-analytics-platform",
    organizationUrl: "https://www.knime.com/"
  },
  {
    id: "shopee",
    logo: "certificate/shopee-code-2022.png",
    titleUrl: "https://www.credly.com/org/shopee-singapore/badge/shopee-code-league-2022-participant",
    organizationUrl: "https://www.credly.com/organizations/shopee-singapore/badges"
  }
];

const Awards = () => {
  const { t } = useTranslation();

  const getImageUrl = (path) => {
    if (path.startsWith('http')) {
      return path;
    }
    return `${process.env.PUBLIC_URL}/img/${path}`;
  };

  const getTitleUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('http')) {
      return url;
    }
    return `${process.env.PUBLIC_URL}/img/${url}`;
  };

  return (
    <>
      <div className="section-heading" id="awards">
        <h3>{t('awards.title')}</h3>
      </div>
      <div className="section-content">
        {awardsData.map((award, index) => (
          <div className="certificate row" key={index}>
            <div className="col-3 col-lg-2">
              <img className="certificate-logo" src={getImageUrl(award.logo)} alt={t(`awards.${award.id}.title`)} />
            </div>
            <div className="col">
              <div>
                {award.titleUrl ? (
                  <a href={getTitleUrl(award.titleUrl)} target="_blank" rel="noopener noreferrer">
                    <b>{t(`awards.${award.id}.title`)}</b>
                  </a>
                ) : (
                  <b>{t(`awards.${award.id}.title`)}</b>
                )}
              </div>
              <div>
                <a href={award.organizationUrl} target="_blank" rel="noopener noreferrer">
                  <small>{t(`awards.${award.id}.organization`)}</small>
                </a>
              </div>
              <p>{t(`awards.${award.id}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Awards;
