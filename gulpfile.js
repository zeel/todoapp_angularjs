var gulp = require('gulp'),
    karma = require('karma').server,
    protractor = require("gulp-protractor").protractor;

gulp.task('unit', function (done) {
  karma.start({
    configFile: __dirname + '/test/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('e2e', function(done) {
  gulp.src(["./test/e2e/*.js"])
    .pipe(protractor({
      configFile: "test/protractor.conf.js",
    }))
    .on('error', function(e) { throw e; });
});

gulp.task('default', ['unit','e2e']);