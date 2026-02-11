const workExperiences = [
  {
    title: "Software Engineer",
    period: "August 2024 - Now",
    company: "Microsoft",
    companyUrl: "https://www.microsoft.com/",
    logo: "microsoft.png",
    market: "International market",
    description: "Using DotNet framework and Microsoft systems (e.g. Azure) to enhance the Exchange server with mail-related system. Develop a system to support on-call engineers when the incidents occurred. Leverage Copilot to give diagnostics and take action on the incidents automatically."
  },
  {
    title: "Backend Engineer",
    period: "April 2023 - July 2024",
    company: "Naver",
    companyUrl: "https://www.navercorp.com/en/naver/company",
    logo: "naver.ico",
    market: "Korea market",
    description: "Design and develop large-scale zero-downtime systems with millions users. Using Java Spring & distributed systems on Naver cloud to implement social media platforms (Naver BBoom and Naver Blog). Responsible with DevOps task (e.g. build CI/CD pipeline). Building Slack chatbot with Slack Bolt to monitor the service when deploying."
  },
  {
    title: "Freelance Software/AI Engineer",
    titleUrl: "https://www.upwork.com/freelancers/~01007eff56cc062f95",
    period: "Nov 2022 - March 2023",
    company: "Upwork",
    companyUrl: "https://www.upwork.com",
    logo: "upwork.png",
    market: "International market",
    description: "Develop software tools and utilities (e.g. syntax checker, trading probabilistic calculator, simple compilers and algorithms to solve large data problems). Build dashboard to visualize data, analyze and provide insight from the dashboard. Build machine learning models and fine-tune them to achieve a good measure metrics (accuracy, F1-score, etc)"
  },
  {
    title: "Fullstack Blockchain Intern",
    period: "May 2022 - Oct 2022",
    company: "VBPO JSC",
    companyUrl: "https://vbpo.com.vn",
    logo: "vbpo.jpg",
    market: "Vietnam market",
    description: "Research blockchain technologies and develop a blockchain-based application to digitalize real estates. Focus mainly in backend development and smart contract implement with NEAR and Aurora Engine."
  }
];

const Work = () => {
  return (
    <>
      <div className="section-heading" id="work">
        <h3>Working experience</h3>
      </div>
      <div className="section-content">
        <ul className="timeline">
          {workExperiences.map((exp, index) => (
            <li key={index}>
              {exp.titleUrl ? (
                <a target="_blank" rel="noopener noreferrer" href={exp.titleUrl}>
                  <b>{exp.title}</b>
                </a>
              ) : (
                <b>{exp.title}</b>
              )}
              <span className="float-end">{exp.period}</span>
              <div>
                {exp.companyUrl ? (
                  <a target="_blank" rel="noopener noreferrer" href={exp.companyUrl}>
                    <img className="small-logo" src={`${process.env.PUBLIC_URL}/img/logo/${exp.logo}`} alt={exp.company} />
                    <small>{exp.company} | {exp.market}</small>
                  </a>
                ) : (
                  <>
                    <img className="small-logo" src={`${process.env.PUBLIC_URL}/img/logo/${exp.logo}`} alt={exp.company} />
                    <small>{exp.company} | {exp.market}</small>
                  </>
                )}
              </div>
              <p>{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Work;
