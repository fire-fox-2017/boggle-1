class Boogle {
  constructor(size) {
    this.size = size
  }

  begin(){
    let arr = []
    for (let i=0; i<this.size; i++){
      let temp = []
      for (let z=0; z<this.size; z++){
        temp.push(String.fromCharCode(this.random()))
      }
      arr.push(temp)
    }
    console.log(arr);
    // console.log(this.random());
  }

  random(){
    return Math.floor((Math.random() * (90 - 65 + 1)) + 65);
  }
}

let play = new Boogle(4)
play.begin()

// String.fromCharCode(65)
