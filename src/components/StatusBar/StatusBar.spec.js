import React from 'react'
import ReactDOM from 'react-dom'
import { withUpload } from '../../testing/tus'
import StatusBar from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <StatusBar tus={withUpload} />
    , div)
})
