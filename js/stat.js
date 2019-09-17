'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_GAP = 250;
var BAR_HEIGHT = -150;
// почему тут фиксированная высота, а если окно изменится по высоте?
var BAR_FIRST_X = CLOUD_X + BAR_WIDTH;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderCloud(ctx, CLOUD_X, CLOUD_Y);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, Вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], BAR_FIRST_X + (BAR_GAP + BAR_WIDTH) * i, TEXT_GAP);

    var barHeight = (+BAR_HEIGHT * times[i]) / maxTime;

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(210, ' + Math.floor(Math.random() * 101) + '%, 50%)';
    }

    ctx.fillRect(BAR_FIRST_X + (BAR_GAP + BAR_WIDTH) * i, TEXT_GAP - GAP, BAR_WIDTH, barHeight);

    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), BAR_FIRST_X + (BAR_GAP + BAR_WIDTH) * i, barHeight + 220);
  }
};
