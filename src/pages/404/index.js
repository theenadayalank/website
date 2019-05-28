import React from 'react';
import { Link } from "gatsby";

import './style.scss';

const PageNotFound = () => (
  <div className="page-not-found-container text-center">
  <div className="page-not-found-content">
    <h1>404</h1>
    <h3>There's nothing here.</h3> <br />
    <Link to="/" className="btn btn-info">Goto Home Page</Link>
  </div>
</div>
)

export default PageNotFound;