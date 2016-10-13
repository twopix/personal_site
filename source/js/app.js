(function() {
  'use strict';

  // not used
  // setTimeout(function() {
  //   document.querySelector('.greating_picture').classList.add('m--show');
  // }, 1000);
  //

  //topmenu
  $('.header__menu_top').click(function(){
    $(this).toggleClass('open');
  });

  // blog smooth scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });



  //preloader
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