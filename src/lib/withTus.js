import React from 'react'
import TusContext from '../components/Tus/TusContext'

export default (WrappedComponent) => props => (
  <TusContext.Consumer>
    {tus => (
      <WrappedComponent tus={tus} {...props} />
    )}
  </TusContext.Consumer>
)
