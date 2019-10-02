'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var TEXT_GAP = 250;
  var BAR_HEIGHT = -(CLOUD_HEIGHT - (CLOUD_HEIGHT - (TEXT_GAP - GAP)) - (BAR_WIDTH + BAR_GAP));
  var BAR_FIRST_X = CLOUD_X + BAR_WIDTH;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
    ctx.strokeRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, players, times) {

    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    renderCloud(ctx, CLOUD_X, CLOUD_Y);

    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура, Вы победили!', CLOUD_X + GAP * 2, BAR_WIDTH - GAP);
    ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, BAR_WIDTH + GAP);

    var maxTime = window.util.getMaxElement(times);

    for (var i = 0; i < players.length; i++) {

      ctx.fillStyle = '#000';
      ctx.fillText(players[i], BAR_FIRST_X + (BAR_GAP + BAR_WIDTH) * i, TEXT_GAP);

      var barHeight = (BAR_HEIGHT * times[i]) / maxTime;

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(210, ' + Math.floor(Math.random() * 101) + '%, 50%)';
      }

      ctx.fillRect(BAR_FIRST_X + (BAR_GAP + BAR_WIDTH) * i, TEXT_GAP - GAP, BAR_WIDTH, barHeight);

      ctx.font = '16px PT Mono';
      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), BAR_FIRST_X + (BAR_GAP + BAR_WIDTH) * i, barHeight + (CLOUD_HEIGHT - BAR_GAP));
    }
  };
})();
