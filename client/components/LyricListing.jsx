import React, { useEffect, useState } from 'react'
import { getLyrics } from '../apis/lyric'

const LyricListing = (props) => {
console.log(props)

// useEffect(() => {
//     fetchLyrics()
//   }, [])

 return (
     <>
        <h2>{props.artist}</h2>
        <h3>{props.songTitle}</h3>
        <p>{props.lyrics}</p>
     </>
 )
}

export default LyricListing