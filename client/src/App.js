import React from 'react';
import './App.css';
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import { Switch, Route } from 'react-router-dom'
import profPic from './images/linkedin.png'


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
    <div className="home-container">
      <div id="homeTop-wrapper">
        <div id='blurb'>
          <h1>A native Vermonter trying to make a difference in the world through programming</h1>
        </div>
        <div id='image-wrapper'>
          <img id="profPic" src={profPic}></img>
        </div>
      </div>
      <div id="contact-wrapper">
        <div id='name-email'>
          <input id='name' class='info-input' type='text' placeholder='name' />
          <input id='email' class='info-input' type='text' placeholder='email' />
        </div>
        <div id='message-container'>
          <textarea id='message' class='info-input' placeholder='message'></textarea>
        </div>
        <div class='button-bar'>
          <div class='send-button button'>
            <p class='btn-text'>SEND MESSAGE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App; 