let batas = "___________________________________________"
let enter = "\n"

console.log(enter)
console.log("Soal 1")
console.log(batas)

function hitungPersegi(sisi){
  function luasPersegi(s){return s * s}
  console.log(luasPersegi(sisi))
}

function hitungPersegiPanjang(panjang, lebar){

  function luasPersegiPanjang(p,l){return p * l}
  console.log(luasPersegiPanjang(panjang, lebar))
}
hitungPersegi(8)
hitungPersegiPanjang(12,7)

console.log(enter)
console.log("Soal 2")
console.log(batas)

function hitungKubus(rusuk){
  function volume(r){return r * r * r}
  function luas(r){return 6 * r * r}
  console.log(volume(rusuk))
  console.log(luas(rusuk))
  return ("")
  
}


function hitungBalok(panjang, lebar, tinggi){
  function volumeBalok(p, l, t){return p * l * t}
  function luasPermukaan(p, l, t){return 2 * (p*l + p*t + l*t)}
  console.log(volumeBalok(panjang, lebar, tinggi))
  console.log(luasPermukaan(panjang, lebar, tinggi))
  return ("")
  
}

console.log(hitungKubus(8))
hitungBalok(12,7, 5)

console.log(enter)
console.log("Soal 3")
console.log(batas)

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

people.sort((a,b) => (a.age)-(b.age))

function sort(arr, index = 0, nomor =1){
  if(index >= arr.length) return
  console.log(`${nomor}. ${arr[index].name}`)

  sort(arr, index + 1, nomor + 1)
}



sort(people)


console.log(enter)
console.log("Soal 4")
console.log(batas)


let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}

const {
  brand: phoneBrand,
  name: phoneName,
  year,
  colors: [colorBronze, , colorBlack]
} = phone;

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)


console.log(enter)
console.log("Soal 5")
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
buku = {
  ...buku,
  ...dataBukuTambahan,
  warnaSampul: [...buku.warnaSampul, ...warna]
};

console.log(buku);

console.log(enter)
console.log("Soal 6")
console.log(batas)


const addProducts = (samsungObj, newProductsArr) => {
  return {
    ...samsungObj,
    products: [
      ...samsungObj.products,
      ...newProductsArr
    ]
  };
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
console.log("Soal 6")
console.log(batas)

const konversiObject = ([nama, domisili, umur]) => ({
  nama,
  domisili,
  umur
});

let data = ["Bondra", "Medan", 25]


console.log(konversiObject(data))


console.log(enter)
console.log("Soal 6")
console.log(batas)


