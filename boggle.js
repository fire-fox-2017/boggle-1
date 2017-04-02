'use strict'

class boogleBoard{
  constructor(){

  }

  shake(){
    let box = [];
    let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i=0; i<4; i++){
      box.push([]);
      for (let j=0; j<4; j++){
        box[i].push(huruf.charAt(Math.floor(Math.random()*26)));
      }
    }

    console.log(box)
  }
}

let board = new boogleBoard();

board.shake();
