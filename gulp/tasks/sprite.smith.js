+'use strict';
+
  +module.exports = function() {
  +    $.gulp.task('sprite:smith', function () {
    +        var spriteData = $.gulp.src('./source/images/icons/*.{png,gif,jpg,jpeg}').pipe($.gp.spritesmith({
      +            imgName: 'sprite.png',
      +            cssName: 'sprite.css'
    +        }));
    +        return spriteData.pipe($.gulp.dest($.config.root + '/assets/img'));
    +    });
  +};