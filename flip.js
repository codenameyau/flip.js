/*!
 * flip.js
 * https://github.com/codenameyau/flip.js
 * MIT License (c) 2015
 */
'use strict';

(function() {

  var flipjs = flipjs || {};

  /*******************
  *  PUBLIC METHODS  *
  ********************/
  flipjs.flipLeft = function(element) {
    flipjs._bindFlipEvent(element, 'rotateY(-180deg)');
  };

  flipjs.flipRight = function(element) {
    flipjs._bindFlipEvent(element, 'rotateY(180deg)');
  };

  flipjs.flipUp = function(element) {
    flipjs._bindFlipEvent(element, 'rotateX(180deg)');
  };

  flipjs.flipDown = function(element) {
    flipjs._bindFlipEvent(element, 'rotateX(-180deg)');
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
    return flipjs._flipMap[direction];
  };

  flipjs._bindFlipEvent = function(element, rotation, eventA, eventB) {
    // [TODO] #1 - Enable mobile flip event
    // [TODO] #2 - Enable additional event triggers
    eventA = eventA || 'mouseenter';
    eventB = eventB || 'mouseleave';

    var flipBody = element.querySelector('.flip-body');
    var flipBack = element.querySelector('.flip-back');
    flipBody.addEventListener(eventA, function() {
      flipBody.style.transform = rotation;
      flipBack.style.transform = rotation;
    });

    flipBody.addEventListener(eventB, function() {
      flipBody.style.transform = 'rotate(0deg)';
    });
  };

  flipjs._createEventListeners = function() {
    var elements = document.getElementsByClassName('flip');
    for (var i=0, len=elements.length; i<len; i++) {
      var flipCard = elements[i];
      var flipFunction = flipjs._getFlipFunction(
        flipCard.getAttribute('data-flip') || 'left');
      flipFunction(flipCard);
    }
  };

  /************************
  *  LIBRARY CONSTRUCTOR  *
  *************************/
  flipjs._createEventListeners();

})();
