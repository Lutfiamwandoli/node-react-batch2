var filterBooksPromise = require('./promise2.js')
 
filterBooksPromise(true, 50)
.then(function(result){
    console.log("buku berwarna dan 50 halaman: ", result)
})
.catch(function(error){
    console.log(error.message)
})

async function bacaBuku(){
    try{
    var result = await filterBooksPromise(false, 250)
    console.log(result)
 }catch(error){
    console.log(error)
 }
}

async function bacaBukuku(){
    try{
    var result = await filterBooksPromise(false, 30)
    console.log(result)
 }catch(error){
    console.log(error.message)
 }
}

bacaBuku()
bacaBukuku()