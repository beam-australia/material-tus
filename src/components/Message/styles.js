import red from '@material-ui/core/colors/red'

export default theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  reset: {
    marginLeft: 'auto',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  error: {
    color: red[500]
  }
})
