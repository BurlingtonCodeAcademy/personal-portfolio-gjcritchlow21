import React from 'react'
import GitHubLogo from './images/gj-github.png'
import LinkedInLogo from './images/gj-linkden.png'

function Portfolio(props) {
  return (
    <div className="portLink-wrapper">
      <div id="portLink-container">
        <h1>Please checkout me out through these links:</h1>
        <div id="link-gitHub">
          <h3>GitHub</h3>
          <button id="gitHub-button">GitHub</button>
          <img src={GitHubLogo}></img>
        </div>
        <div id="link-Linkedin">
          <h3>LinkedIn</h3>
          <button id="linkedIn-button">LinkedIn</button>
          <img src={LinkedInLogo}></img>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;