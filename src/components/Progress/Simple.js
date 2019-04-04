import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green';
import DoneIcon from '@material-ui/icons/Done';
import Message from '../Message';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14
  },
  percentage: {
    marginLeft: theme.spacing.unit,
  },
  done: {
    color: green[400]
  }
})

const Simple = ({ classes, percentage }) => (
  <React.Fragment>
    {percentage < 100 &&
      <Message icon={<CircularProgress size={20} />}>
        <div>
          <span>Uploading:</span>
          <span className={classes.percentage}>{percentage}%</span>
        </div>
      </Message>}
    {percentage > 99 &&
      <Message
        icon={<DoneIcon  color="primary" classes={{ colorPrimary: classes.done }} />}
      >
        <span>Complete</span>
      </Message>}
  </React.Fragment>
)

export default withStyles(styles)(Simple)
