import React from 'react';
import './style.css';

import Layout from './../../components/Layout';

const Projects = () => {
  return (
    <Layout>
      <div className="project-container">
        <div className="project-card">
          <div className="project-card-header">
            <h5>YouTabMan</h5>
          </div>
          <div className="project-title-divider" />
          <div className="project-card-body">
            <p>
              YouTabMan is an ultra simple Web Extension to get a control of all
              of the currently opened YouTube videos in a single point.
            </p>
            <div className="d-flex justify-content-around">
              <a
                href="https://chrome.google.com/webstore/detail/youtabman/pfflnpdlbjjkgnelipgknanbnjafijgi"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome
              </a>
              <a
                href="https://addons.mozilla.org/en-US/firefox/addon/youtabman/"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox
              </a>
            </div>
          </div>
          <div className="project-card-footer">
            <small className="text-muted">9 March 2018</small>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-header">
            <h5>FireBook</h5>
          </div>
          <div className="project-title-divider" />
          <div className="project-card-body">
            <p>
              An Ember application used to view and create posts by all
              users...!
            </p>
            <a
              href="https://github.com/theenadayalank/firebook"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
          <div className="project-card-footer">
            <small className="text-muted">11 March 2018</small>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-header">
            <h5>Website</h5>
          </div>
          <div className="project-title-divider" />
          <div className="project-card-body">
            <p>Source Code of this site...!</p>
            <a
              href="https://github.com/theenadayalank/website"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
          <div className="project-card-footer">
            <small className="text-muted">14 March 2018</small>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-header">
            <h5>lint-prepush</h5>
          </div>
          <div className="project-title-divider" />
          <div className="project-card-body">
            <p>
              This package will run linters on your project for the committed
              files in your branch
            </p>
            <div className="d-flex justify-content-around">
              <a
                href="https://www.npmjs.com/package/lint-prepush"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                NPM
              </a>
              <a
                href="https://github.com/theenadayalank/lint-prepush"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="project-card-footer">
            <small className="text-muted">11 August 2018</small>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-header">
            <h5>ShopEasy </h5>
          </div>
          <div className="project-title-divider" />
          <div className="project-card-body">
            <p>
              Simple Web App to simplify and automate the normal shopping
              process in super market.
            </p>
            <a
              href="https://github.com/theenadayalank/shopeasy"
              className="btn btn-secondary disabled"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
          <div className="project-card-footer">
            <small className="text-muted">Working On</small>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-header">
            <h5>UpComing</h5>
          </div>
          <div className="project-title-divider" />
          <div className="project-card-body">
            <p>Coming Soon...</p>
          </div>
          <div className="project-card-footer">
            <small className="text-muted">Coming Soon</small>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
