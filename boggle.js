class BoggleBoard{

  constructor(){
  }
    shake (num){
      var board = [];
      var alpha = 'ABCDEFGHIJKLMNOPQRSTUPWXYZ';

      for (var i = 0 ; i < num ; i ++){
        var arr = [];
        board.push(arr);

        for (var j = 0; j < num ; j ++){
          board[i].push(alpha[Math.floor(Math.random()*alpha.length)])

        }
      }
      return board;
    }
  }

  var boggle1 = new BoggleBoard();
  var boggle2 = boggle1.shake (4);
  console.log(boggle2);
