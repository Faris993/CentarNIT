//Stampanje brojeva od 0 do 9
function printNumbers() {
    for(let i=1;i<=10;i++){
      console.log(i); // Štampa trenutni broj
      console.log(`Broj : ${i}`) // Drugi nacin za stampanje stringova sa promenjivom u sebi
    }
  }


//Stampanje brojeva iz liste koji su deljivi sa 2
let lista = [1,2,3,4,5,6,7,8,9,10,11]
for(let i=0;i<lista.length;i++){
    if(lista[i]%2===0){
        console.log(lista[i])
    }
}


function numPower(num,pow) {
    let res=1; 
    for(let i=0;i<pow;i++){ 
        console.log(`iteracija ${i}`)
        res=res*num;
    }
    
    return res;
}

//Definisati funkciju koja ce primiti jedan parametar , listu 
//Svrha funkcije je da nam vrati sa return sintaksom 
//Najveci broj iz te liste

