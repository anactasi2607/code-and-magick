'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');

  setupOpenIcon.setAttribute('tabindex', '0');
  setupClose.setAttribute('tabindex', '0');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var userNameInput = setup.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function (evt) {
    evt.preventDefault();

    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  var wizardAppearance = document.querySelector('.setup-wizard-appearance');
  var setupWizardCoat = document.querySelector('.wizard-coat');
  var coatInput = wizardAppearance.querySelector('input:nth-child(2)');

  setupWizardCoat.addEventListener('click', function () {
    var randomColor = window.setup.COAT_COLOR[window.util.getRandomValue(window.setup.COAT_COLOR)];

    setupWizardCoat.style.fill = randomColor;
    coatInput.value = randomColor;
  });

  var setupWizardEyes = document.querySelector('.wizard-eyes');
  var eyesInput = wizardAppearance.querySelector('input:last-child');

  setupWizardEyes.addEventListener('click', function () {
    var randomColor = window.setup.EYES_COLOR[window.util.getRandomValue(window.setup.EYES_COLOR)];

    setupWizardEyes.style.fill = randomColor;
    eyesInput.value = randomColor;
  });

  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = setupWizardFireball.querySelector('input');

  setupWizardFireball.addEventListener('click', function () {
    var randomColor = window.setup.FIREBALL_COLOR[window.util.getRandomValue(window.setup.FIREBALL_COLOR)];

    setupWizardFireball.style.background = randomColor;
    fireballInput.value = randomColor;
  });

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var isDragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      isDragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (isDragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();

