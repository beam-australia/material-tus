import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import getIconByMime from '../../lib/getIconByMime'
import DeleteButton from '../DeleteButton'
import styles from './styles.js'

const FilePreview = ({ onDelete, file, classes }) => {
  const { color, icon } = getIconByMime(file.type)

  return (
    <div className={classes.filePreview}>
      {icon === 'image' &&
        <img
          className={classes.imagePreview}
          alt={file.name}
          src={file.uploadURL}
        />}
      {icon !== 'image' &&
        <div className={classes.fileIcon} style={{ color: color }}>
          {React.createElement(icon, { className: classes.fileIconSvg })}
        </div>}
      <a
        className={classes.fileName}
        href={file.uploadURL}
        target="_blank"
      >{file.name}</a>
      <div className={classes.fileSize}>
        ({Math.round(file.size / 1024)}Kb)
      </div>
      <DeleteButton
        className={classes.deleteButton}
        onClick={onDelete}
      />
    </div>
  )
}

FilePreview.propTypes = {
  file: PropTypes.object,
}

export default withStyles(styles)(FilePreview)
