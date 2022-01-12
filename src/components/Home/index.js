import React from 'react';
import './style.scss';

import Footer from './../Footer';

import HumanIcon from './../../assets/svgs/human.svg';
import HatIcon from './../../assets/svgs/hat.svg';
import DesignationIcon from './../../assets/svgs/designation.svg';
import WorkIcon from './../../assets/svgs/work.svg';
import CountryIcon from './../../assets/svgs/country.svg';
import Career from './Career';

const educationHistory = [
  {
    courseName: 'Bachelor Of Technology',
    department: 'Computer Science & Engineering',
    batch: '2013-2017',
    institution: 'Sri Manakula Vinayagar Enigneering College',
    location: 'Pondicherry',
  },
  {
    courseName: 'Higher Secondary',
    department: 'Biology',
    batch: '2011-2013',
    institution: 'Bonne Nehru Higher Secondary School',
    location: 'Thirukkanur',
  },
  {
    courseName: 'SSLC',
    batch: '2010-2011',
    institution: 'Government High School',
    location: 'Sorapet',
  },
];

const skillsetMap = [
  {
    name: 'ReactJs',
    width: '50%'
  }, {
    name: 'EmberJs',
    width: '70%',
  }, {
    name: 'HTML & CSS',
    width: '90%',
  }, {
    name: 'JavaScript',
    width: '85%',
  }, {
    name: 'Music & Fun',
    width: '100%',
  },
];

const Home = () => (
  <section>
    {/* Getting Started */}
    <div className="home-header">
      <div className="home-header-content text-center">
        <h4 className="home-header-title">
          <strong> What We think, We Become. </strong> <br />
        </h4>
        <h5>
          Are you ready to know my cup of coffee???
          <span role="img" aria-label="coffee">
            ☕
          </span>
        </h5>
        <br />
        <a href="#about" className="btn btn-lg btn-info home-header-button">
          Getting Started
        </a>
      </div>
    </div>

    {/* About ME */}
    <div className="about-me-container" id="about">
      <div className="container">
        <h3 className="text-center">ABOUT ME</h3>
        <div className="selection-title-divider" />
        <p className="text-center text-muted">
          <em>I love Coding!</em>
        </p>
        <p className="font-md">
          Long ago, actually not so long a graduate in Computer Science and
          Engineering from Pondicherry University and forwarding now as a
          Software Engineer with sufficient knowledge even to teach a layman.
          Come let us pop into my skills.
        </p>
        <p className="font-md">
          I am a self-motivated and talented young software engineer who has
          been working in the field of Web Development in a well-established
          product based company. I have been building responsive web-based
          applications in an effective manner. I am also good in <b>EmberJs </b>
          which is a popular JavaScript framework for developing single page
          application. Searching new technologies over the web is my hobby.
        </p>
        <div className="d-flex justify-content-between about-me-panel">
          <img
            src={'img/profile.jpg'}
            className="rounded about-me-photo"
            alt="Theenadayalan"
            width="400"
            height="300"
          />
          <div className="about-me-content">
            <div>
              <HumanIcon className="svg va-top mr-3" />
              THEENADAYALAN K
            </div>
            <div>
              <HatIcon className="svg va-mid mr-3" />
              B.Tech (Computer Science & Engineering)
            </div>
            <div>
              <DesignationIcon className="svg va-mid mr-3" />
              Front End Engineer
            </div>
            <div>
              <WorkIcon className="svg va-mid mr-3" />
              Byju's The Learning App (Think and Learn Pt Ltd)
            </div>
            <div>
              <CountryIcon className="svg va-mid mr-3" />
              Bangalore, India
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
          <div className="selection-title-divider" />
          <p className="text-center">
            <em>I love Working too!</em>
          </p>
        </div>
        <div className="skillset-panel">
          {skillsetMap.map((skill, index) => (
            <div key={index}>
              <p>{skill.name}</p>
              <div className="skillset-bar">
                <div
                  className="skillset-acquired"
                  style={{ width: skill.width }}
                >
                  {skill.width}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Education */}
    <div className="education-container">
      <div className="container">
        <div className="edu-header text-center">
          <h4>EDUCATION</h4>
          <div className="selection-title-divider" />
          <p className="text-center text-muted">
            <em>An Educational Journey!</em>
          </p>
        </div>
        <ul className="edu-timeline">
          {educationHistory.map((education, index) => (
            <li key={index}>
              <div className="timeline-icon" />
              <div
                className={
                  'timeline-panel ' + (index % 2 !== 0 && 'pull-right')
                }
              >
                <div className="timeline-header">
                  <div className="timeline-title">
                    {education.courseName} &nbsp;
                    {education.department && (
                      <small className="text-muted">
                        {' '}
                        ({education.department}){' '}
                      </small>
                    )}
                    &nbsp;
                    <span className="course-duration">{education.batch}</span>
                  </div>
                </div>
                <div className="timeline-content">
                  {education.institution} <br />
                  <span className="text-muted">{education.location}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Career */}
    <Career />

    <Footer />
  </section>
);

export default Home;
