import React from 'react';

const awardsData = [
  {
    logo: "logo/hcmus.png",
    title: "Valedictorian graduated with the highest GPA of class 2019",
    titleUrl: "certificate/graduate-list.pdf",
    organization: "University of Science",
    organizationUrl: "https://www.hcmus.edu.vn/",
    description: "Anually received scholarship excellent students. Graduated valendictorian with the highest GPA (3.94/4) in the Information technology department over all the programmes."
  },
  {
    logo: "logo/upwork.png",
    title: "Top-rated Upwork lancer",
    titleUrl: "https://www.upwork.com/freelancers/~01007eff56cc062f95",
    organization: "Upwork",
    organizationUrl: "https://www.upwork.com/",
    description: "Top Rated highlights professionals who have built a strong reputation on Upwork by getting positive feedback from their clients, time after time. They represent the top 10% of talent on Upwork."
  },
  {
    logo: "certificate/ielts.png",
    title: "IELTS 7.0 - English Proficiency Exam",
    titleUrl: "certificate/ielts-certificate.pdf",
    organization: "British Council",
    organizationUrl: "https://www.britishcouncil.vn/en/exam/ielts",
    description: "IELTS is an English language proficiency exam that reports at all levels from low intermediate to very advanced. There is a general and academic version."
  },
  {
    logo: "logo/near.png",
    title: "NEAR Advanced Development",
    titleUrl: "certificate/near_certificate.jpg",
    organization: "GFS Blockchain",
    organizationUrl: "https://gfiblockchain.com/",
    description: "A course on how to use NEAR Protocol to write smart contracts and integrate to an application. Furthermore, Aurora Engine and Octopus Network are also covered in the course. At the end of this course, learners must propose an software that use blockchain and build the prototype."
  },
  {
    logo: "award/step-stem-alive.jpg",
    title: "STEP STEM Alive 2019 - 4th runner-up",
    organization: "Science Center Singapore",
    organizationUrl: "https://www.science.edu.sg/stem-inc",
    description: "The programme sought to promote interest in STEM education and harness creativity in translating cross-curriculum knowledge into solutions for real-world issues to prepare participants to be self-directed learners, active solution contributors to the United Nations Sustainable Development Goals."
  },
  {
    logo: "certificate/knime-l1.png",
    title: "Basic Proficiency in KNIME Analytics Platform",
    titleUrl: "https://www.credly.com/org/knime/badge/basic-proficiency-in-knime-analytics-platform",
    organization: "KNIME",
    organizationUrl: "https://www.knime.com/",
    description: "Earners of this certificate have passed the L1 examination of KNIME Certification Program. Thereby they have demonstrated knowledge of the following topics: General concepts of KNIME Analytics Platform, importing/exporting data, data manipulation, and data aggregation."
  },
  {
    logo: "certificate/shopee-code-2022.png",
    title: "Shopee Code League 2022 - Participant",
    titleUrl: "https://www.credly.com/org/shopee-singapore/badge/shopee-code-league-2022-participant",
    organization: "Shopee Singapore",
    organizationUrl: "https://www.credly.com/organizations/shopee-singapore/badges",
    description: "Shopee Code League is a 2-week coding league consisting of two rounds of coding competitions, open to all students and professionals. Participants will put their coding skills to the test by solving challenging algorithmic puzzles designed by the Shopee Engineering team."
  }
];

const Awards = () => {
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
        <h3>Awards & certificates</h3>
      </div>
      <div className="section-content">
        {awardsData.map((award, index) => (
          <div className="certificate row" key={index}>
            <div className="col-3 col-lg-2">
              <img className="certificate-logo" src={getImageUrl(award.logo)} alt={award.title} />
            </div>
            <div className="col">
              <div>
                {award.titleUrl ? (
                  <a href={getTitleUrl(award.titleUrl)} target="_blank" rel="noopener noreferrer">
                    <b>{award.title}</b>
                  </a>
                ) : (
                  <b>{award.title}</b>
                )}
              </div>
              <div>
                <a href={award.organizationUrl} target="_blank" rel="noopener noreferrer">
                  <small>{award.organization}</small>
                </a>
              </div>
              <p>{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Awards;
