var welcomeFlip = (function () {

  var init = function () {
    var homeBlock = $('#homeBlock'),
      btnAuth = $('#btn-auth'),
      profileHome = $('.profile__home'),
      profileLogin = $('.profile__login'),
      submit = $('#submit');



    _setUpListeners();
  };

  var _setUpListeners = function () {
    $('.header__menu_top').on('click', function(){
      $(this).toggleClass('open');
    });

  };

  return {
    init: init
  }

})();

welcomeFlip.init();