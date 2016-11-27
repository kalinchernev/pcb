// Small module exposing a configuration options
var path = require('path')
var os = require('os')

module.exports = require(path.resolve(os.homedir() + '/config.json'))