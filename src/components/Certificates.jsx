const certificatesData = [
  {
    logo: "certificate/ielts.png",
    title: "IELTS 7.0 - English Proficiency Exam",
    titleUrl: "certificate/ielts-certificate.pdf",
    organization: "British Council",
    organizationUrl: "https://www.britishcouncil.vn/en/exam/ielts",
    description: "IELTS is an English language proficiency exam that reports at all levels from low intermediate to very advanced. There is a general and academic version."
  },
  {
    logo: "certificate/jlpt-n3.png",
    title: "JLPT N3 - Japanese Language Proficiency Test",
    titleUrl: "certificate/jlpt-certificate.pdf",
    organization: "Japan Foundation",
    organizationUrl: "https://www.jlpt.jp/e/",
    description: "The Japanese-Language Proficiency Test (JLPT) is a standardized test to evaluate and certify Japanese language proficiency for non-native speakers. N3 is the intermediate level, demonstrating the ability to understand Japanese used in everyday situations to a certain degree."
  }
];

const Certificates = () => {
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
        <h3>Certificates</h3>
      </div>
      <div className="section-content">
        {certificatesData.map((cert, index) => (
          <div className="certificate row" key={index}>
            <div className="col-3 col-lg-2">
              <img className="certificate-logo" src={getImageUrl(cert.logo)} alt={cert.title} />
            </div>
            <div className="col">
              <div>
                {cert.titleUrl ? (
                  <a href={getTitleUrl(cert.titleUrl)} target="_blank" rel="noopener noreferrer">
                    <b>{cert.title}</b>
                  </a>
                ) : (
                  <b>{cert.title}</b>
                )}
              </div>
              <div>
                <a href={cert.organizationUrl} target="_blank" rel="noopener noreferrer">
                  <small>{cert.organization}</small>
                </a>
              </div>
              <p>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certificates;
