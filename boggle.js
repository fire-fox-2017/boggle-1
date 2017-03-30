"use strict"

var fs = require("fs");

// Release 0

class Boggle {
  constructor(boardlength) {
    this._boardlength = boardlength;
  }

  boogle_board(){
    let arrBoard = [];
    for (let i = 0; i < this._boardlength; i++) {
      let arrInd = [];
      for (let k = 0; k < this._boardlength; k++) {
        arrInd.push(this.shake());
      }
      arrBoard.push(arrInd);
    }
    return arrBoard;
  }

  shake(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for( let j=0; j < 1; j++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
}

let boggle = new Boggle(4);
console.log(boggle.boogle_board());
