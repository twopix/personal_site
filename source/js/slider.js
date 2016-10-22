// slider
// Слайдер
(function() {
  var transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd';

  function Slider(options) {
    var gallery     = options.elem;
    var prev        = gallery.find('.slider__control_prev');
    var next        = gallery.find('.slider__control_next');

    var slides         = gallery.find('.slider__image  .slider__item');
    var activeSlide    = slides.filter('.slider__item_active');
    var slidesCnt      = slides.length;
    var activeSlideIdx = activeSlide.index();

    var mainSlider = gallery.find('.slider__image  .slides');
    var mainSlides = mainSlider.find('.slider__item');

    var prevSlider = gallery.find('.slider__control_prev .slides');
    var prevSlides = prevSlider.find('.slider__item');

    var nextSlider = gallery.find('.slider__control_next .slides');
    var nextSlides = nextSlider.find('.slider__item');
    var isReady    = false;


    var desc  = gallery.find('.slider__info');
    var title = desc.find('.slider__title');
    var tools = desc.find('.slider__techs');
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
        .eq(idx).addClass('slider__item_active')
        .siblings().removeClass('slider__item_active');
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
      var currentSlide    = slides.filter('.slider__item_active');
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
            .addClass('slider__item_active')
            .trigger('changed-slide');
        });

      currentSlide
        .addClass( className )
        .one(transitionEnd, function() {
          $(this).removeClass('slider__item_active ' + className);
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

      changeAll('prev');
      dataChange('prev');

      updateDesc(dataItems.eq(activeSlideIdx));
    };


    this.next = function() {
      if( !isReady ) return;
      isReady = false;

      changeAll('next');
      dataChange('next');

      updateDesc(dataItems.eq(activeSlideIdx));
    };

    prev.on('click', this.prev);
    next.on('click', this.next);
  } // Slider


  var slider = new Slider({
    elem: $('#works-slider')
  });
})();
