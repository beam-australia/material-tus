import React from 'react'
import tus from 'tus-js-client'
import { getAcceptedTypes } from '../../lib/acceptedTypes'

export class Input extends React.Component {
  onStart = (upload) => {
    if (this.props.onStart(upload) !== false) {
      upload.start()
    }
  }

  onSuccess = (upload) => {
    this.props.onSuccess(upload)
  }

  onProgress = (upload, { uploaded, total }) => {
    const percentage = Math.round(uploaded / total * 100)
    this.props.onProgress(upload, { uploaded, total, percentage })
  }

  onError = (upload, error) => {
    this.props.onError(upload, error)
  }

  onChange = (event) => {
    if (event.target.files.length) {
      const file = event.target.files[0]
      const upload = this.createUpload(file)
      this.onStart(upload)
    }
  }

  createUpload = (file) => {
    const upload = new tus.Upload(file, {
      endpoint: this.props.endpoint,
      retryDelays: [0, 3000, 5000],
      resume: false,
      metadata: {
        filename: file.name,
        filetype: file.type
      },
      onError: (error) => this.onError(upload, error),
      onProgress: (uploaded, total) => this.onProgress(upload, { uploaded, total }),
      onSuccess: () => this.onSuccess(upload),
    })
    return upload;
  }

  render() {
    const { name, allowedFileTypes, innerRef } = this.props
    const accept = Array.isArray(allowedFileTypes) ?
      allowedFileTypes.join() : getAcceptedTypes(allowedFileTypes);
    return (
      <input
        name={name}
        style={{ display: 'none' }}
        type="file"
        accept={accept}
        onChange={this.onChange}
        ref={innerRef}
      />
    )
  }
}

export default React.forwardRef((props, ref) =>
  <Input innerRef={ref} {...props} />
);
