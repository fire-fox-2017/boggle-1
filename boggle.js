class BoogleBoard{
  shake(){
    var arrBoogle = [];
    for(let i=0;i<4;i++){
      arrBoogle.push([]);
      for(let j=0;j<4;j++){
        arrBoogle[i].push(randomAbjad());
      }
    }
    console.log(arrBoogle);

    function randomAbjad(){
      var abc ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      abc = abc.split("");
      var i = Math.floor(Math.random()*26);
      return abc[i];
    }
  }
}

var bBoard = new BoogleBoard();
bBoard.shake();
