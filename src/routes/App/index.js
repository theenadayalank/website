import React from 'react';
import { 
  BrowserRouter as Router, 
  Route,
} from "react-router-dom";

import Header from '../../components/Header';

import Home from '../Home';
import Projects from '../Projects';
import Blog from '../Blog';


import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const App = () => (
  <Router>
    <section>
      <Header />

      <div className="navbar-nav">
        <Route path="/" exact component={Home} />
        <Route path="/projects/" component={Projects} />
        <Route path="/blogs/" component={Blog} />
      </div>
    </section>
  </Router>
);

export default App;