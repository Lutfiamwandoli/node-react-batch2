console.log("IF")
console.log("")




if (true) {
  console.log("This will always run")
}

if (false) {
  console.log("This not run")
}


var mood="happy"
if(mood == "happy"){
  console.log("I am happy")
} else {
  console.log("I am not happy")
}


var mallOpen = "open"
var baju = "tidak ada"
var sepatu = "ada"

if (mallOpen == "not open"){
  console.log("Mall is open saya mau beli baju dan sepatu")
  if (baju == "tidak ada"){
    console.log("Baju ada")
  } else if (sepatu == "ada"){
    console.log("Baju habis, Sepatu ada")
  } else {
    console.log("Baju dan sepatu habis")
  }
} else {
  console.log("Mall is closed")
  
}



var buttonPush = 4

switch(buttonPush){

  case 1: {console.log("nyalain tv"); break;}
  case 2: {console.log("matikan tv"); break}
  default: {console.log("tidak terjadi apa apa"); break}
  }
 var umur = 17
  var cekKTP = umur >=17 ? "boleh":"gaboleh"
  console.log(cekKTP)