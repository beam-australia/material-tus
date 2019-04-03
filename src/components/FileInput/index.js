import React from 'react'
import PropTypes from 'prop-types'
import FileInputPlugin from '@uppy/file-input'
import { uppy as uppyPropTypes } from '@uppy/react/lib/propTypes'

class FileInput extends React.Component {
  componentDidMount() {
    this.installPlugin()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps)
      this.installPlugin()
    }
  }

  componentWillUnmount() {
    this.uninstallPlugin()
  }

  installPlugin() {
    const { uppy } = this.props
    const options = Object.assign(
      { id: 'react:FileInput', pretty: false },
      this.props,
      { target: this.container }
    )
    delete options.uppy
    uppy.use(FileInputPlugin, options)
    this.plugin = uppy.getPlugin(options.id)
  }

  uninstallPlugin(props = this.props) {
    const uppy = props.uppy
    uppy.removePlugin(this.plugin)
  }

  render() {
    return React.createElement('div', {
      ref: (container) => {
        this.container = container
      }
    })
  }
}

FileInput.propTypes = {
  uppy: uppyPropTypes,
  inputName: PropTypes.string,
}

FileInput.defaultProps = {

}

export default FileInput
