import React from 'react'
import Input from './Input'
import prettyBytes from 'pretty-bytes-es5'
import propTypes, { defaultProps } from './propTypes'
import TusContext from './TusContext'

class Tus extends React.Component {
  constructor(props) {
    super(props)
    this.fileInput = React.createRef();
    this.inputEvents = this.events.reduce((map, event) => ({
      ...map,
      [event]: this[event]
    }), {})
    this.callEvent.bind(this)
  }

  events = [
    'onClick',
    'onStart',
    'onProgress',
    'onSuccess',
    'onError',
    'onReset',
  ]

  initialState = {
    progress: {
      uploaded: 0,
      total: 0,
      percentage: 0,
    },
    error: null,
    uploading: false,
    upload: null,
  }

  state = {
    ...this.initialState
  }

  callEvent(event, override) {
    if (typeof this.props[event] === 'function') {
      this.props[event](override || this.state)
    }
  }

  click = () => {
    this.callEvent('onClick')
    if (this.fileInput.current) {
      this.fileInput.current.click()
    }
  }

  reset = () => {
    if (this.fileInput.current) {
      this.fileInput.current.value = null
    }
    if (typeof this.state.upload.abort === 'function') {
      this.state.upload.abort()
    }
    this.setState(this.initialState)
    this.callEvent('onReset', this.initialState)
  }

  onStart = (upload) => {
    const { maxFileSize } = this.props
    this.setState({ upload, uploading: true })
    this.callEvent('onStart')
    if (maxFileSize && upload.file.size > maxFileSize) {
      this.setState({ error: `File size exceeds ${prettyBytes(maxFileSize)}` })
      this.callEvent('onError')
      return false
    }
  }

  onProgress = (upload, progress) => {
    this.setState({ progress })
    this.callEvent('onProgress')
  }

  onSuccess = (upload) => {
    this.setState({ upload, uploading: false })
    this.callEvent('onSuccess')
  }

  onError = (upload, error) => {
    this.setState({ error: 'Failed to upload, reset to try again.' })
    this.callEvent('onError')
  }

  render() {
    const { className, children, ...props } = this.props
    return (
      <div className={className}>
        <TusContext.Provider
          value={{
            ...this.state,
            click: this.click,
            reset: this.reset,
            allowedFileTypes: props.allowedFileTypes,
            maxFileSize: props.maxFileSize,
            helperText: props.helperText,
            endpoint: props.endpoint,
            buttonLabel: props.label,
            inputName: props.name
          }}
        >
          <Input ref={this.fileInput} {...props} {...this.inputEvents} />
          {children}
        </TusContext.Provider>
      </div>
    )
  }
}

Tus.propTypes = propTypes

Tus.defaultProps = defaultProps

export default Tus
