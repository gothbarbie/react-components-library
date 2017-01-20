import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './InputField.css'

@CSSModules(styles)
export default class InputField extends Component {
  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string
  }
  static defaultProps = {
    type: 'text'
  }
  render () {
    const { label, name, placeholder, type } = this.props
    return (
      <div styleName="inputField">
        <label htmlFor={name} styleName="inputField__label">
          {label}
          <input
            name={name}
            placeholder={placeholder}
            styleName="inputField__input"
            type={type} />
        </label>
      </div>
    )
  }
}
