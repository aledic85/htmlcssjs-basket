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

  for (var i = 0; i < 10000; i++) {

    var player = getRandomPlayer();
    if (!isPresent(player, players)) {

      players.push(player);
    } else {
      i--;
    }

  }
  return players;
}




function init(){

  var players = getRandomPlayers();
  console.log(players);
}

$(document).ready(init);
