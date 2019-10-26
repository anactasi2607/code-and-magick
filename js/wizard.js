'use strict';
(function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var wizardAppearance = document.querySelector('.setup-wizard-appearance');
  var setupWizardCoat = document.querySelector('.wizard-coat');
  var coatInput = wizardAppearance.querySelector('input:nth-child(2)');

  setupWizardCoat.addEventListener('click', function () {
    var randomColor = COAT_COLOR[window.util.getRandomValue(COAT_COLOR)];

    setupWizardCoat.style.fill = randomColor;
    coatInput.value = randomColor;
    wizard.onCoatChange(randomColor);
  });

  var setupWizardEyes = document.querySelector('.wizard-eyes');
  var eyesInput = wizardAppearance.querySelector('input:last-child');

  setupWizardEyes.addEventListener('click', function () {
    var randomColor = EYES_COLOR[window.util.getRandomValue(EYES_COLOR)];

    setupWizardEyes.style.fill = randomColor;
    eyesInput.value = randomColor;
    wizard.onEyesChange(randomColor);
  });

  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = setupWizardFireball.querySelector('input');

  setupWizardFireball.addEventListener('click', function () {
    var randomColor = FIREBALL_COLOR[window.util.getRandomValue(FIREBALL_COLOR)];

    setupWizardFireball.style.background = randomColor;
    fireballInput.value = randomColor;
    window.setup.updateWizards();
  });

  window.wizard = wizard;

  return wizard;
})();
