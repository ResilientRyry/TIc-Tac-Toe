class Board {
  constructor(grid) {
    this.grid = [
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()],
      [new Square(), new Square(), new Square()]
    ];
  }

  isFull() {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.grid[i][j].state != "") { count++ }
      }
    }
    if (count == 9) {
      return true;
    }
    else {
      return false;
    }
  }

  check_win() {

    for (let i = 0; i < 3; i++) {
      if (this.grid[i][0].state == this.grid[i][1].state && this.grid[i][0].state == this.grid[i][2].state && this.grid[i][0].state != "") {
        print_winner();
      }
    }

    for (let j = 0; j < 3; j++) {
      if (this.grid[0][j].state == this.grid[1][j].state && this.grid[0][j].state == this.grid[2][j].state && this.grid[0][j].state != "") {
        print_winner();
      }
    }

    if ((this.grid[0][0].state == this.grid[1][1].state && this.grid[0][0].state == this.grid[2][2].state && this.grid[0][0].state != "") ||
      (this.grid[0][2].state == this.grid[1][1].state && this.grid[0][2].state == this.grid[2][0].state && this.grid[0][2].state != "")) {
      print_winner();
    }

    if (this.isFull()) {
      print_tie();
    }

  }
}



class Square {
  constructor(state) {
    this.state = "";
  }

  whoseTurn() {
    if (counter == 0) {
      // document.getElementById('message').innerHTML = 'Player X turn'
      return this.state = "X";
    }
    else {
      // document.getElementById('message').innerHTML = 'Player O turn'
      return this.state = "O";
    }
  }
}



class Player {
  constructor(symbol) {
    this.symbol = symbol;
  }
}



class Game {
  constructor() {
    this.board = new Board();
    this.players = [
      new Player("X"),
      new Player("O")
    ];
  }
}
let counter = 0;
let g = new Game();

function play() {
  let brd = document.getElementById('board');
  brd.addEventListener('click', (event) => {
    // console.log(event.target);
    event.target.innerHTML = g.players[counter].symbol;

    let squareNum = event.target.id.split('');
    let row = squareNum[0];
    let col = squareNum[1];

    g.board.grid[row][col].whoseTurn();
    g.board.check_win();

    if (counter == 0) {
      document.getElementById('message').innerHTML = 'Player O turn';
      counter = 1
    }else {
      document.getElementById('message').innerHTML = 'Player X turn'
      counter = 0
    }
  });
}



function print_winner() { //alert winner
  let winner = g.players[counter].symbol;
  alert(`${winner} wins!!`);
  location.reload();//reload game after
}


function print_tie() {// alert tie
  alert("It's a tie!!");
  location.reload();//reload game after
}

play();//start game
