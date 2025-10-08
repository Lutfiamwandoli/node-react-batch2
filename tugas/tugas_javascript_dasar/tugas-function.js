var batas = "----------------------------------------"
var enter = "\n"

console.log(enter)
console.log(batas)
console.log(enter)
console.log("Soal Nomor 1")
console.log(batas)
var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";
var words = sentence.length
var words = 9
if(words < 10){
  console.log("Pendek")
}else if(words >= 10 && words <= 30){
  console.log("Sedang")
}else{
  console.log("Panjang")
}


console.log(batas)
console.log(enter)
console.log("Soal Nomor 2")
console.log(batas)
var nilai = 74;

if(nilai >= 80){
  console.log("A")
  
}else if(nilai >= 70 && nilai < 80){
  console.log("B")
}else if(nilai >= 60 && nilai < 70){
  console.log("C")
}else if(nilai >= 50 && nilai < 60){
  console.log("D")
}else{
  console.log("E")
}

console.log(batas)
console.log(enter)
console.log("Soal Nomor 3")
console.log(batas)
var tanggal = 7;
var bulan = 4;
var tahun = 2000;
switch(bulan){
  case 1: {console.log(tanggal.toString() + " Januari " + tahun.toString())}
  break;
  case 2: {console.log(tanggal.toString() + " Februari " + tahun.toString())}
  break;
  case 3: {console.log(tanggal.toString() + " Maret " + tahun.toString())}
  break;
  case 4: {console.log(tanggal.toString() + " April " + tahun.toString())}
  break;
  case 5: {console.log(tanggal.toString() + " Mei " + tahun.toString())}
  break;
  case 6: {console.log(tanggal.toString() + " Juni " + tahun.toString())}
  break;
  case 7: {console.log(tanggal.toString() + " Juli " + tahun.toString())}
  break;
  case 8: {console.log(tanggal.toString() + " Agustus " + tahun.toString())}
  break;
  case 9: {console.log(tanggal.toString() + " September " + tahun.toString())}
  break;
  case 10: {console.log(tanggal.toString() + " Oktober " + tahun.toString())}
  break;
  case 11: {console.log(tanggal.toString() + " November " + tahun.toString())}
  break;
  case 12: {console.log(tanggal.toString() + " Desember " + tahun.toString())}
  break;
}

console.log(batas)
console.log(enter)
console.log("Soal Nomor 4")
console.log(batas)
var i = 0
var j= 10
while(i <= 10){
  console.log((i*2)+(" - I love Coding"))
  i++
}
while(j >= 0){
  console.log((j*2)+(" - I will become a MERN Stack developer"))
  j--
}

console.log(batas)
console.log(enter)
console.log("Soal Nomor 4")
console.log(batas)

for (var i = 1; i <= 20; i++){
  if(i % 2 === 0) {
    console.log(i + " - Angka Genap")
  } else {
    console.log(i + " - Angka Ganjil")
  }
  
}

console.log(batas)
console.log(enter)
console.log("Soal Nomor 4")
console.log(batas)

for (var i = 1; i <= 20; i++){
  if (i % 3 === 0) {
     if(i % 2 === 0) {
   
    console.log(i + " - ToT")
  }else {
    console.log(i + " - I love coding")
  }
  }else{
      if(i % 2 === 0) {
   
    console.log(i + " - Berkualitas")
  }else {
    console.log(i + " - Santai")
  }
  } 
}

console.log(batas)
console.log(enter)
console.log("Soal Nomor 4")
console.log(batas)

var n = 7;
for (var i = 1; i <= n; i++){
  console.log("#".repeat(i))

}

console.log(batas)
console.log(enter)
console.log("Soal Nomor 4")
console.log(batas)
var sentence="Fullstack Developer"
for(var i=0; i<sentence.length; i++){
  console.log(sentence[i])
}

console.log(batas)
console.log(enter)
console.log("Soal Array")
console.log(batas)
var dataPeserta = ["john", "laki-laki", "programmer", "30"]
var output = "Halo nama saya " + dataPeserta[0] + ". Saya " + dataPeserta[1] + " berumur " + dataPeserta[3] + " Bekerja sebagai seorang " + dataPeserta[2]

console.log(output)


console.log(batas)
console.log(enter)
console.log("Soal Array")
console.log(batas)

var sayuran=[]

sayuran.push("Kangkung")
sayuran.push("Bayam")
sayuran.push("Buncis")
sayuran.push("Kubis")
sayuran.push("Timun")
sayuran.push("Seledri")
sayuran.push("Tauge")

console.log(sayuran)

console.log(batas)
console.log(enter)
console.log("Soal Array")
console.log(batas)
var sayuran1 = sayuran.sort()
for(var i=0; i < sayuran.length;i++){
console.log((i+1) + ". " + sayuran1[i])
}

console.log(batas)
console.log(enter)
console.log("Soal Array")
console.log(batas)
var word = "car"

var output = [word[0], word[0] + word[1], word, word[1] + word[2], word[2]]

console.log(output)



console.log(batas)
console.log(enter)
console.log("Soal array")
console.log(batas)

var numbers = [ 4,5,1,4,6,8,9,21]

var jumlah = 0
for (var i = 0; i < numbers.length; i++) {
    jumlah += numbers[i]
}
console.log(jumlah)


console.log(batas)
console.log(enter)
console.log("Soal array")
console.log(batas)

var kumpulanAngka = [
 [1,3,5,7,8,9],
 [4,5,6,2,3,1],
 [6,7,8,1,3,5],
]
var hasil = []

for(i=0; i<kumpulanAngka.length; i++){
  var total=0
  for(j = 0; j< kumpulanAngka[i].length; j++){
    total += kumpulanAngka[i][j]
  }
  hasil.push(total)
  
}
console.log(hasil)

console.log(batas)
console.log(enter)
console.log("Soal function")
console.log(batas)

function introduce(nama, jenisKelamin, pekerjaan, umur){
  return  nama +  pekerjaan + umur

}

var john = introduce("Pak John ", "Laki-laki ", "seorang penulis ", "yang berusia 30 Tahun")
console.log(john)

var john = introduce("Bu Sarah ", "Perempuan", "seorang Model ", "yang berusia 28 Tahun")
console.log(john)

console.log(batas)
console.log(enter)
console.log("Soal function")
console.log(batas)

var text = "Super Bootcamp Fullstack Dev 2022"

function karakterUnik(str){
  str = str.toLowerCase().replaceAll(" ", "")
  var result = ''
  
  for(var i=0; i < str.length; i++){
    var char = str[i]
    if(str.indexOf(char) === str.lastIndexOf(char)){
      result += char
    }
  }
  return result

}

console.log(karakterUnik(text));



