import propTypes from 'prop-types'
import React, { useEffect } from 'react'
const ReactPictureInPicture = ({ id = 'videopip', callBackSuccessOnEnable, callBackSuccessOnDisable, isActive = false, style, className, autoplay = false, controls = true, loop = false, children, muted = false, classOnEnable }) => {
  ReactPictureInPicture.propTypes = {
    /** set a custom id to the video player (#videopip by default) (not required) */
    id: propTypes.string,
    /** state that allow to turn on or of the pip mode */
    isActive: propTypes.bool,
    /** function that would be called if the media where successfully go to pip mode (not required) */
    callBackSuccessOnEnable: propTypes.func,
    /** function called when the pip mode is successfully disabled */
    callBackSuccessOnDisable: propTypes.func,
    /** style that would be apply to the video element (not required) */
    style: propTypes.object,
    /** className that would be apply to the video element (not required)  */
    className: propTypes.string,
    /** enable autoplay on the video player (not required) */
    autoplay: propTypes.bool,
    /** enable or not video controls  */
    controls: propTypes.bool,
    /** children element that can be include between the <video></video> element */
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
    /** enable loop play on the video */
    loop: propTypes.bool,
    /** mute the video player sound */
    muted: propTypes.bool,
    /** css class that would be activate on the video player when pip mode is enable */
    classOnEnable: propTypes.string
  }
  /**
   * toggle the video player in pip mode 
   */
  const togglePIP = () => {
    let player = document.getElementById(id)
    if (player.readyState === 4) { // if video is ready to play
      if (document.pictureInPictureElement && !isActive) { // if document is already on pip mod
        document.exitPictureInPicture() // disable pip
          .then(() => {
            if (callBackSuccessOnDisable) { // call the success disable callback if set
              callBackSuccessOnDisable()
            }
          })
      } else {
        player.requestPictureInPicture()
          .then(() => { // pip enabled successfully
            if (callBackSuccessOnEnable) { // call the success enable callbakc if set
              callBackSuccessOnEnable()
            }
          })
      }
    }
  }
  /**
   * Handle pip status when isActive is updated
   */
  useEffect(() => {
    togglePIP()
  }, [isActive])

  return (<video id={id} className={`${className} ${isActive ? classOnEnable : ''} `} style={style}  controls={controls} autoPlay={autoplay} loop={loop} muted={muted}>
    {children}
  </video>
  )
}

export default ReactPictureInPicture
