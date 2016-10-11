(function() {
  'use strict';

  // not used
  // setTimeout(function() {
  //   document.querySelector('.greating_picture').classList.add('m--show');
  // }, 1000);
  //
  var imgs = [];
  $.each($('*'), function () {
     var
       $this = $(this),
       background =  $this.css('background-image'),
       img = $this.is('img');
    if(background != 'none') {
      var path = background.replace('url("', '').replace('")', '');

      imgs.push(path);
    }

    if(img) {
      var path = $this.attr('src');
      if(path) {
        imgs.push(path);
      }
    }

  });

  var imgTotal =1;
  for (var i=0; i < imgs.length ; i++) {
    var image = $('<img>', {
      attr: {
        src: imgs[i]
      }
    });

    image.on('load', function () {
      setPersents(image.length, imgTotal);
      imgTotal++;
    })

  }

  function setPersents(total, current) {
    var percents = Math.ceil(current/total*100) ;
    if (percents >=100) {
      $('.preloader').fadeOut();
    }
    
    $('.preloader__percents').text(percents + '%') ;
  }

})();