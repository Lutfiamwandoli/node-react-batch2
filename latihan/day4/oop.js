// var dataCar = [
//     {brand:"pajero", factory:"mitshubisi", sound:"jaeufhu"},
//     {brand:"fortuner", factory:"toyota", sound:"shfoies"},
//     {brand:"avanza", factory:"toyota", sound:"eoufishef"},
//     {brand:"inova", factory:"suzuki", sound:"iuewabgoifah"}
// ]

// var dataNew = dataCar.sort() 

class Car{
    constructor(brand, factory, sound){
        this.obrand = brand
        this.factory = factory
        this.sound = sound

    }

    get brand(){
        return brand
    }
    set color(brand){
        this.brand = brand;
    }
}


var baru = new Car("avanza", "toyota", "uheufh")
console.log(baru)

baru.obrand = "karimun"
console.log(baru)
