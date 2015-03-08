/*!
 * flip.js
 * https://github.com/codenameyau/flip.js
 * MIT License (c) 2015
 */
'use strict';

(function() {

  var flipjs = flipjs || {};

  /***************************
  *  STYLESHEET DEFINITIONS  *
  ****************************/
  flipjs._injectCSS = function() {
    // Create and inject new style sheet
    this.style = document.createElement('style');
    this.style.type = 'text/css';
    this.style.appendChild(document.createTextNode(''));
    document.head.appendChild(this.style);
  };

  flipjs._createRule = function(selector, rule) {
    rule = selector + ' {' + rule.join('; ') + '}';
    this.style.sheet.insertRule(rule, 0);
  };

  /*******************
  *  PUBLIC METHODS  *
  ********************/
  flipjs.flipLeft = function(element) {
    console.log('flip left');
  };

  flipjs.flipRight = function(element) {
    console.log('flip right');
  };

  flipjs.flipUp = function(element) {
    console.log('flip up');
  };

  flipjs.flipDown = function(element) {
    console.log('flip down');
  };

  flipjs._flipMap = {
    'left':  flipjs.flipLeft,
    'right': flipjs.flipRight,
    'up':    flipjs.flipUp,
    'down':  flipjs.flipDown,
  };

  /*********************
  *  INTERNAL METHODS  *
  **********************/

  flipjs._setupEventListeners = function() {
    var elements = document.getElementsByClassName('flip');

    for (var i=0, len=elements.length; i<len; i++) {
      var card = elements[i];

      // Determine flip direction
      var flipDirection = card.getAttribute('data-flip');
      var flipFunction = flipjs._flipMap[flipDirection];
      if (!flipFunction) {
        flipDirection = 'right';
        flipFunction = flipjs._flipMap[flipDirection];
      }
    }
    console.log(elements);
  };

  // Setup flipjs library
  // flipjs._injectCSS();
  flipjs._setupEventListeners();

})();
