
//imports
import React from 'react'
import GitHubLogo from '../images/gj-github1.png'
import LinkedInLogo from '../images/gj-linkden1.png'


//portfolio with links
function Portfolio(props) {
  return (
    <div className="portLink-wrapper">
      <div id="portLink-container">
        <h1>Please checkout me out through these links:</h1>
        <div id="link-gitHub">
          <h3>GitHub</h3>
          <a href="https://github.com/gjcritchlow21">
            <img src={GitHubLogo}></img>
          </a>
        </div>
        <div id="link-Linkedin">
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/gjcritchlow32176/">
            <img src={LinkedInLogo}></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;