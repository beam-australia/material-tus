import React from 'react'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'


const DeleteButton = ({ classes, className, ...props }) => {
  return (
    <Button
      className={classNames(className, classes.root)}
      // variant="outlined"
      size="small"
      color="primary"
      {...props}
    ><DeleteIcon className={classes.icon} /> Delete</Button>
  )
}

export default withStyles(styles)(DeleteButton)
