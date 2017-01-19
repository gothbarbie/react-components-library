import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './NotFound.css'

@CSSModules(styles)
export class NotFound extends Component {
  render () {
    return (
      <div styleName="not-found">
        404 not found
      </div>
    )
  }
}
