import React, { useState } from 'react'
import SongSearch from './SongSearch'


const getRandomColour = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const GetColour = (props) => {
  
  const changeColour = () => {
    const interval = setInterval(() => {
      setColour([
        getRandomColour(),
        getRandomColour(),
        getRandomColour(),
        getRandomColour()
      ])
    }, 999)
    return () => clearInterval(interval)
  }


   const [colour, setColour] = useState('none')
  return (
    <div className="container" style={{ backgroundImage: `linear-gradient(to bottom right,${colour[0]},${colour[1]},${colour[2]},${colour[3]})`} }>
      <SongSearch changeColour={changeColour} />
    </div>
  )
}

export default GetColour
