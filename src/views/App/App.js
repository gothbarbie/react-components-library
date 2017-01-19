import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './App.css'

@CSSModules(styles)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  
  render () {
    return (
      <div styleName="app">
        {this.props.children}
      </div>
    )
  }
}
