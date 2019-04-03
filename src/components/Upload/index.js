import React from 'react'
import PropTypes from 'prop-types'
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import { withStyles } from '@material-ui/core/styles'
import Progress from '../Progress'
import UploadButton from '../UploadButton'
import FilePreview from '../FilePreview'
import getDefaultEndpoint from '../../lib/getDefaultEndpoint'
import { getAcceptedTypes, getAcceptedText } from '../../lib/getAcceptedTypes'
import styles from './styles';
import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'

const initialState = {
  upload: {
    successful: [],
    failed: [],
    uploadID: '',
  },
  isUploading: false,
  info: '',
}

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.uppy = Uppy({
      ...props.uppyProps,
      restrictions: {
        allowedFileTypes: getAcceptedTypes(props.allowedFileTypes),
        maxFileSize: props.maxFileSize
      }
    })
    this.uppy.use(Tus, { endpoint: props.endpoint })
    this.uppy.on('complete', this.onComplete)
    this.uppy.on('upload', this.onStart)
    this.uppy.on('file-removed', this.onReset)
  }

  state = initialState

  componentWillUnmount() {
    this.uppy.close()
  }

  onStart = () => {
    this.setState({ isUploading: true })
  }

  onComplete = (response) => {
    this.setState({ upload: response, isUploading: false })
  }

  onReset = () => {
    this.uppy.reset()
    this.setState(initialState)
  }

  render() {
    const { upload: { successful, failed }, isUploading } = this.state
    const { classes, allowedFileTypes, label } = this.props

    const hasUploadedFiles = successful.length > 0
    const hasFailedFiles = failed.length > 0
    return (
      <div className={`${classes.root} beam-uploader`}>
        {hasUploadedFiles === true &&
          <FilePreview
            file={successful[0]}
            onDelete={this.onReset}
          />}
        {hasUploadedFiles === false &&
          <UploadButton
            uppy={this.uppy}
            disabled={isUploading || hasFailedFiles}
            helperText={getAcceptedText(allowedFileTypes)}
            label={label}
          />}
        <Progress uppy={this.uppy} />
      </div>
    )
  }
}

Upload.propTypes = {
  label: PropTypes.string,
  endpoint: PropTypes.string,
  allowedFileTypes: PropTypes.string,
  maxFileSize: PropTypes.number,
  classes: PropTypes.object,
  uppyProps: PropTypes.object
}

Upload.defaultProps = {
  label: 'Browse',
  endpoint: getDefaultEndpoint(),
  allowedFileTypes: null,
  maxFileSize: null,
  uppyProps: {
    allowMultipleUploads: false,
    autoProceed: true,
    debug: false,
  }
}

export default withStyles(styles)(Upload)
