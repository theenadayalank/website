import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between" id="nav-header">
    <Link to="/" className="navbar-brand">THEENA</Link>

    <nav className="navbar-nav">
      <Link to="/" className="nav-item nav-link" activeClassName="active">Home</Link>
      <Link to="/projects/" className="nav-item nav-link" activeClassName="active">Projects</Link>
      <Link to="/blog/" className="nav-item nav-link" activeClassName="active">Blog</Link>
    </nav>
  </header>
);

export default Header;
