Ractive = require 'ractive'
emblem = require 'emblem'
umd = require 'umd-wrapper'
sysPath = require 'path'

module.exports = class RactiveCompiler
  brunchPlugin: yes
  type: 'template'
  extension: 'rac'
  pattern: /\.(?:rac|ractive)$/

  constructor: (@config) ->
    null

  compile: (data, path, callback) ->
    try
      hbdata = emblem.default.compile data
      result = umd JSON.stringify Ractive.parse hbdata
    catch err
      error = err
    finally
      callback error, result

  include: [
    (sysPath.join __dirname, '..', 'vendor',
      'Ractive.runtime-0.3.6.js')
  ]
