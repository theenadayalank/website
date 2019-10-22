import React from 'react';

import Header from './../Header';

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      <section className="navbar-nav">{children}</section>
    </section>
  );
};

export default Layout;
