/* ========================================================================
 * smooth-scroll.js v0.1.0
 * https://github.com/mhfen/smooth-scroll.git
 * ========================================================================
 * Copyright 2014 Matt Fender
 * License: (https://github.com/mhfen/smooth-scroll/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SMOOTHSCROLL CLASS DEFINITION
  // =============================

  function SmoothScroll(element, options) {
    this.$element = $(element).is('body') ? $(window) : $(element)
    this.options = $.extend({}, SmoothScroll.DEFAULTS, options)
    this.scrollSmoothly()
  }

  SmoothScroll.DEFAULTS = {
    scrollSpeed: 500
  }

  SmoothScroll.prototype.scrollSmoothly = function () {
    var target = $(this.$element.attr('href'));
    target = target.length ? target : $('[name=' + this.$element.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
          scrollTop: target.offset().top
      }, this.options.scrollSpeed);
      return false;
    }
  }

  // SMOOTHSCROLL PLUGIN DEFINITION
  // ==============================

  $.fn.smoothscroll = function (element, options) {
    var newScroller = new SmoothScroll(element, options)
    return newScroller
  }

  // SMOOTHSCROLL DATA-API
  // =====================

  $(window).on('load', function () {
    $('[data-scroll="smooth"]').on('click', function () {
      var $smooth = $(this)
      var dataSpeed = $smooth.data('scroll-speed')
      $smooth.smoothscroll($smooth, {scrollSpeed: dataSpeed})
    })
  })

}(jQuery);