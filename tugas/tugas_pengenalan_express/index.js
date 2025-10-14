const express = require('express')
const app = express()
const port = 3000



let luasVolume = (req, res) => {
    let {jariJari} = req.params
    let {tinggi} = req.params

    let luasAlas = Math.PI * jariJari * jariJari;

    let kelilingAlas = 2 * Math.PI * jariJari;

    let volume = luasAlas * tinggi;

    res.json(
        `jariJari : ${jariJari}, tinggi: ${tinggi}, volume tabung : ${volume.toFixed(2)}, ` + `luas alas tabung : ${luasAlas.toFixed(2)}, keliling alas tabung : ${kelilingAlas.toFixed(2)}`
    );
};




let dataOrang =[
{id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
{id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
{id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
{id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
{id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
]


app.get('/', (req, res) => {
  res.send('Hello walawe')
})

let getDataOrang = (req, res)=>{
     let { umur, gender } = req.query
     if (umur) {
        dataOrang = dataOrang.filter(arr => arr.umur >= umur)
    }
    if (gender) {
        dataOrang = dataOrang.filter(arr => arr.jenisKelamin === gender)
    }
     let hasil = dataOrang.map((item, index) => {
        return `${index + 1}. ${item.name} - Pekerjaan: ${item.pekerjaan} - Umur: ${item.umur} Tahun`
    })

    res.json(hasil)
}

const dataOrangId = (req,res)=>{
  let {id} = req.params

  console.log(id)

  let result = dataOrang.find(dataOrang => dataOrang.id === Number(id))
  console.log(
    result
  )

if(result){
    const sapaan = result.jenisKelamin === "L" ? "Pak" : "Bu"
  res.json(`${sapaan} ${result.name} adalah seorang ${result.pekerjaan} yang berusia ${result.umur} tahun`)
}else{
  res.json(`Maaf data tidak ditemukan`)
}
}

    
app.get('/data-orang', getDataOrang)
app.get('/data-orang/:id', dataOrangId)
app.get('/luas-lingkaran/:jariJari/:tinggi', luasVolume)
app.get('/')





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
