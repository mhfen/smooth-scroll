/* ========================================================================
 * smooth-scroll.js v1.0.0
 * https://github.com/mhfen/smooth-scroll.git
 * ========================================================================
 * Copyright 2014 Matt Fender
 * License: (https://github.com/mhfen/smooth-scroll/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
    'use strict';

    /**
     * Class for SmoothScroll plugin
     *
     * @class SmoothScroll
     * @constructor
     */
    function SmoothScroll(element) {
        /**
         * A reference to the containing DOM element
         *
         * @default null
         * @name $element
         * @type {jQuery}
         */
        this.$element = $(element);

        /**
         * An object of optional settings
         *
         * @default null
         * @name options
         * @type {object}
         */
        this.options = SmoothScroll.DEFAULTS;

        /**
         * Tracks whether component is enabled.
         *
         * @default false
         * @name isEnabled
         * @type {bool}
         */
        this.isEnabled = false;

        this.init();
    }

    /**
     * An object of default settings
     *
     * @default null
     * @name options
     * @type {object}
     */
    SmoothScroll.DEFAULTS = {
        scrollSpeed: 500
    };

    /**
     * Initializes the Component
     *
     * @method init
     * @returns {SmoothScroll}
     */
    SmoothScroll.prototype.init = function () {
        this.enable();

        return this;
    };

    /**
     * Enables the component
     * Performs any event binding to handlers
     * Exits early if it is already enabled
     *
     * @method enable
     * @returns {SmoothScroll}
     */
    SmoothScroll.prototype.enable = function() {
        if (this.isEnabled) {
            return this;
        }
        this.isEnabled = true;

        this.scrollSmoothly();

        return this;
    };

    /**
     * Disables the component
     * Tears down any event binding to handlers
     * Exits early if it is already disabled
     *
     * @method disable
     * @returns {SmoothScroll}
     */
    SmoothScroll.prototype.disable = function() {
        if (!this.isEnabled) {
            return this;
        }
        this.isEnabled = false;

        return this;
    };

    /**
     * Destroys the component
     * Tears down any events, handlers, elements
     * Should be called when the object should be left unused
     *
     * @method destroy
     * @returns {SmoothScroll}
     */
    SmoothScroll.prototype.destroy = function() {
        this.disable();

        return this;
    };

    /**
     * Scrolls to target on the page smoothly
     *
     * @method scrollSmoothly
     * @returns {SmoothScroll}
     */
    SmoothScroll.prototype.scrollSmoothly = function () {
        var target = $(this.$element.attr('href'));

        if (target.length) {
          $('body').animate({
              scrollTop: target.offset().top
          }, this.options.scrollSpeed);
          return false;
        }

        this.destroy();

        return this;
    };

    // SMOOTHSCROLL DATA-API
    // =====================

    $(window).on('load', function () {
        $('[data-scroll="smooth"]').on('click', function () {
            var newScroller = new SmoothScroll(this);
        });
    });

}(jQuery);