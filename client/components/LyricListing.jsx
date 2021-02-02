import React, { useEffect, useState } from 'react'
import { getLyrics } from '../apis/lyric'

const LyricListing = (formData) => {
    const [lyrics, setLyrics] = useState([])


const fetchLyrics = () => { 
    getLyrics()
      .then(
          fetchedLyrics => {
          setLyrics(fetchedLyrics)
          console.log(fetchedLyrics)
      })
}

useEffect(() => {
    fetchLyrics()
  }, [])

 return (
     <>
     {/* Show Artist and Title */}
        <h2>Artist: {formData.artist}</h2>
        <h3>Title: {formData.songTitle}</h3>
        <p>{lyrics.lyrics}</p>
     </>
 )
}

export default LyricListing