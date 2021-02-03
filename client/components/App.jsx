import React from 'react'
import GetColourfulLyrics from './GetColourfulLyrics'

const App = () => {
	return (
		<div className="container">
			<div className="head-container">
				<h1>Karaoke Time!</h1>
				<h2>Search for a Song</h2>
			</div>
			<div className="song-container">
			<GetColourfulLyrics />
			</div>
		</div>
	)
}

export default App
