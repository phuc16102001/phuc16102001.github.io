import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#home" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#home" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#home" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={`${process.env.PUBLIC_URL}/img/others/hcmus.jpg`} className="d-block carousel-img" alt="resume" />
          <div className="pop-bg animate__animated animate__fadeInUp">
            <h1 className="pop-title">Hi! This is Do Vuong Phuc</h1>
            <div className="pop-description">
              A software engineer at Microsoft with the enthusiasm in AI<br/>
              Graduated as a valedictorian from the University of Science.
            </div>
            <a target="_blank" rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}/assets/resume.pdf`}>
              <button type="button" className="pop-btn btn btn-primary">
                My resume
              </button>
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block carousel-img" src={`${process.env.PUBLIC_URL}/img/others/projects.png`} alt="projects" />
          <div className="pop-bg animate__animated animate__fadeInUp">
            <h1 className="pop-title">Selected projects</h1>
            <div className="pop-description">
              Not only interest in software technologies<br/>
              I also research on machine learning models.
            </div>
            <a href="#projects">
              <button type="button" className="btn btn-primary pop-btn">
                Projects
              </button>
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/img/others/work.jpg`} className="d-block carousel-img" alt="work" />
          <div className="pop-bg animate__animated animate__fadeInUp">
            <h1 className="pop-title">My experience</h1>
            <div className="pop-description">
              I always willing to contribute my talent for society.<br/>
              Check-out my working experience!
            </div>
            <a href="#work">
              <button type="button" className="btn btn-primary pop-btn">
                Working experience
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
