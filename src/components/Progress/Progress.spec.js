import React from 'react'
import ReactDOM from 'react-dom'
import Progress from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Progress
      uploading={true}
      percentage={40}
    />
    , div)
})
