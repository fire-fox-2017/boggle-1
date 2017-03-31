function shake(value) {
  let board = []
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVXYZ"

  for (var i=0; i<value; i++) {
    board[i] = []
    for (var j=0; j<value; j++) {
      board[i][j] = alphabets[Math.floor(Math.random()*25)]
    }
  }
  return board
}
console.log(shake(9))
