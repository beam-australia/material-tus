import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withTus from '../../lib/withTus'
import Message from '../Message'
import Progress from '../Progress'
import styles from './styles';

class StatusBar extends React.Component {
  render() {
    const { classes } = this.props
    const { progress, uploading, error } = this.props.tus
    return (
      <div className={classes.root}>
        <Progress
          {...progress}
          uploading={uploading && !error}
        />
        {error &&
          <Message icon={null} error={true}>
            {error}
          </Message>}
      </div>
    )
  }
}

StatusBar.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(
  withTus(StatusBar)
)
