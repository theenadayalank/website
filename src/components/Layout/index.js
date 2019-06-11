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
      <div className="navbar-nav">{children}</div>
    </div>
  );
};

export default Layout;
