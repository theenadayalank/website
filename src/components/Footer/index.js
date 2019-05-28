import React from 'react';

import './style.scss';

import GithubIcon from './../../assets/svgs/github-logo.svg'
import TwitterIcon from './../../assets/svgs/twitter-logo.svg';
import FacebookIcon from './../../assets/svgs/facebook-logo.svg';
import GMailIcon from './../../assets/svgs/gmail.svg';

const Loader = () => {
  return (
    <div className="footer-container">
      <div>
        <div className="footer-social-icons d-flex justify-content-between">
          <a href="https://github.com/theenadayalank" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="svg" />
          </a>
          <a href="https://twitter.com/theenadayalan_k" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="svg" />
          </a>
          <a href="https://www.facebook.com/theenadayalank" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="svg" />
          </a>
          <a href="mailto:puduvai.theena@gmail.org" >
            <GMailIcon className="svg" />
          </a>
        </div>
        <div className="small text-muted">&copy; Theenadayalan 2019 </div>
      </div>
    </div>
  )
}

export default Loader;