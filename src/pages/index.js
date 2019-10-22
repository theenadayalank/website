import React from 'react';
import { Helmet } from 'react-helmet';

import './style.scss';

import Layout from './../components/Layout';
import Home from './../components/Home';

const App = () => {
  return (
    <div>
      <Helmet title="Theenadayalan | Front End Engineer" />
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
