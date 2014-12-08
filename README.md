Smooth Scroll
=============

A jQuery plugin for scrolling to a page element smoothly.

## Usage

Use the Smooth Scroll plugin via data attributes or manually with your own JavaScript.

### Via data attributes
To easily add Smooth Scroll behavior to any element, just add `data-scroll="smooth"` to the element you want to scroll smoothly up / down the page to its href target.

```html
<a href="#myTarget" data-scroll="smooth">Scroll to #myTarget element.</a>
```

  <h3>Via JavaScript</h3>
  <p>Call the Smooth Scroll plugin via JavaScript:</p>

```js
  $('#myScroller').on('click', function () {
    var newScroller = new SmoothScroll(this);
  })
```
