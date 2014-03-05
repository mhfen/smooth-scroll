Smooth Scroll
=============

A jQuery plugin for scrolling to a page element smoothly.

[minified version](dist/js/smooth-scroll.min.js)

## Example

Head on over to this [live example](http://fender.me/code-space/smooth-scroll/).

## Usage

Use the Smooth Scroll plugin via data attributes or manually with your own JavaScript.

### Via data attributes
To easily add Smooth Scroll behavior to any element, just add `data-scroll="smooth"` to the element you want to scroll smoothly up / down the page to its href target.

```html
<a href="#myTarget" data-scroll="smooth" data-scroll-speed="4000">Scroll to #myTarget element over a period of 4 seconds.</a>
```

  <h3>Via JavaScript</h3>
  <p>Call the Smooth Scroll plugin via JavaScript:</p>

```js
  $('#myScroller').on('click', function () {
    var $scroller = $(this)
    $scroller.smoothscroll($scroller, {
      scrollSpeed: 500
    })
  })
```


### Options
Options can be passed via JavaScript.

<table>
  <thead>
   <tr>
     <th style="width: 100px;">Name</th>
     <th style="width: 100px;">type</th>
     <th style="width: 50px;">default</th>
     <th>description</th>
   </tr>
  </thead>
  <tbody>
   <tr>
     <td>scrollSpeed</td>
     <td>number | function | object</td>
     <td>500</td>
     <td>Milliseconds it takes to reach the target position on the page.</td>
   </tr>
  </tbody>
</table>
