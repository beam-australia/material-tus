export default function getDefaultEndpoint() {
  return process && process.env && process.env.REACT_APP_UPLOADS_HOST
    || window && window.UPLOADS_HOST
    || 'https://uploads.beamaustralia.local'
}
