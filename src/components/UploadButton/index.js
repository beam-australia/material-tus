import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import FileInput from '../FileInput'
import { uppy as uppyPropTypes } from '@uppy/react/lib/propTypes'
import { withStyles } from '@material-ui/core/styles'
import CloudIcon from '@material-ui/icons/CloudUpload'
import Button from '@material-ui/core/Button'
import styles from './styles'

const nullInput = {
  click: () => console.log('[UploadButton] No input ref.')
}

class UploadButton extends React.Component {

  input = nullInput

  getInputRef = (input) => {
    this.input = get(input, 'plugin.input', nullInput)
  }

  onClick = () => {
    this.input.click()
    this.props.onClick()
  }

  render() {
    const { uppy, classes, helperText, label, ...props } = this.props
    return (
      <div className={classes.root}>
        <div style={{ display: 'none' }}>
          <FileInput uppy={uppy} ref={this.getInputRef} />
        </div>
        <div>
          <Button {...props} onClick={this.onClick}>
            {label}<CloudIcon className={classes.icon} />
          </Button>
        </div>
        <p className={classes.helperText}>{helperText}</p>
      </div>
    )
  }
}

UploadButton.propTypes = {
  uppy: uppyPropTypes,
  classes: PropTypes.object.isRequired,
  helperText: PropTypes.string,
  ...Button.propTypes
}

UploadButton.defaultProps = {
  helperText: '',
  onClick: () => {},
  color: 'primary',
  variant: 'outlined',
  size: 'medium'
}

export default withStyles(styles)(UploadButton)
