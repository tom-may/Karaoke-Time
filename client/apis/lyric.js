import request from 'superagent'


const baseUrl = 'https://api.lyrics.ovh/v1'

const artist = 'luther vandross'
const title = 'never too much'


export function getLyrics() {
    return request.get(baseUrl + '/' + artist + '/' + title)
     .then(res => res.body)
}
