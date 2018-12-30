import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
  <div className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">

    <Link to="/" className="navbar-brand">TD</Link>

    <div className="navbar-nav">
      <Link to="/" className="nav-item nav-link">Home</Link>
      <Link to="/projects/" className="nav-item nav-link">Projects</Link>
      <Link to="/blogs/" className="nav-item nav-link">Blogs</Link>
    </div>

  </div>
);

export default Header;