'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  function getRandomValue(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function isEscEvent(evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  }

  function isEnterEvent(evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  }

  function getMaxElement(arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  }

  window.util = {
    getRandomValue: getRandomValue,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getMaxElement: getMaxElement
  };
})();
