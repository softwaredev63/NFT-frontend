import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Connect from './components/connect'
import Activity from './components/activity'
import Create from './components/create'
import CreateCollectible from './components/createCollectible'
import Items from './components/items'
import Following from './components/following'
import Howitworks from './components/howitworks';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/connect' component={Connect} />
          <Route exact path='/activity' component={Activity} />
          <Route exact path='/create' component={Create} />
          <Route exact path='/create/:id' component={CreateCollectible} />
          <Route exact path='/items' component={Items} />
          <Route exact path='/following' component={Following} />
          <Route exact path='/howitworks' component={Howitworks}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
