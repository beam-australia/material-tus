import React from 'react'
import { storiesOf } from '@storybook/react'
import App from './components/App'
import EventLogger from './components/EventLogger'
import { Upload } from '@beam-australia/material-tus'

storiesOf('Upload', module)
  .add('All files', () => (
    <App>
      <Upload />
    </App>
  ))
  .add('Overide helper text', () => (
    <App>
      <Upload helperText="Upload whatever you want!" />
    </App>
  ))
  .add('Preset documents files', () => (
    <App>
      <Upload allowedFileTypes="documents" />
    </App>
  ))
  .add('Preset image files', () => (
    <App>
      <Upload allowedFileTypes="images" />
    </App>
  ))
  .add('Button label', () => (
    <App>
      <Upload label="Upload your resumé" />
    </App>
  ))
  .add('100Kb Max', () => (
    <App>
      <Upload allowedFileTypes="documents" maxFileSize={100000} />
    </App>
  ))
  .add('Events', () =>
    <App>
      <EventLogger>
        {
          logEvent => (
            <Upload
              onStart={state => logEvent('onStart', state)}
              onProgress={state => logEvent('onProgress', state)}
              onSuccess={state => logEvent('onSuccess', state)}
              onError={state => logEvent('onError', state)}
            />
          )
        }
      </EventLogger>
    </App>
  )
