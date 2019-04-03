import React from 'react'
import { storiesOf } from '@storybook/react'
import App from './components/App'
import { Upload } from '@beam-australia/upload'

storiesOf('Upload', module)
  .add('All files', () => (
    <App>
      <Upload debug={true} />
    </App>
  ))
  .add('Documents files', () => (
    <App>
      <Upload debug={true} allowedFileTypes="documents" />
    </App>
  ))
  .add('Images files', () => (
    <App>
      <Upload debug={true} allowedFileTypes="images" />
    </App>
  ))
  .add('Button label', () => (
    <App>
      <Upload debug={true} label="Upload your resumé" />
    </App>
  ))
  .add('100Kb Max', () => (
    <App>
      <Upload debug={true} maxFileSize={100000} />
    </App>
  ))
