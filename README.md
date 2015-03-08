# flip.js

The goal of this library is to provide a customizable interface to flip HTML elements while obfuscating the need for JavaScript. Customizations are done through HTML and CSS.

### Live Demo
http://codenameyau.github.io/flip.js/

## Installation
Manual: Copy the files in [build](https://github.com/codenameyau/flip.js/tree/master/build) to your assets folder.

Bower: `bower install flip.js --save`

## Basic Usage

Please see the [example here](https://github.com/codenameyau/flip.js/tree/master/public).

```html
<!-- Blank Flip Card -->
<div class="flip" data-flip="left">
  <div class="flip-body">
    <div class="flip-front">
      <h1 class="card-header">Front</h1>
    </div>
    <div class="flip-back">
      <h1 class="card-header">Back</h1>
    </div>
  </div>
</div>
```

#### Styling
Styling your cards is as simple as adding and overriding your own css rules.

#### Flip Direction
Change the `data-flip` attribute to any of the following:
- left
- right
- up
- down

#### Future
Some future goals include adding additional events and mobile support.
