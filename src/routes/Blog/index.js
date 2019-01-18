import React from 'react';
import './style.scss';
import { ReactComponent as DownloadIcon } from './svgs/download.svg';
// import Loader from '../../components/Loader';

class Blog extends React.Component  {

  openExternalLink( url = '') {
    window.open(url, '_blank');
  }

  render() {
    let domainName = window.origin;
    return (
      <section>
        <header className="blog-header w-900 mx-auto px-5 text-center">
          <h3 className="text-prim">THEENADAYALAN</h3>
          <p>Front End Web Developer</p>
          <button className="btn btn-sm btn-light" onClick={() => {this.openExternalLink(`${domainName}/Theenadayalan.pdf`)} }>
            <DownloadIcon className="icon" /> &nbsp;
            Download Resume
          </button>
        </header>

        <div className="blog-container w-900 mx-auto px-3">
          <div className="blog-item">
            <div 
              className="blog-title text-prim" 
              onClick={() => { this.openExternalLink('https://medium.com/@theenadayalan/what-locationtype-property-does-in-emberjs-application-d6e790cdf7de') }}
            >
              What locationType property does in EmberJS application?
            </div>
            <p className="small text-muted">May 24, 2018</p>
            <p>
            The question Why do we have locationType property inside config/environment.js in EmberJS application? raised in my mind when I started to host my website...
            </p>
          </div>
        </div>
      </section>
    )
  }
  
}

export default Blog;