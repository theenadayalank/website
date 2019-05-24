import React from 'react';

import Header from './../Header';

import 'bootstrap/dist/css/bootstrap.css';


const Layout = ({children}) =>{
  return (
    <div>
      <Header />
      <div className="navbar-nav">
        {children}
      </div>
    </div>
  )
}

export default Layout;