import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div id="home" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#home" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#home" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#home" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={`${process.env.PUBLIC_URL}/img/others/hcmus.gif`} className="d-block carousel-img" alt="resume" />
          <div className="pop-bg animate__animated animate__fadeInUp">
            <h1 className="pop-title">{t('hero.greeting')}</h1>
            <div className="pop-description">
              {t('hero.intro')}<br/>
              {t('hero.graduated')}
            </div>
            <a target="_blank" rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}/assets/resume.pdf`}>
              <button type="button" className="pop-btn btn btn-primary">
                {t('hero.resumeBtn')}
              </button>
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block carousel-img" src={`${process.env.PUBLIC_URL}/img/others/projects.png`} alt="projects" />
          <div className="pop-bg animate__animated animate__fadeInUp">
            <h1 className="pop-title">{t('hero.projectsTitle')}</h1>
            <div className="pop-description">
              {t('hero.projectsDesc1')}<br/>
              {t('hero.projectsDesc2')}
            </div>
            <a href="#projects">
              <button type="button" className="btn btn-primary pop-btn">
                {t('hero.projectsBtn')}
              </button>
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/img/others/work.jpg`} className="d-block carousel-img" alt="work" />
          <div className="pop-bg animate__animated animate__fadeInUp">
            <h1 className="pop-title">{t('hero.expTitle')}</h1>
            <div className="pop-description">
              {t('hero.expDesc1')}<br/>
              {t('hero.expDesc2')}
            </div>
            <a href="#work">
              <button type="button" className="btn btn-primary pop-btn">
                {t('hero.expBtn')}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
