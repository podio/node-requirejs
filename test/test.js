
var fs = require('fs');

var requireConfig = JSON.parse(fs.readFileSync('./test/requirejs.config.json', 'utf-8'));
var requirejs = require('../lib/node-requirejs').requirejs(requireConfig);

var expect = require('unexpected');

describe('node-requirejs', function() {

  describe('should correctly instantiate requirejs', function() {

    it('requirejs should be defined', function() {
      expect(requirejs, 'to be defined')
    });

    it('should throw a meaningful error when configured with an array', function() {
      var arrayConfig = function() {
        return require('../lib/node-requirejs').requirejs(['some', 'weird', 'config']);
      };
      expect(arrayConfig, 'to throw', 'requirejs configuration must be an Object, Array given instead')
    });

    it('should throw a meaningful error when configured with a string', function() {
      var arrayConfig = function() {
        return require('../lib/node-requirejs').requirejs(JSON.stringify(requireConfig));
      };
      expect(arrayConfig, 'to throw', 'requirejs configuration must be an Object, string given instead')
    });

    it('should throw a meaningful error when configured with a number', function() {
      var arrayConfig = function() {
        return require('../lib/node-requirejs').requirejs(3);
      };
      expect(arrayConfig, 'to throw', 'requirejs configuration must be an Object, number given instead')
    });

  });

  describe('should apply the configuration', function() {

    it('should require modules from the root', function() {
      requirejs
    })

  })

});