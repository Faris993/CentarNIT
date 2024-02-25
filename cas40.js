let string = "ucimo programiranje danas";
// let rezultat = "Ucimo Programiranje Danas";
function povecajPrvoSlovo(string){
    let rezultat = string[0].toUpperCase();
    for(let i = 1; i < string.length; i++){
        if(string[i - 1] === ' '){
            rezultat += string[i].toUpperCase();
        } else {
            rezultat += string[i];
        }
    }
    return rezultat;
}
console.log(povecajPrvoSlovo (string))