var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]


function bacaBuku(time, index){
    if(index < books.length){
    readBooks(time, books[index], function(membaca){
        if(time >  0){
            bacaBuku(membaca, index + 1)
        } 
    })
}
}

bacaBuku(10000, 0)