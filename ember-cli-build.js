/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'asset-cache': {
      include: [
        'assets/**/*'
      ]
    },
    'esw-cache-fallback': {
      patterns: [ '/' ],
      version: '1' // Changing the version will bust the cache
    },
    'materialize-shim': {
      omitJS: true
    },
    sassOptions: {
      includePaths: [
        'bower_components/materialize/sass'
      ]
    }
  });

  return app.toTree();
};
