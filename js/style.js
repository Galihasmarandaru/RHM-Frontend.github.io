// ('use strict');

// // STELLAR BACKGROUND
// $('body').stellar({
//   responsive: true,
//   parallaxBackgrounds: true,
//   parallaxElements: true,
//   horizontalScrolling: false,
//   hideDistantElements: false,
//   scrollProperty: 'scroll',
// });

$(document).ready(function () {
  if ($(window).width() <= 991) {
      $('.reason').removeClass('container');
      $('.product-row').removeClass('container')
  }

  if ($(window).width() <= 1100) {
    $('#canvas-particle').hide();
}
});

// SET BACKGROUND
(function ($) {
  $('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    var first = $(this).data('firstcolor');
    var second = $(this).data('secondcolor');
    $(this).css(
      'background-image',
      'linear-gradient(to right bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(' +
        bg +
        ')'
    );
  });
  $('.set-bg-plain').each(function () {
    var bg = $(this).data('setbgplain');
    var first = $(this).data('firstcolor');
    var second = $(this).data('secondcolor');
    $(this).css(
        'background-image',
        'url(' + bg + ')'
    );
  });
  $('.set-bg-news').each(function () {
    var bg = $(this).data('setbgnews');
    var first = $(this).data('firstcolor');
    var second = $(this).data('secondcolor');
    $(this).css(
      'background-image',
      'linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(' +
        bg +
        ')'
    );
  });
})(jQuery);

// NAVIGATION
var docTes = $(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 20) {
      $('.navigation').addClass('navigation-scrolled');
      $('.navigation__list-link').addClass('navigation-scrolled__list-link');
      $('.navigation__logo').addClass('navigation-scrolled__logo');
    } else if (scrollTop < 20) {
      $('.navigation').removeClass('navigation-scrolled');
      $('.navigation__list-link').removeClass('navigation-scrolled__list-link');
      $('.navigation__logo').removeClass('navigation-scrolled__logo');
    }
  });
});

$(function () {
  $('.navigation__list-link').click(function () {
    $('.navigation__list-link').removeClass('navigation__list-link--active');
    $(this).addClass('navigation__list-link--active');
  });
});

$(function () {
  $('.navigation__list-link').click(function () {
    $('.navigation__list-link').removeClass('navigation__list-link--active');
    $(this).addClass('navigation__list-link--active');
  });
});

$(function () {
  $('#menu-resp').click(function () {
    $('.sidebar').css('display', 'block')
    $('.detail-product').css('display', 'none')
  });
  $('.close-side-nav').click(function () {
    $('.sidebar').css('display', 'none')
    $('.detail-product').css('display', 'block')
  });
  $('.bar-navigation').click(function () {
    $('.navigation__list').toggle()
    $('.navigation__list').css('animation', 'none')
    $('.navigation__logo').toggle()
  });
});

$('.btn--red').click(function () {
  $('.navigation__list-link').removeClass('navigation__list-link--active');
  $('#product_nav').addClass('navigation__list-link--active');
});

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate(
          {
            scrollTop: target.offset().top,
          },
          400,
          function () {
            var $target = $(target);
            $target.focus();
          }
        );
      }
    }
  })(jQuery);

  function myFunction(x) {
    x.classList.toggle("change");
  }