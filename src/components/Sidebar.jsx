import React from 'react';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div className="h-100 col-lg-3 offset-lg-1 text-center slider py-2 px-4">
      <div>
        <img 
          className="animate__animated animate__fadeIn rounded-circle avatar img-thumbnail my-2" 
          alt="my-avatar"
          src={`${process.env.PUBLIC_URL}/img/others/avatar.jpg`}
        />
        <h1 className="fs-4 text-uppercase animate__animated animate__fadeIn">
          <a className="highlight" href="/">{t('name')}</a>
        </h1>
        <div className="fw-light fs-6 animate__animated animate__fadeIn">
          {t('title')}
        </div>
      </div>
      <ul className="nav flex-column py-3">
        <li className="nav-item animate__fadeInLeft animate__animated">
          <a href="#about" className="nav-link">{t('nav.about')}</a>
        </li>
        <li className="nav-item animate__fadeInLeft animate__animated">
          <a href="#education" className="nav-link">{t('nav.education')}</a>
        </li>
        <li className="nav-item animate__fadeInLeft animate__animated">
          <a href="#work" className="nav-link">{t('nav.work')}</a>
        </li>
        <li className="nav-item animate__fadeInLeft animate__animated">
          <a href="#skills" className="nav-link">{t('nav.skills')}</a>
        </li>
        <li className="nav-item animate__fadeInLeft animate__animated">
          <a href="#projects" className="nav-link">{t('nav.projects')}</a>
        </li>
        <li className="nav-item animate__fadeInLeft animate__animated">
          <a href="#certificates" className="nav-link">{t('nav.certificates')}</a>
        </li>
        <li className="nav-item animate__fadeInLeft animate__animated">
          <a href="#awards" className="nav-link">{t('nav.awards')}</a>
        </li>
        <li className="nav-item animate__fadeInLeft animate__animated">
          <a href="#publications" className="nav-link">{t('nav.publications')}</a>
        </li>
      </ul>
      <div className="container px-5 animate__animated animate__fadeInUp">
        <div className="row">
          <a target="_blank" rel="noopener noreferrer" className="col" href="mailto:phuc16102001@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" className="col" href="https://github.com/phuc16102001/">
            <i className="col fa-brands fa-github"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" className="col" href="https://www.kaggle.com/phuc16102001">
            <i className="col fa-brands fa-kaggle"></i>
          </a>
        </div>
        <div className="row py-2">
          <a target="_blank" rel="noopener noreferrer" className="col" href="https://www.facebook.com/phuc16102001">
            <i className="col fa-brands fa-facebook"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" className="col" href="https://www.linkedin.com/in/phuc16102001">
            <i className="col fa-brands fa-linkedin"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" className="col" href="https://stackoverflow.com/users/15691399/phuc16102001">
            <i className="col fa-brands fa-stack-overflow"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
