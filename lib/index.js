// Generated by CoffeeScript 1.9.3
var Ractive, RactiveCompiler, emblem, sysPath, umd;

Ractive = require('ractive');

emblem = require('emblem');

umd = require('umd-wrapper');

sysPath = require('path');

module.exports = RactiveCompiler = (function() {
  RactiveCompiler.prototype.brunchPlugin = true;

  RactiveCompiler.prototype.type = 'template';

  RactiveCompiler.prototype.extension = 'rac';

  RactiveCompiler.prototype.pattern = /\.(?:rac|ractive)$/;

  function RactiveCompiler(config) {
    this.config = config;
    null;
  }

  RactiveCompiler.prototype.compile = function(data, path, callback) {
    var err, error, hbdata, result;
    try {
      hbdata = emblem["default"].compile(data);
      return result = umd(JSON.stringify(Ractive.parse(hbdata)));
    } catch (_error) {
      err = _error;
      return error = err;
    } finally {
      callback(error, result);
    }
  };

  RactiveCompiler.prototype.include = [sysPath.join(__dirname, '..', 'vendor', 'Ractive.runtime-0.3.6.js')];

  return RactiveCompiler;

})();
