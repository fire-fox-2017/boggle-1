class BoogleBoard{
  constructor(size){
    this._boogleBoardSize = size;
    this._boogleBoard = [];
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this._alphabet = alphabet.split('');
  }

  shake(){
    for (let baris = 0; baris < this._boogleBoardSize; baris++) {
      let isiArray = [];
      for(let kolom = 0; kolom < this._boogleBoardSize; kolom++){
        let kata = this._alphabet[Math.floor(Math.random() * 25) + 0];
        isiArray.push(kata);
      }
      this._boogleBoard.push(isiArray);
    }
    return this._boogleBoard;
  }
}

let papan = new BoogleBoard(4);
console.log(papan.shake());
