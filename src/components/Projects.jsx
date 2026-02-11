import { useTranslation } from 'react-i18next';

const projectsData = [
  {
    title: "Outlook",
    subtitle: "Software | Microsoft",
    image: "outlook.jpg",
    url: "https://outlook.com/",
    description: "Microsoft Outlook is a personal information manager and email client used by millions of users worldwide. Working on this project involves maintaining and developing new features for the email, calendar, contacts, and tasks functionality across web and desktop platforms."
  },
  {
    title: "Blog (블로그)",
    subtitle: "Software | Naver",
    image: "naver-blog.png",
    url: "https://blog.naver.com/",
    description: "Naver Blog is a social network which used to upload blogs. The service is used by many people in Korea, which has an extremely high traffic. In this project, we developed the map feature, which display blogs on Google Map & Naver Map. Moreover, we improved the RSS system."
  },
  {
    title: "BBoom (뿜)",
    subtitle: "Software | Naver",
    image: "naver-bboom.png",
    url: "https://m.bboom.naver.com/",
    description: "A social network which used to upload humour posts and memes, titled as Naver BBoom. With millions of user, we are maintaining and improving all it's services. A lot of legacy features were optimized by us which reduce the latency and make the service more secure."
  },
  {
    title: "Action Spotting",
    subtitle: "Machine learning | IJCNN",
    image: "action-spotting.png",
    url: "https://ieeexplore.ieee.org/abstract/document/10650009",
    description: "A novel approach for precise action spotting in sports videos by unifying global and local scene entities modelling. The model achieved 1st place in SoccerNet-v2, FineDiving, and FineGym challenges. Published at IJCNN 2024."
  },
  {
    title: "DQN snake",
    subtitle: "Machine learning",
    image: "dqn_snake.png",
    url: "https://github.com/phuc16102001/deep-q-snake",
    description: "Implement a snake game as the training environment for Deep Q-learning Network (DQN) model. The DQN then integrated with A* algorithm to help my agent solve the game. After training & fine-tune, my agent achieved the 1st prize in the university contest."
  },
  {
    title: "Behaviour classification",
    subtitle: "Machine learning",
    image: "behaviour.jpg",
    url: "https://github.com/phuc16102001/behaviour-classification",
    description: "An AI model which can detect user's pose from real-time camera then classify user's action. Compared to traditional action classification, this model can use frame-speed to distinguish similar actions (e.g. walk vs run) by leveraging MediaPipePose and LSTM."
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
                    alt={project.title} 
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{project.subtitle}</h6>
                    <p className="card-text">{project.description}</p>
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
