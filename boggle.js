class Boggle{
  constructor(){
    this.board=[];
    this.alp="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  shake(num){
    for (let i=0; i<num; i++){
      this.board.push([]);
    }
    for (let i=0; i<this.board.length; i++){
      for (let j=0; j<4; j++){
        this.board[i].push(this.alp.charAt(Math.floor(Math.random()*this.alp.length)));
      }
    }
    console.log(this.board);
  }
}

let bg = new Boggle;
bg.shake(4);
