import React from 'react'
import classNames from 'classnames'
import withTus from '../../lib/withTus'
import { withStyles } from '@material-ui/core/styles'
import ResetIcon from '@material-ui/icons/Clear'
import styles from './styles'

const Message = ({
  classes,
  icon,
  error = false,
  tus,
  children
}) => (
  <div className={classNames(classes.root, { [classes.error]: error })}>
    {icon && React.cloneElement(icon, { className: classes.icon })}
    {children}
    <ResetIcon
      size={20}
      className={classes.reset}
      color="error"
      onClick={tus.reset}
    />
  </div>
)

export default withStyles(styles)(
  withTus(Message)
)
