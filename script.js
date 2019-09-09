const win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];
let counter = 1;
let clicked = [];
let win1 = [];
let win2 = [];
let end = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let winIndex = null;
let player1 = 0;
let player2 = 0;
let drew = 0;
let noOfGames = 0;

function onClick(i) {
  for (let j = 0; j < clicked.length; j++) {
    if (clicked[j] === i) {
      return 0;
    }
  }

  if (counter % 2 === 1) {
    document.getElementById(i).innerHTML = "O";
    document.getElementById("turn").innerHTML = "Player 2 To Move";
    win1.push(i);
    clicked.push(i);

    if (checkifplayer1win()) {
      console.log("Player1 Wins");
      document.getElementById("turn").innerHTML = "Player1 Wins!!";
      document.getElementById("turn").style.color = "blue";

      player1 += 1;

      document.getElementById("player1").innerHTML = "Player 1: " + player1;
      for (k = 0; k < 3; k++) {
        document.getElementById(win[winIndex][k]).style.color = "red";
      }
      clicked = end;
      setTimeout(reset, 2000);
      return;
    }

    if (checkifdrew()) {
      console.log("Match Drew");
      document.getElementById("turn").innerHTML = "Match Tied!!";
      document.getElementById("turn").style.color = "blue";
      drew += 1;
      document.getElementById("drew").innerHTML = "Tie: " + drew;
      setTimeout(reset, 2000);
    }
  } else if (counter % 2 === 0) {
    document.getElementById(i).innerHTML = "X";
    document.getElementById("turn").innerHTML = "Player 1 To Move";
    win2.push(i);
    clicked.push(i);

    if (checkifplayer2win()) {
      console.log("Player2 Wins");
      document.getElementById("turn").innerHTML = "Player 2 Wins!!";
      document.getElementById("turn").style.color = "blue";

      player2 += 1;

      document.getElementById("player2").innerHTML = "Player 2: " + player2;
      for (k = 0; k < 3; k++) {
        document.getElementById(win[winIndex][k]).style.color = "red";
      }
      clicked = end;
      setTimeout(reset, 2000);
      return;
    }

    if (checkifdrew()) {
      console.log("Match Drew");
      document.getElementById("turn").innerHTML = "Match Tied!!";
      document.getElementById("turn").style.color = "blue";
      drew += 1;
      document.getElementById("drew").innerHTML = "Tie: " + drew;
      setTimeout(reset, 2000);
    }
  }

  counter += 1;
}

function checkifplayer1win() {
  for (let i = 0; i < 8; i++) {
    if (
      win1.includes(win[i][0]) &&
      win1.includes(win[i][1]) &&
      win1.includes(win[i][2])
    ) {
      winIndex = i;
      return true;
    }
  }
  return false;
}
function checkifplayer2win() {
  for (let i = 0; i < 8; i++) {
    if (
      win2.includes(win[i][0]) &&
      win2.includes(win[i][1]) &&
      win2.includes(win[i][2])
    ) {
      winIndex = i;
      return true;
    }
  }
  return false;
}
function checkifdrew() {
  if (end.length != clicked.length) {
    return false;
  } else {
    return true;
  }
}
function reset() {
  for (i = 1; i < 10; i++) {
    document.getElementById(i).innerHTML = "";
    document.getElementById(i).style.color = "black";
  }
  counter = 1;
  clicked = [];
  win1 = [];
  win2 = [];
  end = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  winIndex = null;
  noOfGames += 1;

  document.getElementById("turn").style.color = "#c93422";
  noOfGames += 1;
  document.getElementById("turn").innerHTML = "Player 1 To Move";
}
