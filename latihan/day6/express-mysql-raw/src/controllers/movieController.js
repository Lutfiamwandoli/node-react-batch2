// let movies = [
//     {id: 1, title: "Spider-Man", year: 2002},
//     {id: 2, title: "John Wick", year: 2014},
//     {id: 3, title: "The Avengers", year: 2012},
//     {id: 4, title: "Logan", year: 2017},
// ]



// const getMovies = (req, res) => {
//     let {title} = req.query
//     let {id} = req.query
//     let result = ""
//     console.log(title)
//     console.log(id)

//     if(title === undefined){
//       title = ""
//     }
    
//     movies.forEach((item, index) => {
//       if(item.title.toLowerCase().includes(title)){
//         result += `${index+1}. ${item.title} <br>`
//         }
//         // console.log(title)
//     })
    
//     res.send(result)
// }

// const getMoviesByID = (req, res) => {
//     let {id} = req.params

//     let result = movies.find(movies => movies.id === Number(id))
//     res.send (`${result.title}`)
// } 

const { connectionPool } = require('../config/db')

const createMovie = (req, res) => {
    let {title, year} = req.body

    let queryText = `INSERT INTO movies (title, year, created_at, updated_at) VALUES("${title}", ${year}, now(), now())`

    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.log(err)
            return
        }
    })

    res.json({'message': 'Movie Was Succesfully Created', 'status': 'success'})
}


let readMovie = (req, res) => {
    connectionPool.query("SELECT * FROM movies", (err, data) => {

if (err) {
console.error(err);
return;
}

});
}

let readMovieById = (req, res) => {
    let {id} = req.params



    connectionPool.query(`SELECT * FROM movies WHERE id=${id}`, (err, data) => {

if (err) {
console.error(err);
return;
}
// rows fetch

});
}


let updateMovie = (req, res) => {
    let {title, year} = req.body
    let {id} = req.params

    
    connectionPool.query(`UPDATE movies SET title='${title}', year=${year}, updated_at=NOW() WHERE id=${id}`, (err, data) => {
        if(err){
            console.log(err)
            return
        }
    })

    res.json({'message': 'Movie Was Succesfully Created', 'status': 'success'})
}

let deleteMovie = (req, res) => {
    let {id}=req.params
    connectionPool.query(`DELETE FROM movies WHERE id=${id}`, (err, data) => {
        if(err){
            console.log(err)
            return
        }
    })

    res.json({'message': 'Nilai Was Succesfully Deleted', 'status': 'success'})

}

module.exports = {createMovie, readMovie, updateMovie, readMovieById, deleteMovie}