import React from 'react'
import BannerImage from './components/BannerImage'
import BlockExample from './components/button'
import BasicExample from './components/headerBar'
import ash_ev from './pics/ash_ev_small.jpg'
import dave_ash from './pics/dave_ash_small.jpg'
import dave_ash_ethan from './pics/ash_dave_ethan_small.jpg'
import ethan from './pics/ethan_alone_small.jpg'

import './components/master.css'


import './App.css'

function App() {
  return (
    <div className="App">
      <BasicExample />
      <header className="App-header">
      <BannerImage />
      <BlockExample />
      <button onclick="location.href='http://www.example.com'" type="button"> www.example.com</button>
        <div>
          <h1>Photojournal of the recent NYC trip!</h1>
          <h3>Evan French</h3>
          <img src={ash_ev} className='reel_img' location='location' caption='caption'/>
          <img src={dave_ash} className='reel_img' location='location' caption='caption'/>
          <img src={dave_ash_ethan} className='reel_img' location='location' caption='caption'/>
          <img src={ethan} className='reel_img' location='location' caption='caption'/>

        </div>
        
      </header>
    </div>
  )
};

export default App;
