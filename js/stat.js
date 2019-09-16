'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_GAP = 250;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderCloud(ctx, CLOUD_X, CLOUD_Y);

  var canvas = document.getElementsByTagName('canvas')[0];

  var ctx = canvas.getContext('2d');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, Вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  /*  не могу понять, как высчитать высоту столбца и
    координату 90 по игреку в отрисовке бара ctx.fillRect */

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, TEXT_GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, 90, BAR_WIDTH, 150);
    } else {
      ctx.fillStyle = 'hsl(210, ' + Math.floor(Math.random() * 101) + '%, 50%)';
      ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, 90, BAR_WIDTH, 150);
    }
  }
};


/*  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, TEXT_GAP);
    ctx.fillStyle = 'hsl(210, ' + Math.floor(Math.random() * 101) + '%, 50%)';
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, 90, BAR_WIDTH, 150);
  }*/
