import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import BranchDetail from './Branch-detail/Branch-detail';
class App extends Component {
  render() {
    return (
      <BrowserRouter >
      <div className="App">
      <Switch>
       <Route exact path='/' component={Dashboard}/>
       <Route path='/:id' component={BranchDetail}/>
    
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
