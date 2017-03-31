class BoggleBoard{
  constructor(papan){
    this._papan = papan;
  }

  shake(){
    let board = [];
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0; i<this._papan; i++){
      board.push([]);
      for(let j=0;j<this._papan;j++){
        board[i][j] = possible.charAt(Math.floor(Math.random() * possible.length));
      }
    }
    console.log(board);
  }
}

let game = new BoggleBoard(4);
game.shake();
