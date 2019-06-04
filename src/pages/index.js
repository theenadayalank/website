import React from 'react';
import './style.scss';

import Layout from './../components/Layout';
import Home from './../components/Home';

const App = () => {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
