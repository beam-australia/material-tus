import React from 'react'
import prettyBytes from 'pretty-bytes-es5'
import { withStyles } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade';
import getIconByMime from '../../lib/getIconByMime'
import DeleteButton from '../DeleteButton'
import styles from './styles.js'

const FilePreview = ({ upload, reset, classes }) => {
  const { color, icon } = getIconByMime(upload.file.type)
  return (
    <Fade in timeout={350}>
      <div className={classes.filePreview}>
        {icon === 'image' &&
          <img
            className={classes.imagePreview}
            alt={upload.file.name}
            src={upload.url}
          />}
        {icon !== 'image' &&
          <div className={classes.fileIcon} style={{ color: color }}>
            {React.createElement(icon, { className: classes.fileIconSvg })}
          </div>}
        <a
          className={classes.fileName}
          href={upload.url}
          target="_blank"
        >{upload.file.name}</a>
        <div className={classes.fileSize}>
          ({prettyBytes(upload.file.size)})
      </div>
        <DeleteButton
          className={classes.deleteButton}
          onClick={reset}
        />
      </div>
    </Fade>
  )
}

export default withStyles(styles)(FilePreview)
