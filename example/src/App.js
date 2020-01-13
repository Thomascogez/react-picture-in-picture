import React, { useState } from 'react'
import ReactPictureInPicture from 'react-picture-in-picture'


const App = () => {
  const [active, setActive] = useState(false) // state of the picture in picture mode

  const [playerOptions, setPlayerOptions] = useState({ // change player option dynamically
    autoplay : true,
    loop: true,
    muted : true
  })
 
  const successEnable = () => {
    console.log("Pip mode Enable")
  }

  const successDisable = () => {
    console.log("pip mode disable");
  }

  return (
    <div className='video-container'>
      <h1>React Picture in Picture</h1>
      <ReactPictureInPicture 
        className='video' 
        loop = {playerOptions.loop}
        autoplay = {playerOptions.autoplay}
        control = {playerOptions.control}
        isActive={active}
        muted = {playerOptions.muted}
        callBackSuccessOnDisable= {() => successDisable()}
        callBackSuccessOnEnable={() => successEnable()}  
      >
        <source src="https://cdn.arnellebalane.com/videos/original-video.mp4"/>
      </ReactPictureInPicture>

      <button onClick={() => setActive(!active)}>Toggle Picture in Picture mode</button>

      <div>
        <h3>Video player options</h3>
        <input checked={playerOptions.autoplay} onChange={() =>setPlayerOptions({...playerOptions, autoplay: !playerOptions.autoplay})} id="autoplay" type="checkbox" value="autoplay" />
        <label htmlFor="autoplay">autoplay</label>
        <input checked={playerOptions.loop} onChange={() =>setPlayerOptions({...playerOptions, loop: !playerOptions.loop })} id="loop" type="checkbox" value="autoplay" />
        <label htmlFor="loop">video loop</label>
        <input checked={playerOptions.muted} onChange={() =>setPlayerOptions({...playerOptions, muted: !playerOptions.muted })} id="muted" type="checkbox" value="autoplay" />
        <label htmlFor="muted">muted</label>
      </div>
    </div>
  )
}

export default App
