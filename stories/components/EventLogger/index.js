import React from 'react'
import Json from '../Json'

export default class EventLogger extends React.Component {
  state = {
    calling: '',
    params: {},
  }
  logEvent = (name, params) => this.setState({ calling: name, params })
  render() {
    return (
      <div>
        {(() => {
          return this.props.children(this.logEvent)
        })()}
        <Json {...this.state} />
      </div>
    )
  }
}
