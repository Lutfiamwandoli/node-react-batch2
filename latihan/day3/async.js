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

// var isMomHappy = false;

// var willIGetNewPhone = new Promise(
//   function(resolve, reject){
//     if(isMomHappy){
//       var phone={
//         brand: `samsung`,
//         color: `black`
//       };
//       resolve(phone)
//     } else {
//       var reason= new Error(`mom is not happy`);
//       reject(reason)
      
//     }
//   }
// )

// function askMom(){
//   willIGetNewPhone.then(function (fulfilled){
//     console.log(fulfilled)
//   })
//   .catch(function (error){
//     console.log(error.message)
//   });
// }

// askMom()


// function periksaDataPasien(nomorIdPasien){
//   var dataPasien = [
//     {id: 1, nama: "john", jenisKelamin : "Laki-laki"},
//     {id: 2, nama: "Michael", jenisKelamin : "Laki-laki"},
//     {id: 3, nama: "Sarah", jenisKelamin : "Perempuan"},
//     {id: 4, nama: "Frank", jenisKelamin : "Laki-laki"},
//   ]
//   return new Promise(function (resolve, reject){
//     var pasien = dataPasien.find(x=> x.id === nomorIdPasien)
//     if(pasien === undefined){
//       reject("data pasien tidak ada")
//     } else{
//       resolve(pasien)
//     }
//   })
// }


// periksaDataPasien(5)
// .then(function(data){
//   console.log(data)
// })
// .catch(function(err){
//  console.log(err)
// })

function cobaAsync(){
  return new Promise(function (resolve, reject){
    var check = false
    if(check){
      resolve("berhasil")
    } else{
    reject("gagal")
  }
  })
}

async function coba(){
  try{
    var result = await cobaAsync()
  console.log(result)
} catch(err){
  console.log(err)
  }
}

coba()