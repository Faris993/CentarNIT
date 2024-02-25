// // function steps(n){
// //     for(let red = 0; red < n; red++){
// //         let string = '';

// //         for (let kolona = 0; kolona < n; kolona++){
// //             if(kolona <= red){
// //                 string +='#';
// //             } else {
// //                 string +=' ';
// //             }
// //         }
// //         console.log(string);
// //     }
// // }
// // steps(5)
// // --------------------------------------
// // function steps(n){
// //     let broj=1
// //     for(let red = 0; red < 3; red++){
// //         let string = '';

// //         for (let kolona = 0; kolona < 3; kolona++){
// //             string+=broj;
// //             broj++
// //         }
// //         console.log(string);
// //     }


// let obj = {ime:'asd'}
let lista = [1,2,3,4,5]
lista.push(4)
lista.pop()
lista.slice(0,2)
lista.length

//pocetak [1,2,3,4,5]
//original [1,4,5]
//vraca [2,3]
class Lista{
  podatak= []
  length=0
  constructor(){
  
  }
  //    0,2
  slice(a,b){
   if(a===undefined){
    a=0
   }
   if(b===undefined){
    b=this.length
   }
   let result = [];

   if(a<0) a=0;
   if(b>this.length) b=this.length;
   if(a>b) a=b;

   for(let i=a; i<b;i++){
    result.push(this.podatak[i]);
   }
   return result;
  }
  push(broj){
    this.podatak[this.length]=broj
    this.length++
  }
  stampaj(){
    console.log(this.podatak);
  }
  pop(){
    let vracanje= this.podatak[this.length-1]
    delete this.podatak[this.length-1]
    return vracanje
  }

}
let X = new Lista()
X.push(1)
console.log(X.length);
X.push(1)
X.push(2)
X.push(3)
X.push(4)
X.push(5)
console.log(X.slice());


// X.podatak=[1,2,3,4,5,6]
// X.slice(2,5)

 // let x1=[]
    // let x2=[]
//     for(let i=0; i<this.podatak.length; i++){
//         if(a<=i && b>i){
//             x1.push(this.podatak[i])
//             delete this.podatak[i]
//         } else {
//             x2+=" " +this.podatak[i]
//         }
//     }
//     console.log("Iseceni elementi-- "+x1)
//     console.log("preostali elementi-- "+x2)
//   }