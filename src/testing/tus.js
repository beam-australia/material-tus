import { defaultProps } from '../components/Tus/propTypes'

export const defaultState = {
  ...defaultProps,
  progress: {
    uploaded: 0,
    total: 0,
    percentage: 0,
  },
  error: null,
  uploading: false,
  upload: null,
  click: () => { },
  reset: () => { }
}

export const withUpload = {
  ...defaultState,
  upload: {
    file: {
      type: 'application/image',
      name: 'test.png',
      size: 10000
    },
    url: 'http://example.com'
  }
}
