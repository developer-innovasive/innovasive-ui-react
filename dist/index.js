
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./innovasive-ui-react.cjs.production.min.js')
} else {
  module.exports = require('./innovasive-ui-react.cjs.development.js')
}
