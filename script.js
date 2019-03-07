function getRandom(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomChar() {

  var rndInt = getRandom(65, 90);
  var rndChar = String.fromCharCode(rndInt);

  return rndChar;
}

function getRandomId() {

  var rndChars = "";
  var rndVals = "";

  for (var i=0;i<3;i++) {

    rndChars += getRandomChar();
    rndVals += getRandom(0,9);
  }

  var rndId = rndChars + rndVals;
  
  return rndId;
}

function getRandomPlayer() {

  var twoPerc = getRandom(0, 100);
  var threePerc = 100 - twoPerc;
  var player = {
    "id": getRandomId(),
    "points": getRandom(3, 90),
    "bounce": getRandom(0, 100),
    "mistake": getRandom(0, 100),
    "twoPerc": twoPerc,
    "threePerc": threePerc,
  }
  return player
}

function isPresent(player, players) {

  var present = false;

  for (var i = 0; i < players.length; i++) {
    if (player.id == players[i].id) {
      present = true;
    }
  }
  return present;
}

function getRandomPlayers() {

  var players = [];

  for (var i = 0; i < 10; i++) {

    var player = getRandomPlayer();
    if (!isPresent(player, players)) {

      players.push(player);
    } else {
      i--;
    }
  }
  return players;
}

function updateImput(players) {

  for (var i = 0; i < players.length; i++) {

    var player = players[i];
    var object = document.createElement("option");

    object.value = player.id;
    $("#players").append(object)
  }
}

function playerSelector(players) {

  var me = $("#usr-input");
  var selId = me.val();

  for (var i = 0; i < players.length; i++) {

    var player;

    if (selId == players[i].id) {
      player = players[i]
    }
  }

  var id = $("#id > span.content");
  var points = $("#points > span.content");
  var bounce = $("#bounce > span.content");
  var mistake = $("#mistake > span.content");
  var twoPerc = $("#twoPerc > span.content");
  var threePerc = $("#threePerc > span.content");

  id.text(player.id);
  points.text(player.points);
  bounce.text(player.bounce);
  mistake.text(player.mistake);
  twoPerc.text(player.twoPerc);
  threePerc.text(player.threePerc);
}

function clearButton() {

  var input = $("#usr-input");
  input.val("");

  var id = $("#id > span.content");
  var points = $("#points > span.content");
  var bounce = $("#bounce > span.content");
  var mistake = $("#mistake > span.content");
  var twoPerc = $("#twoPerc > span.content");
  var threePerc = $("#threePerc > span.content");

  id.text("");
  points.text("");
  bounce.text("");
  mistake.text("");
  twoPerc.text("");
  threePerc.text("");
}

function init() {

  var players = getRandomPlayers();
  updateImput(players);

  var input = $("#usr-input");
  input.change(function() {
    playerSelector(players)
  });

  var button = $("#clear-btn");
  button.click(clearButton);
}

$(document).ready(init);
