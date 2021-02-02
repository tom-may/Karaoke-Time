import React, { useEffect, useState } from 'react'
import { getLyrics } from '../apis/lyric'

const LyricListing = (props) => {
console.log(props)

// useEffect(() => {
//     fetchLyrics()
//   }, [])

 return (
     <>
     {/* Show Artist and Title */}
        <h2>Artist: {props.artist}</h2>
        <h3>Title: {props.songTitle}</h3>
        <p>{props.lyrics}</p>
     </>
 )
}

export default LyricListing