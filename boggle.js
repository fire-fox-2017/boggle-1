function shake(val) {
  let board = [];
  let words = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
  for(let i = 0; i < val; i++) {
    board[i] = [];
    for(let j = 0; j < val; j++) {
      board[i][j] = words[randomGenerator()];
    }
  }
  
  return board;
}

function randomGenerator() {
  let random = Math.floor(Math.random() * 26);
  return random;
}

console.log(shake(4));