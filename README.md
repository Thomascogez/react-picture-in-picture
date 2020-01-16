# react-picture-in-picture

> React Component that allow you to easily implement the Picture-in-Picture API (https://w3c.github.io/picture-in-picture/) in your app

[![NPM](https://img.shields.io/npm/v/react-picture-in-picture.svg)](https://www.npmjs.com/package/react-picture-in-picture) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![alt text](demo.gif)

[play with the demo](https://thomascogez.github.io/react-picture-in-picture)

## Install

```bash
npm install --save react-picture-in-picture
```
or
```bash
yarn add react-picture-in-picture
```

## Usage

```jsx
import React, { useState } from 'react'

import Reactpip from 'react-picture-in-picture'

const ReactpipExemple = () =>{
  const[active, setActive] = useState(false)
  render () {
    return (
      <>
        <Reactpip isActive= {active} >
          <source src="https://cdn.arnellebalane.com/videos/original-video.mp4"/>
        </Reactpip>
        <button onClick = {() => setActive(!active)}>Toggle Picture in Picture</button>
      </>
    )
  }
}
export default ReactpipExemple
```

## Props

Here the list of all props :

| Name                     | type         | Description                                                  | Is required ? | Default value |
| ------------------------ | ------------ | ------------------------------------------------------------ | ------------- | ------------- |
| id                       | string       | set a custom id to the video player                          | no            | 'videopip'    |
| isActive                 | boolean      | state that allow to turn on or of the pip mode               | no            | false         |
| callBackSuccessOnEnable  | function     | function that would be called if the media where successfully go to pip mode | no            | :x:           |
| callBackSuccessOnDisable | function     | function called when the pip mode is successfully disabled   | no            | :x:           |
| style                    | style object | style that would be apply to the video element               | no            | :x:           |
| className                | string       | className that would be apply to the video element           | no            | :x:           |
| autoplay                 | boolean      | enable autoplay on the video player                          | no            | false         |
| controls                 | boolean      | enable or not video controls                                 | no            | true          |
| children                 | node         | children element that can be include between the element (eg : < source > tag) | no            | :x:           |
| loop                     | boolean      | enable loop play on the video                                | no            | false         |
| muted                    | boolean      | mute the video player sound                                  | no            | false         |
| classOnEnable            | string       | css class that would be activate on the video player when pip mode is enable | no            | :x:           |



## License

MIT © [Thomascogez](https://github.com/Thomascogez)
