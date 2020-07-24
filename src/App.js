import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.scss';
import Header from './components/Header/Header';

const LazyImagePage = React.lazy(() => import('./pages/LazyImagePage'));

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LazyLoader(LazyImagePage)} />
      </Switch>
    </Router>
  )
}

export default App;
