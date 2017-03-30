class boggleBoard {
  constructor (boardDimension){
    this._dimension = boardDimension;
    this._board = [];
    this._tempArray = [];
    this._alphabet = [];
  }

  initializeAlphabet(){
    for(let a='A'.charCodeAt(0), z='Z'.charCodeAt(0); a<=z ; a++){
      this._alphabet.push(String.fromCharCode(a));
    }
  }

  fillBoard(){
    for(let x=0 ; x<(Math.pow(this._dimension,2)) ; x++){
      this._tempArray.push(this._alphabet[Math.floor(Math.random()*26)]);
    }
    for(let y=0 ; y<this._tempArray.length; y+=this._dimension){
      this._board.push(this._tempArray.slice(y,y+this._dimension));
    }
  }
}
let a = new boggleBoard(4);
a.initializeAlphabet();
a.fillBoard();

console.log(a._board);
