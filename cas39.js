// let ucenik ={
//     ime: "Muhammed",
//     prezime: "Besirovic",
//     godine: 0
// }
// ucenik['ime']="Dado"
// ucenik['ocena']=1
// console.log(ucenik);

function izbrojKaraktere(string1,string2){
    let mapaKaraktera={}
    let mapaKaraktera2 = {}

    for(let slovo of string1){
        if(mapaKaraktera[slovo]){
            mapaKaraktera[slovo]++
        } else {
            mapaKaraktera[slovo]=1;
        }
    }
    for(let slovo of string2){
        if(mapaKaraktera2[slovo]){
            mapaKaraktera2[slovo]++
        } else {
            mapaKaraktera2[slovo]=1;
        }
    }
        let mapa1={a:2,s:1,d:1}
        let mapa2={a:2,s:1,d:1}

        if (string1.length !==string2.length){
            return false
        }
        for (let kljuc in mapa1){
            if(mapa1[kljuc] !== mapa2[kljuc]){
                return false;
            }
        }
        return true;
    }
    izbrojKaraktere('asd','aaasd');

    // let najvecaVrednost = 2
    // let najcesciKarakter = "a"
    // for (let kljuc in mapaKaraktera){
    //     if(mapaKaraktera[kljuc]>najvecaVrednost){
    //         najvecaVrednost= mapaKaraktera[kljuc]
    //         najcesciKarakter=kljuc
        
    // }
    // return {najvecaVrednost, najcesciKarakter}

    