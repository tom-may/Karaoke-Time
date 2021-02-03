import request from 'superagent'


const baseUrl = 'https://api.lyrics.ovh/v1'

export function getLyrics(formData) {

	const artist = formData.artist
	const title = formData.songTitle
	return request.get(baseUrl + '/' + artist + '/' + title)
		.then(res => res.body)
}

