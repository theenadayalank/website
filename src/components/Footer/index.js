import React from 'react';

import './style.scss';

// import { ReactComponent as GithubIcon } from './svgs/github-logo.svg';
// import { ReactComponent as TwitterIcon } from './svgs/twitter-logo.svg';
// import { ReactComponent as FacebookIcon } from './svgs/facebook-logo.svg';
// import { ReactComponent as GMailIcon } from './svgs/gmail.svg';

const Loader = () => {
  return (
    <div className="footer-container">
      <div className="footer-social-icons d-flex justify-content-between">
        <a href="https://github.com/theenadayalank" target="_blank" rel="noopener noreferrer">
          {/* <GithubIcon className="svg" /> */}
        </a>
        <a href="https://twitter.com/theenadayalan_k" target="_blank" rel="noopener noreferrer">
          {/* <TwitterIcon className="svg" /> */}
        </a>
        <a href="https://www.facebook.com/theenadayalank" target="_blank" rel="noopener noreferrer">
          {/* <FacebookIcon className="svg" /> */}
        </a>
        <a href="mailto:puduvai.theena@gmail.org" >
          {/* <GMailIcon className="svg" /> */}
        </a>
      </div>
      <span className="small text-muted">
        &copy; Theenadayalan 2019
      </span>
    </div>
  )
}

export default Loader;