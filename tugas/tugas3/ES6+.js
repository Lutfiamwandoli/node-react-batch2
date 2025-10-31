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

let introduce = (name, age, job)=>{
  if(name === "john"){ 
  return `Pak ${name} adalah seorang ${job} yang berusia ${age} tahun`
}else{
  return `Bu ${name} adalah seorang ${job} yang berusia ${age} tahun`
}

}


const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis")
const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru")

console.log(perkenalanJohn)
console.log(perkenalanSarah)

console.log(enter)
console.log("Soal 1")
console.log(batas)

const newFunction = (firstName, lastName)=>{
  return {
    firstName,
    lastName,
    fullName:()=>{
      console.log(firstName + " " + lastName)
    }
  }
}

console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()

console.log(enter)
console.log("Soal 1")
console.log(batas)

let phone = {
   name: "Galaxy Note 20",
   brand: "Samsung",
   year: 2020,
   colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}


let {name: phoneName, brand: phoneBrand, year, colors: [colorBlack, , colorBronze]} = phone

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)

console.log(enter)
console.log("Soal 1")
console.log(batas)

let warna = ["biru", "merah", "kuning" , "hijau"]


let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}


let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}

let bukuBaru = {...buku, ...dataBukuTambahan, warnaSampul: [...buku.warnaSampul, ...warna]}

console.log(bukuBaru)

console.log(enter)
console.log("Soal 1")
console.log(batas)

const addProducts = (baru, newBaru)=>{
  return {...baru, products: [...baru.products, ...newBaru]}
}

let samsung ={
 name: "Samsung",
 products :[
  {name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"]},
  {name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"]},
  {name: "Samsung Galaxy Note 20s", colors: ["white", "black"]}
 ]
 }

let newProducts = [
 {name: "Samsung Galaxy A52", colors: ["white", "black"]},
 {name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"]}
]

samsung = addProducts(samsung, newProducts)

console.log(samsung)

console.log(enter)
console.log("Soal 1")
console.log(batas)

let data = ["Bondra", "Medan", 25]
let [nama, kota, umur] = data

let tampilkanData = (nama, kota, umur)=>{
  console.log( {
    nama: nama, 
    domisili: kota,
    umur: umur
  } )
}

tampilkanData(...data)

console.log(enter)
console.log("Soal 1")
console.log(batas)

const data1 = [
  { name: "Ahmad", class: "adonis"},
  { name: "Regi", class: "laravel"},
  { name: "Bondra", class: "adonis"},
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" }
]

const data2 = [
  { name: "Yogi", class: "react"},
  { name: "Fikri", class: "agile"},
  { name: "Arief", class: "agile"}
]

  const data3 = [...data1, ...data2]


const graduate = (data)=>{
  
  const result = {} 
  data3.forEach(({name, class: className})=>{
    if(!result[className])
      result[className] = [];
      result[className].push(name)
    
  })
  return result
  }


console.log(graduate(data1))

console.log(graduate(data2))

