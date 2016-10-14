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

  
  
//  welcome flipper
  (function () {

    var homeBlock = $('#homeBlock'),
        btnAuth = $('#btn-auth'),
        profileHome = $('.profile__home'),
        profileLogin = $('.profile__login'), 
        sbmit = $('#submit');


    if (homeBlock == null) return;


    btnAuth.on('click', function (e) {
      e.preventDefault();
      flip();
    });
    sbmit.on('click', function (e) {
      e.preventDefault();
      flip();
    });


    function flip() {
      if(homeBlock.hasClass('profile--flip')) {
        btnAuth.fadeIn();
        // btnAuth.style.pointerEvents = 'auto';
        homeBlock.removeClass('profile--flip');
        profileHome.addClass('profile--back');
      } else {
        btnAuth.fadeOut();
        //btnAuth.style.pointerEvents = 'none';
        homeBlock.addClass('profile--flip');
        profileLogin.addClass('profile--back');

      }
    }

  })();


})();