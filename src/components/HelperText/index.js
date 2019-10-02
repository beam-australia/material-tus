import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { getAcceptedText } from '../../lib/acceptedTypes'
import prettyBytes from 'pretty-bytes-es5'
import styles from './styles'

const HelperText = ({ classes, maxFileSize, allowedFileTypes, defaultText }) => {
  const helperText = getAcceptedText(allowedFileTypes, defaultText)
  return (
    <div className={classes.root}>
      {helperText}
      {maxFileSize &&
        <div className={classes.fileSize}>
          Maximum {prettyBytes(maxFileSize)}
        </div>}
    </div>
  )
}

HelperText.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HelperText)
