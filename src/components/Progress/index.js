import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Simple from './Simple'
import styles from './styles'

const Progress = ({ classes, className, uploading, percentage }) => {
  if (uploading === false && percentage === 0) {
    return null
  }
  if (percentage > 99 && uploading === false) {
    return null
  }
  return (
    <div className={classNames(className)}>
      <LinearProgress
        variant="determinate"
        value={percentage}
        className={classes.linear}
      />
      <Simple percentage={percentage} />
    </div>
  )
}

Progress.propTypes = {

}

Progress.defaultProps = {
}

export default withStyles(styles)(Progress)
