import React, { useEffect, useState } from 'react'
import { getLyrics } from '../apis/lyric'

const LyricListing = (props) => {
 return (
     <>
        <h2>{props.artist}</h2>
        <h3>{props.songTitle}</h3>
        <pre> 
            {/* pre tag = pre-format, easiest solution as lyrics are pre
            formatted nicely.
            Proper solution would be to use nl2br - newline-break */}
            <p>{props.lyrics}</p>
        </pre>
     </>
 )
}

export default LyricListing