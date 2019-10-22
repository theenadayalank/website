import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './../Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        {/* Title */}
        <title>Theenadayalan | Front End Engineer</title>
      </Helmet>
      <Header />
      <section className="navbar-nav">{children}</section>
    </div>
  );
};

export default Layout;
