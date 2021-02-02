import React from 'react'
import LyricListing from './LyricListing'


const App = () => {
  return (
    <>
    <h1>Karaoke Time!</h1>

    <h2>Search for a Song</h2>

    {/* Include form with Artist and Title inputs */}

    {/* button that renders lyrics -- See code from class*/}
    <LyricListing />
    </>
  )
}

export default App
