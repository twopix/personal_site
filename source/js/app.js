
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