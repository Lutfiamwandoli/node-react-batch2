let batas = "___________________________________________"
let enter = "\n"

console.log(enter)
console.log("Soal 1")
console.log(batas)

let hitungPersegi = (sisi)=>{
  let luasPersegi =(s)=>{return s * s}
  console.log(luasPersegi(sisi))
}

let hitungPersegiPanjang = (panjang, lebar)=>{

  let luasPersegiPanjang = (p,l)=>{return p * l}
  console.log(luasPersegiPanjang(panjang, lebar))
}
hitungPersegi(8)
hitungPersegiPanjang(12,7)

console.log(enter)
console.log("Soal 1")
console.log(batas)

// const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis")

// let introduce = (...data)=>{

//  const (nama, umur, gender, pekerjaan) = data

//  (`Pak ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`)
// }

// console.log(introduce(perkenalanJohn))