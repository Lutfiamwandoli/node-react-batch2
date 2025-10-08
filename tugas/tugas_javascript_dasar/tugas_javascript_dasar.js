
// soal nomor 1
var batas = ("=============================================================")
console.log(batas)
console.log("Latihan JavaScript Dasar")
console.log(batas)
console.log("soal nomor 1")
var perkenalan = 'Nama saya adalah';
var nama = "Lutfi Amwan Doli Siregar" 
var kata1 = "saya"
var kata2 = "berharap"
var kata3 = "untuk"
var kata4 = "menjadi"
var kata5 = "seorang"
var kata6 = "front-end"
var kata7 = "developer"

var hasil = perkenalan.concat(" ", nama, " ", kata1, " ", kata2, " ", kata3, " ", kata4, " ", kata5, " ", kata6, " ", kata7)

console.log(hasil)




console.log(batas)

console.log("soal nomor 2")
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789"

// 1. password1 = "TES123"
var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3]
console.log("password ke satu: " + password1)

// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10]
console.log("password ke dua: "+ password2 )

// 3. password3 = "R4H4514"
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4]
console.log("password ke tiga: " + password3)

console.log(batas)
console.log("soal nomor 3")
var sentence2 = 'wow JavaScript is so cool';

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(3, 14); 
var thirdWord2 = sentence2.substring(14, 18);
var fourthWord2 = sentence2.substring(18, 21);
var fifthWord2 = sentence2.substring(21);

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);


console.log(batas)
console.log("soal nomor 4")
var sentence3 = 'wow JavaScript is so cool';

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(3, 14); 
var thirdWord3 = sentence3.substring(14, 18);
var fourthWord3 = sentence3.substring(18, 21);
var fifthWord3 = sentence3.substring(21);

var firstWordLength = exampleFirstWord3.length
var secondWordLength = secondWord3.length
var thirdWordLength = thirdWord3.length
var fourthWordLength = fourthWord3.length
var fifthWordLength = fifthWord3.length

// lanjutkan buat variable lagi di bawah ini
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength);

console.log(batas)
console.log("soal nomor 5")

var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 1. password pertama : HELLO
var kode1 = abjad.indexOf("H") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("O")
console.log("kode 1: " + kode1)


// 2. password kedua : WORLD
var kode2 = abjad.indexOf("W") + "-" + abjad.indexOf("O") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("D")
console.log("kode 2: " + kode2)

// 3. password ketiga : IMREADY
var kode3 = abjad.indexOf("I") + "-" + abjad.indexOf("M") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("A") + "-" + abjad.indexOf("D") + "-" + abjad.indexOf("Y")

console.log("kode 1: " + kode3)


console.log(batas)
console.log("soal nomor 6")

var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";

var pertamaganti = pertama.replace("s" , "S")
var keduaganti = kedua.substring(0 , 1).toUpperCase()
var keduaganti2 = kedua.substring(1 , 5)
var keduaganti3 = kedua.substring(5).toUpperCase()
var ketigaganti = ketiga.substring(0 , 1).toUpperCase()
var ketigaganti1 = ketiga.substring(1 , 6)
var ketigaganti3 = ketiga.substring(6).toUpperCase()
var keempatganti = keempat.toUpperCase()




console.log(pertamaganti + " " + keduaganti + keduaganti2 + keduaganti3 + " " + ketigaganti + ketigaganti1 + ketigaganti3 + " " + keempatganti)

console.log(batas)
console.log("soal nomor 7")

var panjang= "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";

var panjang1 = parseInt(panjang)
var lebar2 = parseInt(lebar)
var alas3 = parseInt(alas)
var tinggi4 = parseInt(tinggi)


var luas = panjang1 * lebar2
var luassegitiga = alas3 * tinggi4 /2 


console.log(panjang1)
console.log(lebar2)
console.log(alas3)
console.log(tinggi4)
console.log(luas)
console.log(luassegitiga)

console.log(batas)
console.log("soal nomor 8")

var sisi= " 1 2 ";
var jariJari= "7.5";

var sisi1 = sisi.trim();
var sisi2 = sisi1.replace(" ", "");
var sisi3 = Number(sisi2);
var jariJari2 = parseFloat(jariJari);
var luasPersegi = sisi3 * sisi3;
var luasLingkaran = 3.14 * jariJari2 * jariJari2;

console.log(sisi1);
console.log(sisi2);
console.log(sisi3);
console.log(jariJari2);
console.log(luasPersegi);
console.log(luasLingkaran);

