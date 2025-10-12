var filterCarsPromise = require('./promise3.js')
 
// Lanjutkan code untuk menjalankan function filterCars
filterCarsPromise("black",2019)
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error.message)
})

filterCarsPromise("silver",2017)
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error.message)
})


async function mobil(){
    try{
    var result = await filterCarsPromise("grey", 2019)
    console.log(result)
 }catch(error){
    console.log(error.message)
 }
}

async function mobil2(){
    try{
    var result = await filterCarsPromise("grey", 2018)
    console.log(result)
 }catch(error){
    console.log(error.message)
 }
}

async function mobil3(){
    try{
    var result = await filterCarsPromise("black", 2020)
    console.log(result)
 }catch(error){
    console.log(error.message)
 }
}

mobil()
mobil2()
mobil3()