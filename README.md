# flip.js

The goal of this library is to provide a customizable interface to flip HTML elements
while obfuscating the need for JavaScript. Customizations are done through HTML and CSS.

### Live Demo
http://codenameyau.github.io/flip.js/

## Installation

#### Bower
```
bower install flip.js --save
```

#### Manual
Copy the files in [build](https://github.com/codenameyau/flip.js/tree/master/build) to your assets folder.

Then add the following resources to your HTML.

```html
<link rel="stylesheet" href="flip.min.css">
<script src="flip.min.js"></script>
```

## Basic Usage

Please see the [example here](https://github.com/codenameyau/flip.js/tree/master/public/index.html).

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
Change the `data-flip` attribute to control the flip direction:

```html
data-flip="left"
data-flip="right"
data-flip="up"
data-flip="down"
```

## Contributing
Welcome! Some future goals for this library include adding
click event support and mobile support. There are a few opened
issues under the Alpha Release milestone.

Please work with the example in `public/` and leave `src/` and `build/` untouched.
Those two directories are autogenerated with gulp.
