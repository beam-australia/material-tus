import React from 'react'
import ReactDOM from 'react-dom'
import { withUpload } from '../../testing/tus'
import FilePreview from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FilePreview tus={withUpload} />, div)
})
