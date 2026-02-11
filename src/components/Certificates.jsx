import { useTranslation } from 'react-i18next';

const certificatesData = [
  {
    id: "ielts",
    logo: "certificate/ielts.png",
    titleUrl: "certificate/ielts-certificate.pdf",
    organizationUrl: "https://www.britishcouncil.vn/en/exam/ielts"
  },
  {
    id: "jlpt",
    logo: "certificate/jlpt-n3.png",
    titleUrl: "certificate/jlpt-certificate.pdf",
    organizationUrl: "https://www.jlpt.jp/e/"
  }
];

const Certificates = () => {
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
      <div className="section-heading" id="certificates">
        <h3>{t('certificates.title')}</h3>
      </div>
      <div className="section-content">
        {certificatesData.map((cert, index) => (
          <div className="certificate row" key={index}>
            <div className="col-3 col-lg-2">
              <img className="certificate-logo" src={getImageUrl(cert.logo)} alt={t(`certificates.${cert.id}.title`)} />
            </div>
            <div className="col">
              <div>
                {cert.titleUrl ? (
                  <a href={getTitleUrl(cert.titleUrl)} target="_blank" rel="noopener noreferrer">
                    <b>{t(`certificates.${cert.id}.title`)}</b>
                  </a>
                ) : (
                  <b>{t(`certificates.${cert.id}.title`)}</b>
                )}
              </div>
              <div>
                <a href={cert.organizationUrl} target="_blank" rel="noopener noreferrer">
                  <small>{t(`certificates.${cert.id}.organization`)}</small>
                </a>
              </div>
              <p>{t(`certificates.${cert.id}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certificates;
