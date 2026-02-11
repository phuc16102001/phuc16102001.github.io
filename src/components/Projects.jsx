import { useTranslation } from 'react-i18next';

const projectsData = [
  {
    key: "outlook",
    image: "outlook.jpg",
    url: "https://outlook.com/"
  },
  {
    key: "naverBlog",
    image: "naver-blog.png",
    url: "https://blog.naver.com/"
  },
  {
    key: "naverBboom",
    image: "naver-bboom.png",
    url: "https://m.bboom.naver.com/"
  },
  {
    key: "actionSpotting",
    image: "action-spotting.png",
    url: "https://ieeexplore.ieee.org/abstract/document/10650009"
  },
  {
    key: "dqnSnake",
    image: "dqn_snake.png",
    url: "https://github.com/phuc16102001/deep-q-snake"
  },
  {
    key: "behaviourClassification",
    image: "behaviour.jpg",
    url: "https://github.com/phuc16102001/behaviour-classification"
  }
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="section-heading" id="projects">
        <h3>{t('projects.title')}</h3>
      </div>
      <div className="container py-2">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 pt-2">
          {projectsData.map((project, index) => (
            <div className="col project" key={index}>
              <a target="_blank" rel="noopener noreferrer" href={project.url}>
                <div className="card">
                  <img 
                    src={`${process.env.PUBLIC_URL}/img/projects/${project.image}`} 
                    className="card-img-top" 
                    alt={t(`projects.${project.key}.title`)} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">{t(`projects.${project.key}.title`)}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{t(`projects.${project.key}.subtitle`)}</h6>
                    <p className="card-text">{t(`projects.${project.key}.description`)}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
