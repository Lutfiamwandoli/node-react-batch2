// setTimeout(()=>{
// console.log("saya dijalankan belakangan")

// }, 3000);

// console.log("saya pertama")

// function periksaDokter(nomerAntri, callback){

//   if(nomerAntri>5){
//     callback(false)
//   }else{
//     callback(true)
//   }
// }


// periksaDokter(6, function(check){
//   if(check){
//     console.log(" Sebentar lagi")
//   }else{
//     console.log("saya jalan jalan")
//   }
// })

// function periksaAntrianDokter(nomerAntri, callback){
//   console.log(`sekarang antrian ke- ${nomerAntri}`)
//   setTimeout(function(){
//     if (nomerAntri === 10){
//         console.log(`saya masuk ruangan dokter`)
//         callback(0)
//     }else{
//       console.log(`saya masih menunggu`)
//       callback(nomerAntri + 1)
//     }

//   }, 1000)
// }
// function execute(nomorAntri){
//   periksaAntrianDokter(nomorAntri, function(nomorAntriBaru){
//     if (nomorAntriBaru !== 0){
//       execute(nomorAntriBaru)
//     }
//   })
// }

// execute(7)

var isMomHappy = false;

var willIGetNewPhone = new Promise(
  function(resolve, reject){
    if(isMomHappy){
      var phone={
        brand: `samsung`,
        color: `black`
      };
      resolve(phone)
    } else {
      var reason= new Error(`mom is not happy`);
      reject(reason)
      
    }
  }
)

function askMom(){
  willIGetNewPhone.then(function (fulfilled){
    console.log(fulfilled)
  })
  .catch(function (error){
    console.log(error.message)
  });
}

askMom()