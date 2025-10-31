var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
function bacaBuku(time, index){
    if(index < books.length){
    readBooksPromise(time, books[index])
    .then(function(sisaWaktu){
        bacaBuku(sisaWaktu, index + 1)
    })
    .catch(function(sisaWaktu){
        return ("")
    })
}
}

bacaBuku(10000, 0)