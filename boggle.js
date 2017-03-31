const letters =  "ABCDEFGHIJKLMNOPQRSTUVWYZ";

class BoogleBoard {
  constructor (){
    this._board = [];
    this._dimension = 0;
  }

  shake(dimension) {
    for (let i = 0 ; i < (dimension * dimension) ; i++) {
      // populate random letters
      this._board.push(this.randomLetter());
    }
    this._dimension = dimension;
  }

  randomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
  }

  printBoard() {
    let board = "";
    for (let i = 0 ; i < this._dimension ; i++) {
      for (let j = 0 ; j < this._dimension ; j++) {
        board += this._board[i+j] + " ";
      }
      board += "\n";
    }

    console.log(board);
  }

  printBoard2D() {
    let board = "[";
    for (let i = 0 ; i < this._dimension ; i++) {
      board += "["
      for (let j = 0 ; j < this._dimension ; j++) {
        board += "'" +this._board[(i*this._dimension)+j] + "'";
        if( j != this._dimension-1)
          board += ",";
      }
      board += "]";
      if (i != this._dimension-1)
        board += "\n";
    }
    board += "]";

    console.log(board);
  }

}


let boogle = new BoogleBoard();

boogle.shake(4);
boogle.printBoard2D();
