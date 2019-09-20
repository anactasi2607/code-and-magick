'use strict';
var numberWizard = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomValue = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var createWizard = function (count) {
  var wizards = [];

  for (var i = 0; i <= count - 1; i++) {
    var wizardName = getRandomValue(WIZARD_NAMES);
    var wizardSurname = getRandomValue(WIZARD_SURNAMES);
    var wizardCoat = getRandomValue(COAT_COLOR);
    var wizardEyes = getRandomValue(EYES_COLOR);

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

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

var createFragment = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderWizard(arr[i]));
  }

  similarListElement.appendChild(fragment);
};

var wizards = createWizard(numberWizard);

createFragment(wizards);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
