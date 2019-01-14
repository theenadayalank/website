import React from 'react';
import { Link } from "react-router-dom";

import './style.css';

const Loader = () => (
  <div className="loading-container">
    <div className="loader"></div>
    <div className="loader-text">
      No Posts! Visit Later...
    </div>
  </div>
)

export default Loader;