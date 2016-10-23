
// Topmenu
(function() {
  'use strict';
  $('.header__menu_top').click(function () {
    $(this).toggleClass('open');
  });

  // blog smooth scroll
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
})();
//end topmenu

// main menu
(function() {

  $(document).on('click', '.header__menu_top', function(e) {
    var those = $(this);
    var hMenu     = those.closest('.header__menu');
    var drop    = hMenu.find('.header__menu-nav');
    var header  = $('.header');


    if(hMenu.hasClass('nav--open')) {

      drop.fadeOut( 500 , function() {
        hMenu.removeClass('nav--open');
        $('body').css('overflow', '');
      });

      header.css('z-index', '');

    } else {

      drop.show(0, function() {
        hMenu.addClass('nav--open');
        header.css('z-index', 100);
      });

      $('body').css('overflow', 'hidden');

    }
  });

})();
//end main menu

// Preloader
(function () {
  'use strict';
  var imgs = [];
  $.each($('*'), function () {
    var
      $this = $(this),
      background = $this.css('background-image'),
      img = $this.is('img');
    if (background.match(/url(.+)/)) {
        var regex = background.match(/url(.+)/);
        var path = regex[0].replace('url("', '').replace('")', '');
        imgs.push(path);

    }

    if (img) {
      var path = $this.attr('src');
      if (path) {
        imgs.push(path);
      }
    }

  });

  var imgTotal = 1;
  for (var i = 0; i < imgs.length; i++) {
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

  function setPersents(current, total) {
    var percents = Math.ceil(current / total * 100);
    if (percents >= 100) {
      $('.preloader').fadeOut();
    }

    $('.preloader__percents').text(percents + '%');
  }
})();
// end preloader

//  welcome flipper
  (function () {

    var homeBlock = $('#homeBlock'),
      btnAuth = $('#btn-auth'),
      profileHome = $('.profile__home'),
      profileLogin = $('.profile__login'),
      goHome = $('#goHome');


    if (homeBlock == null) return;


    btnAuth.on('click', function (e) {
      e.preventDefault();
      flip();
    });
    goHome.on('click', function (e) {
      e.preventDefault();
      flip();
    });


    function flip() {
      if (homeBlock.hasClass('profile--flip')) {
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
// end flipper

// Карта
(function initMap() {

  var map = document.getElementById('gmap');
  if (map === null) return;


  // gmap params
  var latitude = 40.589328, longitude = 22.953572, mapZoom = 14;




  // Стилизация карты
  var style = [
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#444444"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "color": "#f2f2f2"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": 45
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#6c9c5a"
        },  
        {
          "visibility": "on"
        }
      ]
    }
  ];
  var mapOptions = {
    center: new google.maps.LatLng(latitude, longitude),
    zoom: mapZoom,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    styles: style,
  };
  var googleMap = new google.maps.Map(map, mapOptions);

})();
//end google maps

// Blog menu
// Прокрутить страницу до ...
(function() {

  $(document).on('click', '[data-go]', function(e) {
    e.preventDefault();

    var btn        = $(this);
    var target     = btn.attr('data-go');
    var container  = null;


    function scrollToPosition(position, duration) {
      var position = position || 0;
      var duration = duration || 1000;


      $("body, html").animate({
        scrollTop: position
      }, duration);
    }


  });

})();

// sticky-меню на странице блога
(function() {
  var container = $('.blog');
  var menu      = container.find('.blog__menu');

  if (menu.length === 0) return;

  var containerBottom = container.offset().top + container.height() - 40;
  var edgeTop         = menu.offset().top;
  var menuHeight      = menu.height();


  $(window).on('scroll', function() {
    if(edgeTop < $(window).scrollTop()) {
      if(containerBottom < $(window).scrollTop() + menuHeight) {
        menu
          .addClass('blog__menu--fix-bottom')
          .removeClass('blog__menu--sticky');
      } else {
        menu
          .addClass('blog__menu--sticky')
          .removeClass('blog__menu--fix-bottom');
      }
    } else {
      menu.removeClass('blog__menu--sticky');
    }
  });

})();

// Прокрутка до выбранной статьи в блоге
(function() {
  var articleAll = $('.blog__article');
  var linksAll   = $('.blog__menu .menu__link');

  if(articleAll.length === 0) return;

  showSection(window.location.hash, false);


  function showSection(section, isAnimate) {
    var target        = section.replace('#', '');
    var reqSection    = articleAll.filter('[data-id="' + target + '"]');
    var duration      = 750;

    if (reqSection.length === 0) return;
    var reqSectionPos = reqSection.offset().top;

    if(isAnimate) {
      $('body, html').animate({ scrollTop: reqSectionPos }, duration);
    } else {
      $('body, html').scrollTop(reqSectionPos);
    }
  }



  function checkSection() {
    articleAll.each(function(i, item) {
      var article    = $(item);
      var topEdge    = article.offset().top - 200;
      var bottomEdge = topEdge + article.height();
      var topScroll  = $(window).scrollTop();

      if (topEdge < topScroll && bottomEdge > topScroll) {
        var currentId = article.data('id');
        var reqLink   = linksAll.filter('[href="#' + currentId + '"]');

        reqLink.closest('.blog__menu__item')
          .addClass('blog__menu__item--active')
          .siblings()
          .removeClass('blog__menu__item--active');

        window.location.hash = currentId;
      }
    });
  }

  // Боковавя панель на странице блога
  (function() {
    var trigger     = $('.blog__side-trigger');
    var activeClass = 'blog__side--show';
    var container;

    if( trigger.length === 0) return;

    container = trigger.closest('.blog__side');;


    trigger.on('click', function(e) {
      e.preventDefault();
      container.toggleClass( activeClass );
    });


    $(document).on('click', '.blog__menu  .menu__item', function() {
      var item      = $(this);

      if(item.hasClass('menu__item--active')) return;
      container.removeClass( activeClass );
    });


    $(window).on('resize', function() {
      if( $(document).width() >= 960 && container.hasClass( activeClass ) ) {
        container.removeClass( activeClass );
      }
    });

  })();




  $(window).on('scroll', function() {
    checkSection();
  });


  $(document).on('click', '.blog__menu .menu__link', function(e) {
    e.preventDefault();
    showSection($(this).attr('href'), true);
  });

})();


//end blog menu

// mail form
(function() {
  // Get the form.
  var form = $('.contact__form-ajax'),
      formMessages = $('#contact__form_response');

  
  $(form).submit(function(e) {
    e.preventDefault();
    
    var formData = $(form).serialize();

    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      })
      .done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#name').val('').fadeOut();
        $('#email').val('').fadeOut();
        $('#message').val('').fadeOut();
        $('.mainbox_footer').fadeOut();
      })
      .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
      });

  });


})();


