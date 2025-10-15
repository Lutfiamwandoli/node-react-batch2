const { connectionPool } = require("../config/db")


const getIndeksNilai = (nilai) => {
    if (nilai >= 80) return "A";
    else if (nilai >= 70) return "B";
    else if (nilai >= 60) return "C";
    else if (nilai >= 50) return "D";
    else return "E";
};




let createNilai = (req, res) => {
let {nama, mata_kuliah, nilai} = req.body


let indeks_nilai= getIndeksNilai(nilai)

if(nilai<=0 || nilai>=100){
    return res.status(400).json({message : "data nilai salah"})
}

let queryText = `INSERT INTO nilai_mahasiswa (nama, mata_kuliah, nilai, indeks_nilai, created_at, updated_at) VALUES (?,?,?,?, now(), now() ) `

connectionPool.query(queryText,
    [nama, mata_kuliah, nilai, indeks_nilai],
    (err, data)=>{
    if(err){
            console.log(err)
            return
        }
})



res.json({'message': 'Nilai Was Succesfully Created', 'status': 'success'})
}







let getNilai = (req,res)=>{

    connectionPool.query("SELECT * FROM nilai_mahasiswa", (err, data) => {

if (err) {
console.error(err);
return;
}
res.json(data);
});
}








let updateNilai = (req,res)=>{
let {nama, mata_kuliah, nilai} = req.body
let {id}= req.params


let indeks_nilai= getIndeksNilai(nilai)

if(nilai<=0 || nilai>=100){
    return res.status(400).json({message : "data nilai salah"})
}

let queryText = `UPDATE nilai_mahasiswa SET nama='${nama}', mata_kuliah='${mata_kuliah}', nilai=${nilai}, indeks_nilai='${indeks_nilai}', updated_at=NOW() WHERE id=${id} `

connectionPool.query(queryText, (err, data)=>{
    if(err){
            console.log(err)
            return
        }
})



res.json({'message': 'Nilai Was Succesfully updated', 'status': 'success'})
}











let deleteNilai = (req, res) => {
    let {id}=req.params
    connectionPool.query(`DELETE FROM nilai_mahasiswa WHERE id=${id}`, (err, data) => {
        if(err){
            console.log(err)
            return
        }
    })

    res.json({'message': 'Nilai Was Succesfully Deleted', 'status': 'success'})

}



module.exports = {createNilai, getNilai, updateNilai, deleteNilai}