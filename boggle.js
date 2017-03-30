function shake(value) {
    var board = []
    var huruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(var i = 0; i < value; i++) {
      board[i] = []
      for(var j = 0; j < value; j++) {
        board[i][j] = huruf[Math.floor(Math.random() * 10)]
      }
    }
    return board
  }



console.log(shake(4));
