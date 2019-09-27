'use strict';
var numberWizard = 4;

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

var wizards = createWizard(numberWizard);

createFragment(wizards);

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

setupOpenIcon.setAttribute('tabindex', '0');
setupClose.setAttribute('tabindex', '0');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (evt.target.tagName === 'INPUT') {
      evt.preventDefault();
    } else {
      closePopup();
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
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
  var randomColor = COAT_COLOR[getRandomValue(COAT_COLOR)];

  setupWizardCoat.style.fill = randomColor;
  coatInput.value = randomColor;
});

var setupWizardEyes = document.querySelector('.wizard-eyes');
var eyesInput = wizardAppearance.querySelector('input:last-child');

setupWizardEyes.addEventListener('click', function () {
  var randomColor = EYES_COLOR[getRandomValue(EYES_COLOR)];

  setupWizardEyes.style.fill = randomColor;
  eyesInput.value = randomColor;
});

var setupWizardFireball = document.querySelector('.setup-fireball-wrap');
var fireballInput = setupWizardFireball.querySelector('input');

setupWizardFireball.addEventListener('click', function () {
  var randomColor = FIREBALL_COLOR[getRandomValue(FIREBALL_COLOR)];

  setupWizardFireball.style.background = randomColor;
  fireballInput.value = randomColor;
});
