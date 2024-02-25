//Palindrom
// let string = "Muhammed"
// let sacuvaj = string[7]
// let string2 = "Oko"

// let lista = ["A",'b','c','d']
// sacuvaj = lista[0]

// let objekat = {r:1,e:1,c:2}
// let stringgg = "recc"

// objekat[h]= 1
// {h:1}
// // objekat[h]++


// console.log(auto);





// let stringg= "oko"
// function isPalindrome(str) {
//     let start = 0
//     let end = str.length - 1
//     while (start < end) {
//         if (str[start] !== str[end]) {
//             return false
//         }
//         start++
//         end--
//     }
//     return true
// }
// console.log(isPalindrome("okoo"));

// function isPalindrome(str) {
//     return str === str.split('').reverse().join('')
// }

// //Broj Karaktera
// let string = 'hello'

// // Ulaz: "hello"
// // Izlaz: { h: 1, e: 1, l: 2, o: 1 }

// function countCharacters(str) {
//     const charMap = {}
//     let max = 0
//     let karakter

//     for (let char of str) {
//         if (charMap[char]) {
//             charMap[char]++
//         } else {
//             charMap[char] = 1
//         }
//     }
//     for(let char of charMap){
//         if(charMap[char]> max){

//         }
//     }

//     return charMap
// }

// function maxChar(str) {
//     const charMap = {}

    
//     for (let char of str) {
//         if (charMap[char]) {
//             charMap[char]++
//         } else {
//             charMap[char] = 1
//         }
//     }
    
//     let max = 0
//     let maxChar = ''

//     for (let char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char]
//             maxChar = char
//         }
//     }

//     return { maxChar, max }
// }

// console.log(maxChar('abcccccccd'))
// console.log(maxChar('apple 1231111'))

// fizzbuzz
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

//
function povecajPrvoSlovo(str) {
    let result = str[0].toUpperCase();
  
    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === ' ') {
        result += str[i].toUpperCase();
      } else {
        result += str[i];
      }
    }
  
    return {result,str};
  }


 console.log( povecajPrvoSlovo("asdd ss aa"))