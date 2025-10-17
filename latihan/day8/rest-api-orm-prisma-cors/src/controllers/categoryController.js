const { PrismaClient } = require('../../generated/prisma')
const prisma = new PrismaClient()

const createCategory = async (req, res) => {
    let {name} = req.body
    try{
        const category = await prisma.category.create({
        data: {
            name
        },
        })

            res.json({'message': 'Category Was Succesfully Created', 'status': 'success'})
        }catch(err){
            res.json({
                info:null,
                message:"unsuccesfully category add",
                status: "gagal"
            })
        }
    }

let readCategory = async(req, res) => {

    try{
    const category = await prisma.category.findMany()
    res.json({
        
        category,
        message:"data terbaca",
        status: "mantap"
    })
}catch(err){
    res.json({
                info:null,
                message:"unsuccesfully Category add",
                status: "gagal"
            })
}
}



let readCategoryById = async (req, res) => {
    let {id} = req.params
try{
    const category = await prisma.category.findUnique({
  where: {
    id: Number(id)
  },
})
res.json({
    info: category,
    message: "mantap",
})
}catch(err){
    res.json({
        message: err.message
    })
}
}


let updateCategory = async (req, res) => {
    let {name} = req.body
    let {id} = req.params
try{
    const updateCategory = await prisma.category.update({
  where: {
    id: Number(id)
  },
  data: {
    name
  },
})
    res.json({'message': 'Category Was Succesfully Created', 'status': 'success'})
}catch(err){
    res.json(err)
}
}


let deleteCategory = async (req, res) => {
    let {id}=req.params
    try{
    const deleteCategory = await prisma.category.delete({
    where: {
    id: Number(id),
  },
})
    res.json({'message': 'Nilai Was Succesfully Deleted', 'status': 'success'})
    }catch(err){
        res.json(err)
    }
}

module.exports = {createCategory, readCategory, updateCategory, readCategoryById, deleteCategory}