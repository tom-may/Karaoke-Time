import React, { useState } from 'react'
import LyricListing from './LyricListing'

const SongSearch = (props) => {
  const [message, setMessage] = useState('')

  const [formData, setFormData] = useState({
    artist: '',
    songTitle: ''
  })

  const handleChange = (event) => {

    setFormData(currentFormData => {
      return {
        ...currentFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setMessage('')

    if(formData.artist.length == 0) {
      setMessage('You need to fill out the artist')
      console.log('Artist data is not ready')
    } else if (formData.songTitle.length == 0) { 
        setMessage('You need to fill out the song title')
        console.log('Song data is not ready')
    } else {
      console.log('Data is ready')
      console.log(formData)
      }

  }
  
  return (
      <>
    <form onSubmit={handleSubmit}>
      {message && <span className="message">{message}</span>}
      <label>
        <br></br>
        Artist:
        <br></br>
        <input type="text" name="artist" onChange={(event) => handleChange(event)} required={true}/>
      </label>
      <br></br>

      <label>
      <br></br>
        Song Title:
        <br></br>
        <input type="text" name="songTitle" onChange={handleChange} required={true}/>
      </label>
      <br></br>
      <br></br>

      <button>Send</button>
    </form>
    {LyricListing(formData)}
    </>
  )
}

export default SongSearch