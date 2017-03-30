class BoggleBoard {
  constructor() {
  }

  shake (num) {

    var Abjad = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y" ,"Z"];
    let board = [];
    for (var i=0; i<num; i++) {
      board.push([]);
      //console.log(board);
      for(var j=0; j<num; j++){
        board[i].push( Abjad[ Math.floor(Math.random() * Abjad.length)] );
      }
    }
    return board;
  }

}
var Boggle1 = new BoggleBoard();
var Boggle2 = Boggle1.shake(4);
console.log(Boggle2);
