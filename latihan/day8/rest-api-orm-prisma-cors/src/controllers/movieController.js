const { PrismaClient } = require('../../generated/prisma')
const prisma = new PrismaClient()

const createMovie = async (req, res) => {
    let {title, year, categoryId} = req.body
    try{
        const movies = await prisma.movies.create({
        data: {
            title,
            year,
            categoryId
        },
        })

            res.json({'message': 'Movie Was Succesfully Created', 'status': 'success'})
        }catch(err){
            res.json({
                info:null,
                message:"unsuccesfully movie add",
                status: "gagal"
            })
        }
    }

let readMovie = async(req, res) => {

    try{
    const movies = await prisma.movies.findMany()
    res.json({
        
        movies,
        message:"data terbaca",
        status: "mantap"
    })
}catch(err){
    res.json({
                info:null,
                message:"unsuccesfully movie add",
                status: "gagal"
            })
}
}



let readMovieById = async (req, res) => {
    let {id} = req.params
try{
    const movies = await prisma.movies.findUnique({
  where: {
    id: Number(id)
  },
})
res.json({
    info: movies,
    message: "mantap",
})
}catch(err){
    res.json({
        message: err.message
    })
}
}


let updateMovie = async (req, res) => {
    let {title, year, categoryId} = req.body
    let {id} = req.params
try{
    const updateMovie = await prisma.movies.update({
  where: {
    id: Number(id)
  },
  data: {
    title, year, categoryId
  },
})
    res.json({'message': 'Movie Was Succesfully Created', 'status': 'success'})
}catch(err){
    res.json(err)
}
}


let deleteMovie = async (req, res) => {
    let {id}=req.params
    try{
    const deleteMovies = await prisma.movies.delete({
    where: {
    id: Number(id),
  },
})
    res.json({'message': 'Nilai Was Succesfully Deleted', 'status': 'success'})
    }catch(err){
        res.json(err)
    }
}

module.exports = {createMovie, readMovie, updateMovie, readMovieById, deleteMovie}