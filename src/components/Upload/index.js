import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Tus from '../Tus'
import UploadButton from '../UploadButton'
import FilePreview from '../FilePreview'
import StatusBar from '../StatusBar'
import styles from './styles'

const Upload = ({ classes, ...props }) => (
  <Tus className={classes.root} {...props}>
    <FilePreview />
    <UploadButton />
    <StatusBar />
  </Tus>
)

Upload.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Upload)
