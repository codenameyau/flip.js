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
  flipjs._createStyleSheet = function() {
    this.style = document.createElement('style');
    this.style.type = 'text/css';
    this.style.appendChild(document.createTextNode(''));
    document.head.appendChild(this.style);
  };

  flipjs._createRule = function(selector, rule) {
    rule = selector + ' {' + rule.join('; ') + '}';
    this.style.sheet.insertRule(rule, 0);
  };

  flipjs._injectcss = function() {
    this.style.sheet.insertRule('', 0);
  };

  /*******************
  *  PUBLIC METHODS  *
  ********************/
  flipjs.flipLeft = function() {
    var flipBody = this.querySelector('.flip-body');
    var flipBack = this.querySelector('.flip-back');
    console.log(flipBody);
    console.log(flipBack);
    console.log('Left');
  };

  flipjs.flipRight = function() {
    console.log('Right');
  };

  flipjs.flipUp = function() {
    console.log('Up');
  };

  flipjs.flipDown = function() {
    console.log('Down');
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
  flipjs._getFlipFunction = function(direction) {
    var flipFunction = flipjs._flipMap[direction];
    return flipFunction;
  };

  flipjs._createEventListeners = function() {
    var elements = document.getElementsByClassName('flip');
    for (var i=0, len=elements.length; i<len; i++) {
      var flipCard = elements[i];
      var flipFunction = flipjs._getFlipFunction(
        flipCard.getAttribute('data-flip') || 'left');
      flipCard.addEventListener('click', flipFunction);
    }
  };

  /************************
  *  LIBRARY CONSTRUCTOR  *
  *************************/
  flipjs._createStyleSheet();
  // flipjs._injectcss();
  flipjs._createEventListeners();

})();
