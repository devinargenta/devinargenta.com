const querystring = require('querystring');

const authSpotify = async() => {
  const {
    SPOTIFY_REFRESH_TOKEN,
    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET
  } = process.env;

  const str = `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`;


  const basic = new Buffer.from(str).toString('base64');

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN
    })
  });

  return response.json();

};

export const getTopTracks = async () => {
  const { access_token } = await authSpotify();

  const res = await fetch('https://api.spotify.com/v1/me/top/tracks', {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
  return await res.json();
};

export const getLastPlayed = async() => {
  const { access_token } = await authSpotify();
  const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
  if(res.status !== 200) {
    return {
      error: 'No track currently playing'
    }
  }
  return await res.json(); 
}