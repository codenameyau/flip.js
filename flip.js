/*!
 * flip.js
 * https://github.com/codenameyau/flip.js
 * MIT License (c) 2015
 */
'use strict';

(function() {

  var flipjs = flipjs || {};

  /**************************
   * Stylesheet Definitions *
   **************************/
  flipjs._injectCSS = function() {
    // Create and inject new style sheet
    this.style = document.createElement('style');
    this.style.type = 'text/css';
    this.style.appendChild(document.createTextNode(''));
    document.head.appendChild(this.style);

    // Define additional styles
    this._defineFlipClass();
    this._defineFlipBodyClass();
    this._defineFlipFrontClass();
    this._defineFlipBackClass();
  };

  flipjs._createRule = function(selector, rule) {
    rule = selector + ' {' + rule.join('; ') + '}';
    this.style.sheet.insertRule(rule, 0);
  };

  flipjs._defineFlipClass = function() {
    this._createRule('.flip', [
      ]);
  };

  flipjs._defineFlipBodyClass = function() {
    this._createRule('.flip-body', [
      ]);
  };

  flipjs._defineFlipFrontClass = function() {
    this._createRule('.flip-front', [
      ]);
  };

  flipjs._defineFlipBackClass = function() {
    this._createRule('.flip-back', [
        'display: none'
      ]);
  };


  /******************
   * Public Methods *
   ******************/


  /********************
   * Internal Methods *
   ********************/
  flipjs._setupMobileFunctionality = function() {
    // this.classList.toggle('hover');
  };

  // Setup flipjs library
  flipjs._injectCSS();
  flipjs._setupMobileFunctionality();

})();
