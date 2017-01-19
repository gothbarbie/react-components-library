'use strict'

const config = require('./config')

const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const path = require('path')

const port = config.PORT || 3000

let app = express()

app.use(bodyParser.json())

routes.register(app)

console.log('ENVIRONMENT: ', config.NODE_ENV)

if (config.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const config = require('../webpack.config')

  const compiler = webpack(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))

} else {
  app.use('/static', express.static('dist'))
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port, () => console.log(`Listening on port ${port}`))
