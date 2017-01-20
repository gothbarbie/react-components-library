import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Index.css'

import { Button, InputField } from '../../components/'

@CSSModules(styles)
export default class Index extends Component {
  render () {
    return (
      <div styleName="index">
        <h1>React Components Library</h1>
        <InputField
          label="Test"
          name="test"
          placeholder="Placeholder"
          type="text" />
        <Button text="Test" />
      </div>
    )
  }
}
