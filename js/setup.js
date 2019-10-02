'use strict';

(function () {
  var NUMBER_WIZARD = 4;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.setup = {
    COAT_COLOR: COAT_COLOR,
    EYES_COLOR: EYES_COLOR,
    FIREBALL_COLOR: FIREBALL_COLOR
  };

  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var createWizard = function (count) {
    var wizards = [];

    for (var i = 0; i <= count - 1; i++) {
      var wizardName = window.util.getRandomValue(WIZARD_NAMES);
      var wizardSurname = window.util.getRandomValue(WIZARD_SURNAMES);
      var wizardCoat = window.util.getRandomValue(COAT_COLOR);
      var wizardEyes = window.util.getRandomValue(EYES_COLOR);

      wizards[i] = {
        name: WIZARD_NAMES[wizardName] + ' ' + WIZARD_SURNAMES[wizardSurname],
        coatColor: COAT_COLOR[wizardCoat],
        eyesColor: EYES_COLOR[wizardEyes]
      };
    }

    return wizards;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var renderWizardLebel = wizardElement.querySelector('.setup-similar-label');
    var renderWizardCoat = wizardElement.querySelector('.wizard-coat');
    var renderWizardEyes = wizardElement.querySelector('.wizard-eyes');

    renderWizardLebel.textContent = wizard.name;
    renderWizardCoat.style.fill = wizard.coatColor;
    renderWizardEyes.style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  var createFragment = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      fragment.appendChild(renderWizard(arr[i]));
    }

    similarListElement.appendChild(fragment);
  };

  var wizards = createWizard(NUMBER_WIZARD);

  createFragment(wizards);

})();
