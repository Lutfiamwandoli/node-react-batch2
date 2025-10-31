class Animal {
  constructor(name) {
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get legs() {
    return this._legs;
  }

  set legs(value) {
    this._legs = value;
  }

  get cold_blooded() {
    return this._cold_blooded;
  }

  set cold_blooded(value) {
    this._cold_blooded = value;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name); 
console.log(sheep.legs); 
console.log(sheep.cold_blooded); 
sheep.legs = 3;
console.log(sheep.legs); 


class Ape extends Animal {
  constructor(name) {
    super(name);
    this._legs = 2; 
  }

  yell() {
    console.log("Auooo");
  }
}

class Frog extends Animal {
  constructor(name) {
    super(name);
  }

  jump() {
    console.log("hop hop");
  }
}


var sungokong = new Ape("kera sakti");
sungokong.yell();
console.log(sungokong.name); 
console.log(sungokong.legs); 
console.log(sungokong.cold_blooded); 

var kodok = new Frog("buduk");
kodok.jump(); 
console.log(kodok.name); 
console.log(kodok.legs); 
console.log(kodok.cold_blooded); 




class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = null;
  }

  render() {
    const date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    const output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();


