class BoggleBoard {
  constructor(size) {
    this.size = size;
    this.board = [];

    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.alphabet = alph.split("");
  }

  shake() {
    for (let i = 0; i < this.size; i++) {
      let fill =[];
      for (let j = 0; j < this.size; j++) {
        let letter = this.alphabet[Math.floor(Math.random()*this.alphabet.length)];
        fill.push(letter);
      }
      this.board.push(fill);
    }
    return this.board;
  }

}

let boggleBoard = new BoggleBoard(4);
console.log(boggleBoard.shake());
