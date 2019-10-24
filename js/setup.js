'use strict';

(function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizards = [];
  var coatColor;
  var eyesColor;

  function getRank(wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  function updateWizards() {
    window.render.createFragment(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  }

  document.querySelector('.setup-similar').classList.remove('hidden');

  var wizardAppearance = document.querySelector('.setup-wizard-appearance');
  var setupWizardCoat = document.querySelector('.wizard-coat');
  var coatInput = wizardAppearance.querySelector('input:nth-child(2)');

  setupWizardCoat.addEventListener('click', function () {
    var randomColor = COAT_COLOR[window.util.getRandomValue(COAT_COLOR)];

    setupWizardCoat.style.fill = randomColor;
    coatInput.value = randomColor;
    coatColor = randomColor;
    updateWizards();
  });

  var setupWizardEyes = document.querySelector('.wizard-eyes');
  var eyesInput = wizardAppearance.querySelector('input:last-child');

  setupWizardEyes.addEventListener('click', function () {
    var randomColor = EYES_COLOR[window.util.getRandomValue(EYES_COLOR)];

    setupWizardEyes.style.fill = randomColor;
    eyesInput.value = randomColor;
    eyesColor = randomColor;
    updateWizards();
  });

  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = setupWizardFireball.querySelector('input');

  setupWizardFireball.addEventListener('click', function () {
    var randomColor = FIREBALL_COLOR[window.util.getRandomValue(FIREBALL_COLOR)];

    setupWizardFireball.style.background = randomColor;
    fireballInput.value = randomColor;
    updateWizards();
  });

  function successHandler(data) {
    wizards = data;
    updateWizards();
  }

  function errorHandler(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 20px 270px; border-radius: 30px; height: 40px; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  window.backend.load(successHandler, errorHandler);

  var form = document.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      window.dialog.setupDialogElement.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });

  window.setup = {
    COAT_COLOR: COAT_COLOR,
    EYES_COLOR: EYES_COLOR,
    FIREBALL_COLOR: FIREBALL_COLOR
  };

})();
