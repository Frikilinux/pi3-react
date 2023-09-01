export const NUCBAZ_API = {
  API_PROXY: process.env.REACT_APP_API_PROXY,
  ROOT: 'https://nucbaz-api.vercel.app',
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  ORDERS: '/orders',
}

export const DEEZER_API = {
  // API_PROXY: 'https://cors.systec.ar:10300/', //
  API_PROXY: process.env.REACT_APP_API_PROXY,
  ROOT: 'https://api.deezer.com',
  GENRES: '/genre',
  ALBUM: '/album',
  ARTIST: '/artist',
  CHART: '/chart'
}
