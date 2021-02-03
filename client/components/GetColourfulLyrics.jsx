import React, { useState, useEffect } from 'react'
import SongSearch from './SongSearch'


const getRandomColour = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`


const GetColour = (props) => {

  useEffect(() => {
    const interval = setInterval(() => {
      setColour(
        getRandomColour()
      )
    }, 800)
    return () => clearInterval(interval)
  }, [])

   const [colour, setColour] = useState('none')
  return (
    <div className="container" style={{ backgroundColor: colour }}>
      <SongSearch setColour={setColour} getRandomColour={getRandomColour}/>
    </div>
  )
}

export default GetColour
