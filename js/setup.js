'use strict';
var numberWizard = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

function GameWizard(n, c, e) {
  this.name = n;
  this.coatColor = c;
  this.eyesColor = e;
}

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

for (i = 0; i <= numberWizard - 1; i++) {
  var wizardName = Math.floor(Math.random() * WIZARD_NAMES.length);
  var wizardSurname = Math.floor(Math.random() * WIZARD_SURNAMES.length);
  var wizardCoat = Math.floor(Math.random() * COAT_COLOR.length);
  var wizardEyes = Math.floor(Math.random() * EYES_COLOR.length);

  wizards[i] = new GameWizard(WIZARD_NAMES[wizardName] + ' ' + WIZARD_SURNAMES[wizardSurname], COAT_COLOR[wizardCoat], EYES_COLOR[wizardEyes]);
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
