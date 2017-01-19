import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Index.css'
import moment from 'moment'

@CSSModules(styles)
export default class Index extends Component {
  render () {
    return (
      <div styleName="index">
        <h1>MomentJS</h1>
        <p>Idag är det: {moment().locale('sv').format('dddd')}</p>
        <p>Nytt dygn: {moment().locale('sv').endOf('day').fromNow()}</p>
        <p>1984 är: {moment('19840221', 'YYYYMMDD').locale('sv').fromNow()}</p>
        <p>{moment().locale('sv').format('LTS')}</p>
      </div>
    )
  }
}
