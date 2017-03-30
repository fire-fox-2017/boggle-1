"use strict"

function shake(num){
  let char = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let boggle =[];
  let board=[];
  let size=num*num;
  let index=0;
  for(let i=0;i<size;i++){
    index =Math.floor((Math.random() * 26));
    boggle.push(char[index]);
  }

  for(let i = 0;i <=size-(num-1) ;i=i+num ){
    board.push(boggle.slice(i,(i+num)));
  }




  console.log(board);


}

shake(4);
