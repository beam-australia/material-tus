import React from 'react'
import StatusBar from '@uppy/react/lib/StatusBar'
import { uppy as uppyPropTypes } from '@uppy/react/lib/propTypes'
import '@uppy/status-bar/dist/style.min.css'
import './styles.css'

class Progress extends React.Component {
  render() {
    return (
      <div className="beam beam-uploader-progress">
        <StatusBar
          uppy={this.props.uppy}
          showProgressDetails={true}
          hideUploadButton={false}
          hideAfterFinish={false}
        />
      </div>
    )
  }
}

Progress.propTypes = {
  uppy: uppyPropTypes,
}

Progress.defaultProps = {
}

export default Progress
