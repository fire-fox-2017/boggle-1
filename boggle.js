"use strict"

class BoggleBoard {
  constructor() {
    this.arrAlfabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    this.board=[];
  }
  shake() {//random board
    for(let i=0;i<4;i++){
      let temp=[];
      for(let j=0;j<4;j++){
        let rand=Math.floor((Math.random() * this.arrAlfabet.length));
        temp.push(this.arrAlfabet[rand]);
      }
      this.board.push(temp);
    }
    return this.board;
  }
}

  let my_BoggleBoard= new BoggleBoard();
  console.log(my_BoggleBoard.shake());
