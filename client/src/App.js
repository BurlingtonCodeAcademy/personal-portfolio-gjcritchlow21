import React from 'react';
import './App.css';
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/about'} component={About} />
        <Route path={'/portfolio'} component={Portfolio} />
      </Switch>
    </div>

  );
}

function Home(props) {
  return (
    <div className="App">
      <h1>Hello from the home page!</h1>
    </div>
  )
}

export default App;