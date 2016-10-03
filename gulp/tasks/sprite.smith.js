'use strict';

module.exports = function() {
  $.gulp.task('sprite:smith', function () {
    var spriteData = $.gulp.src('./source/images/icons/*.{png,gif,jpg,jpeg}') // source path of the sprite images
      .pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css'
    }));
    return spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img')),
      spriteData.css.pipe($.gulp.dest($.config.root + '/assets/css'))     ;
    });
  };