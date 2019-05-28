import React from 'react';
import './style.scss';

import Footer from './../Footer'

// import { ReactComponent as HumanIcon } from './svgs/human.svg';
// import { ReactComponent as HatIcon } from './svgs/hat.svg';
// import { ReactComponent as DesignationIcon } from './svgs/designation.svg';
// import { ReactComponent as WorkIcon } from './svgs/work.svg';
// import { ReactComponent as CountryIcon } from './svgs/country.svg';

const Home = () => (
  <section>

    {/* Getting Started */}
    <div className="home-header">
      <div className="home-header-content text-center">
        <h4 className="home-header-title">
          <strong> What We think, We Become. </strong> <br/>
        </h4>
        <h5>Are you ready to know my cup of coffee??? <span role="img" aria-label="coffee">☕</span></h5>
        <br/>
        <a href="#about" className="btn btn-lg btn-info home-header-button">
          Getting Started
        </a>
      </div>
    </div>

    {/* About ME */}
    <div className="about-me-container" id="about">
      <div className="container">
        <h3 className="text-center">ABOUT ME</h3>
        <div className="selection-title-divider"></div>
        <p className="text-center">
          <em>
            I love Coding!
          </em>
        </p>
        <p>
          Long ago, actually not so long a graduate in Computer Science and Engineering from Pondicherry University and forwarding now as a Software Engineer with sufficient knowledge even to teach a layman. Come let us pop into my skills.
        </p>
        <p>
          I am a self-motivated and talented young software engineer who has been working in the field of Web Development in a well-established product based company.
          I have been building responsive web-based applications in an effective manner.
          I am also good in <b>EmberJs</b> which is a popular JavaScript framework for developing single page application.
          Searching new technologies over the web is my hobby.
        </p>
        <div className="d-flex justify-content-between about-me-panel">
          <img src="/img/profile.jpg" className="rounded about-me-photo" alt="Theenadayaln" width="400" height="300"/>
          <div className="about-me-content">
            <div>
              {/* <HumanIcon className="svg va-top mr-3" /> */}
              THEENADAYALAN K
            </div>
            <div>
              {/* <HatIcon className="svg va-top mr-3" /> */}
              B.Tech (Computer Science & Engineering)
            </div>
            <div>
              {/* <DesignationIcon className="svg va-top mr-3" /> */}
              Front End Engineer
            </div>
            <div>
              {/* <WorkIcon className="svg va-top mr-3" /> */}
              Zoho Corporation
            </div>
            <div>
              {/* <CountryIcon className="svg va-top mr-3" /> */}
              India
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* SKillSets */}
    <div className="skillset-container">
      <div className="container">
        <div className="skillset-header">
          <h3 className="text-center">MY PASSION</h3>
          <div className="selection-title-divider"></div>
          <p className="text-center">
            <em>
              I love Working too!
            </em>
          </p>
        </div>
        <div className="skillset-panel">
          <p>EmberJs</p>
          <div className="skillset-bar">
            <div className="skillset-acquired" style={{width:"70%"}}>70%</div>
          </div>
          <p>HTML & CSS</p>
          <div className="skillset-bar">
            <div className="skillset-acquired" style={{width:"90%"}}>90%</div>
          </div>
          <p>JavaScript</p>
          <div className="skillset-bar">
            <div className="skillset-acquired" style={{width:"85%"}}>85%</div>
          </div>
          <p>Music & Fun</p>
          <div className="skillset-bar">
            <div className="skillset-acquired" style={{width:"100%"}}>100%</div>
          </div>
        </div>
      </div>
    </div>

    {/* Education */}
    <div className="education-container">
      <div className="container">
        <div className="edu-header text-center">
          <h4>EDUCATION</h4>
          <div className="selection-title-divider"></div>
          <p className="text-center">
            <em>
              An Educational Journey!
            </em>
          </p>
        </div>
        <ul className="edu-timeline">
          <li>
            <div className="timeline-icon"></div>
            <div className="timeline-panel">
              <div className="timeline-header">
                <div className="timeline-title">
                  Bachelor Of Technology
                  <span className="small text-muted">
                    (Computer Science & Engineering)
                  </span>
                  &nbsp;
                  <span className="course-duration">
                    2013-2017
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                Sri Manakula Vinayagar Enigneering College <br/>
                Pondicherry
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-icon"></div>
            <div className="timeline-panel pull-right">
              <div className="timeline-header">
                <div className="timeline-title">
                  Higher Secondary
                  <span className="small text-muted">
                    (Biology)
                  </span>
                  &nbsp;
                  <span className="course-duration">
                    2011-2013
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                Bonne Nehru Higher Secondary School <br/>
                Thirukkanur
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-icon"></div>
            <div className="timeline-panel">
              <div className="timeline-header">
                <div className="timeline-title">
                  SSLC
                  &nbsp;
                  <span className="course-duration">
                    2010-2011
                  </span>
                </div>
              </div>
              <div className="timeline-content">
                Government High School <br/>
                Sorapet
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    {/* Career */}
    <div className="career-container">
      <div className="text-center text-uppercase">
        <h4>Experience</h4>
        <div className="selection-title-divider"></div>
      </div>
      <p className="text-center">
        <em>
          Reflection of My Educational Journey!
        </em>
      </p>
      <div className="container">
        <div className="career-panel">
          <h5>
            Member Technical Staff / Zoho Corporation
          </h5>
          <h6 className="career-duration-color">
            Jun 2017 - <span className="label-present">Current</span>
          </h6>
          <p>
            I have been working here as a full time Front End Web Developer. EmberJs is a JavaScript web framework which we are using to develop complex and ambitious web applications.
          </p>
          <hr />
        </div>
      </div>
    </div>

    <Footer />
  </section>
)

export default Home;