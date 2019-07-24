import React from 'react'
import PropTypes from 'prop-types'
import withTus from '../../lib/withTus'
import { withStyles } from '@material-ui/core/styles'
import CloudIcon from '@material-ui/icons/CloudUpload'
import Button from '@material-ui/core/Button'
import HelperText from '../HelperText'
import styles from './styles'

const UploadButton = ({ classes, tus, ...props }) => {
  if (tus.upload || (tus.progress.percentage > 99 && tus.uploading === false)) {
    return null
  }
  return (
    <div className={classes.root}>
      <div>
        <Button {...props} onClick={tus.click} disabled={tus.uploading}>
          {tus.buttonLabel}<CloudIcon className={classes.icon} />
        </Button>
      </div>
      <HelperText
        allowedFileTypes={tus.allowedFileTypes}
        defaultText={tus.helperText}
        maxFileSize={tus.maxFileSize}
      />
    </div>
  )
}

UploadButton.propTypes = {
  classes: PropTypes.object.isRequired,
  ...Button.propTypes
}

UploadButton.defaultProps = {
  color: 'primary',
  variant: 'outlined',
  size: 'medium'
}

export default withStyles(styles)(
  withTus(UploadButton)
)
