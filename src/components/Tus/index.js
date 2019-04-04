import React from 'react'
import Input from './Input'
import prettyBytes from 'pretty-bytes'
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
    this.state.upload.abort()
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
    this.callEvent('onProgress')
    this.setState({ progress })
  }

  onSuccess = (upload) => {
    this.callEvent('onSuccess')
    this.setState({ upload, uploading: false })
  }

  onError = (upload, error) => {
    this.callEvent('onError')
    this.setState({ error: 'Failed to upload, reset to try again.' })
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
