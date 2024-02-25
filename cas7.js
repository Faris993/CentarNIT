// let str = 'hello'

// function countCharacters(str){
//     const charMap = {}

//     for(let char of str){
//         if(charMap[char]){
//             charMap[char]++
//         } else {
//             charMap[char]=1
//         }
//     }
//     return charMap;
// }   
//     function maxCharacter(str){
//     let max = 0
//     let maxChar = ''
//     for (let char in maxChar){
//         if(charMap[char]>max){
//             max = charMap[char]
//             maxChar = char
//         }
//     }
//     return {maxChar, max}
// }

function povecajPrvoSlovo(str){
    let result = str[0].toUpperCase();

    for(let i = 1; i<str.length; i++){
        if(str[i-1]===''){
            result += str[i].toUpperCase();
        } else {
            result+=str[i];
        }
    }
    return{result,str}
}
