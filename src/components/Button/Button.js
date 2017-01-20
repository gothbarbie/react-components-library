import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Button.css'

@CSSModules(styles, { allowMultiple: true })
export default class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    size: PropTypes.string,
    text: PropTypes.string
  }
  static defaultProps = {
    size: 'medium',
    text: 'text'
  }
  render () {
    const { onPress, size, text } = this.props
    return (
      <button onPress={onPress} styleName={`button button--size-${size}`}>
        <div styleName="button__text">{text}</div>
      </button>
    )
  }
}
