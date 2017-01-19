import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { App, Index, NotFound } from './views'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route
      component={App}
      path="/">
      <IndexRoute component={Index} />
    </Route>
    <Route component={NotFound} path="*" />
  </Router>
), document.getElementById('root'))