// Слайдер
(function() {
  var transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd';

  function Slider(options) {
    var gallery     = options.elem;
    var prev        = gallery.find('.slider__control--prev');
    var next        = gallery.find('.slider__control--next');

    var slides         = gallery.find('.slider__view  .slides__item');
    var activeSlide    = slides.filter('.slides__item--active');
    var slidesCnt      = slides.length;
    var activeSlideIdx = activeSlide.index();

    var mainSlider = gallery.find('.slider__view  .slides');
    var mainSlides = mainSlider.find('.slides__item');

    var prevSlider = gallery.find('.slider__control--prev  .slides');
    var prevSlides = prevSlider.find('.slides__item');

    var nextSlider = gallery.find('.slider__control--next  .slides');
    var nextSlides = nextSlider.find('.slides__item');
    var isReady    = false;


    var desc  = gallery.find('.slider__desc');
    var title = desc.find('.slider__title');
    var tools = desc.find('.slider__info');
    var link  = desc.find('.slider__link');

    var data      = gallery.find('.slider__data');
    var dataItems = data.find('.slider-data__item');


    // init
    function init() {
      showedSlide(nextSlides, getIdx(activeSlideIdx, 'next'));
      showedSlide(prevSlides, getIdx(activeSlideIdx, 'prev'));
      updateDesc(dataItems.eq(activeSlideIdx));
      isReady = true;
    }
    init();

    function showedSlide(slider, idx) {
      slider
        .eq(idx).addClass('slides__item--active')
        .siblings().removeClass('slides__item--active');
    }

    function dataChange(direction) {
      activeSlideIdx = (direction === 'next') ? getIdx(activeSlideIdx, 'next') : getIdx(activeSlideIdx, 'prev');
    }

    function getIdx(currentIdx, dir) {
      if(dir === 'prev') {
        return (currentIdx - 1 < 0) ? slidesCnt - 1 : currentIdx - 1 ;
      }
      if(dir === 'next') {
        return (currentIdx + 1 >= slidesCnt) ? 0 : currentIdx + 1 ;
      }

      return currentIdx;
    }

    function changeSlide(slides, direction, className) {
      var currentSlide    = slides.filter('.slides__item--active');
      var currentSlideIdx = currentSlide.index();
      var newSlideIdx;

      if (direction === 'prev') {
        newSlideIdx = getIdx(currentSlideIdx, 'prev');
      }
      if (direction === 'next') {
        newSlideIdx = getIdx(currentSlideIdx, 'next');
      }

      slides.eq(newSlideIdx)
        .addClass( className )
        .one(transitionEnd, function() {
          $(this)
            .removeClass( className )
            .addClass('slides__item--active')
            .trigger('changed-slide');
        });

      currentSlide
        .addClass( className )
        .one(transitionEnd, function() {
          $(this).removeClass('slides__item--active ' + className);
        });
    }

    function changeAll(direction) {
      changeSlide(mainSlides, direction, 'slides__item--animate-fade');
      changeSlide(prevSlides, direction, 'slides__item--animate-down');
      changeSlide(nextSlides, direction, 'slides__item--animate-up');
    }

    function updateDesc(data) {
      title.text( data.attr('data-title') );
      tools.text( data.attr('data-tools') );
      link.attr('href', data.attr('data-link') );
    }

    $(document).on('changed-slide', function() {
      isReady = true;
    });



    this.prev = function() {
      if( !isReady ) return;
      isReady = false;

      changeAll('prev')
      dataChange('prev');

      updateDesc(dataItems.eq(activeSlideIdx));
    };


    this.next = function() {
      if( !isReady ) return;
      isReady = false;

      changeAll('next')
      dataChange('next');

      updateDesc(dataItems.eq(activeSlideIdx));
    };

    prev.on('click', this.prev);
    next.on('click', this.next);
  } // Slider


  var slider = new Slider({
    elem: $('#js-slider')
  });
})();


