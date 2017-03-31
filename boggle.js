"use strict"
class Boogle {
  constructor() {
    this.char = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    this.board=[];
  }
  shake(num){
    let boggle =[];
    let size=num*num;
    let index=0;
    for(let i=0;i<size;i++){
      index =Math.floor((Math.random() * 26));
      boggle.push(this.char[index]);
    }
    for(let i = 0;i <=size-(num-1) ;i=i+num ){
      this.board.push(boggle.slice(i,(i+num)));
    }
    console.log(this.board);
  }

}

let Boogle1 =new Boogle();


Boogle1.shake(4);
