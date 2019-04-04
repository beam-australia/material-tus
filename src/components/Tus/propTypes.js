import PropTypes from 'prop-types'

export const defaultProps = {
  className: '',
  name: 'files',
  endpoint: 'https://master.tus.io/files/',
  allowedFileTypes: [],
  maxFileSize: null,
  helperText: null,
  label: 'Upload',
  onClick: () => { },
  onStart: () => { },
  onSuccess: () => { },
  onProgress: () => { },
  onError: () => { },
  onReset: () => { },
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
  onClick: PropTypes.func,
  onStart: PropTypes.func,
  onSuccess: PropTypes.func,
  onProgress: PropTypes.func,
  onError: PropTypes.func,
  onReset: PropTypes.func,
}
