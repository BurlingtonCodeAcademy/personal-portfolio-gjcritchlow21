import React from 'react'
import KayakImg from './images/gjKayak.jpg'
import PercyOne from './images/percyRaincoat.jpg';
import ProBowl from './images/gjProbowl.jpg';
import beer from './images/beer.jpg'

function About(props) {
  return (
    <div className='about-container' id='about-container'>
      <div id='title'>
        <h1>The Path of a new Coder</h1>
      </div>
      <div id='about-paraOne'>
        <p>I am a “green-horn” Full Stack Web Developer navigating through the ever-changing languages of coding. Javascript, HTML, CSS and React are my strongest tools, but as my expertise grows so will my toolbox. I am currently working to expand my knowledge and network as I continue to travel down the rabbit hole of programming. My goal is to use programming to serve the community and hopefully make it a better place.</p>
      </div>
      <div id='pic1'>
        <img id="kayak" src={KayakImg}></img>
      </div>
      <div id='about-img-block'>
        <img id="probowl" src={ProBowl}></img>
        <img id="percy" src={PercyOne}></img>
        <img id="beer" src={beer}></img>
      </div>
      <div id='about-paraTwo'>
        <p> I decided to jump into this field because I recognized how programming influences the world we live in and is the building blocks of the digital world we play in. As I became enthralled with this new found passion, I enrolled at Burlington Code Academy in February of 2020 and have immersed myself fully ever since. With my curiosity piqued and the red pill taken, I have jumped head first into this exciting and new(at least to me) world of programming. So much is programming! It’s not just a tool we use to live, but it’s a way to connect us together. It has changed the way I look at the world and the way I interact with it, but more importantly, it has challenged me in many new and exciting ways!</p>
      </div>
    </div>
  )
}

export default About;