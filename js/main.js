requirejs.config({
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
    }
});
require(['app'],
  function() {
    angular.bootstrap(document, ['todoApp']);
  }
);