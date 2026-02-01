import React from 'react';

const Education = () => {
  return (
    <>
      <div className="section-heading" id="education">
        <h3>Education</h3>
      </div>
      <div className="section-content">
        <ul className="timeline">
          <li>
            <b>Bachelor in Information Technology</b>
            <div className="float-end">2019 - 2023</div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.hcmus.edu.vn/">
                <img src={`${process.env.PUBLIC_URL}/img/logo/hcmus.png`} className="small-logo" alt="hcmus" />
                <small>University of Science</small>
              </a>
            </div>
            <p>
              Major in Artificial Intelligent (Computer Science)<br/>
              <b>Valedictorian graduated (Top 1 with GPA 3.94/4)</b>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Education;
