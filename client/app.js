import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { importCustomComponent } from 'utils/dynamicImport';

const HomePage = importCustomComponent('pages/HomePage') || require('pages/HomePage').default;
const AboutPage = importCustomComponent('pages/AboutPage') || require('pages/AboutPage').default;
const LoginPage = importCustomComponent('pages/LoginPage') || require('pages/LoginPage').default;
const ShowPage = importCustomComponent('pages/ShowPage') || require('pages/ShowPage').default;
const FourOhFourPage = importCustomComponent('pages/FourOhFourPage') || require('pages/FourOhFourPage').default;

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/:identifier/:claim' component={ShowPage} />
      <Route exact path='/:claim' component={ShowPage} />
      <Route component={FourOhFourPage} />
    </Switch>
  );
};

export default App;
