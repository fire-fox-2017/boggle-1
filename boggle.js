
class BoggleBoard {
  constructor() {
  }

  shake(ukuran) {
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arr  = [];
    for (var i = 0; i < ukuran ; i++){
      arr.push([]);
      for (var j = 0; j < ukuran ; j++){
        arr[i].push(char.charAt(Math.floor((Math.random()*26))));
      }
    }
    return arr;
  }
}

let test = new BoggleBoard()
console.log(test.shake(4));
