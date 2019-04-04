import React from 'react'
import ReactDOM from 'react-dom'
import { defaultState } from '../../testing/tus'
import Message from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Message
      tus={defaultState}
    />
    , div)
})
