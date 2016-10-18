'use strict';

module.exports = function() {
  $.gulp.task('js:water', function() {
    return $.gulp.src($.path.jsWater)
      .pipe($.gp.concat('water.js'))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
