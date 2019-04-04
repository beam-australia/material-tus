import PropTypes from 'prop-types'

export const defaultProps = {
  className: '',
  name: 'files',
  endpoint: 'https://uploads.beamaustralia.local',
  allowedFileTypes: [],
  maxFileSize: null,
  helperText: null,
  label: 'Upload',
  onStart: () => { },
  onSuccess: () => { },
  onProgress: () => { },
  onError: () => { },
}

export default {
  name: PropTypes.string,
  endpoint: PropTypes.string,
  allowedFileTypes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  maxFileSize: PropTypes.number,
  helperText: PropTypes.string,
  label: PropTypes.string,
  onStart: PropTypes.func,
  onSuccess: PropTypes.func,
  onProgress: PropTypes.func,
  onError: PropTypes.func,
}
