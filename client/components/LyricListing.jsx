import React, { useEffect, useState } from 'react'
import { getLyrics } from '../apis/lyric'

const LyricListing = () => {
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
        <h2>Artist: Luther Vandross</h2>
        <h3>Title: Never Too Much</h3>
        <p>{lyrics.lyrics}</p>
     </>
 )
}

export default LyricListing