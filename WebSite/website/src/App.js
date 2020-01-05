import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home'
import About from './containers/About/About';
import Project from './containers/Project/Project';
import Contact from './containers/Contact/Contact';




class App extends Component {
  render () {
    return (
    <div>
      <Layout>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout> 
    </div>
  );
  }
}

export default App;
