import React from 'react';
import '../App.css';
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import { Switch, Route } from 'react-router-dom'
import codeBeast from '../images/codebeasts.png'


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
          <img id="beast" src={codeBeast}></img>
        </div>
      </div>
      <div id="allContacts">
        <div id="contactMe-container">
          <h2>Please Contact Me</h2>
          <h4>GJCritchlow21@gmail.com</h4>
        </div>
        <div id="contact-wrapper">
          <div id='name-email'>
            <input id='name' class='info-input' type='text' placeholder='Name' />
            <input id='email' class='info-input' type='text' placeholder='Email' />
          </div>
          <div id='message-container'>
            <textarea id='message' class='info-input' placeholder='Message'></textarea>
          </div>
          <div class='button-bar'>
            <div class='send-button button'>
              <p class='btn-text'>SEND MESSAGE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App; 