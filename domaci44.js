// class PlayLista{
//     listaPesama
//     trenutnaPesma
//     ukljucen
//     PlayLista
//     imePesme
//     constructor(listaPesama,imePesme){
//         this.listaPesama = listaPesama;
//         this.trenutnaPesma = null;
//         this.ukljucen = false;
//         this.imePesme = imePesme;
//     }
//     UbaciPesmu(imePesme){
//         this.listaPesama.push(imePesme)
//     }
//     PustiPesmu(imePesme) {
//         if(this.listaPesama.includes(imePesme)){
//             this.trenutnaPesma = imePesme;
//             console.log(`Trenutno se pusta pesma: ${imePesme}`);
//         } else {
//             console.log(`Pesma "${imePesme}" ne postoji u listi pesama.`);
//         }
//     }
//     PustiRandom() {
//         if(this.listaPesama.length === 0) {
//             console.log("Lista pesama je prazna.");
//         } else {
//             let nasumicniIndex = Math.floor(Math.random() * this.listaPesama.length)
//             this.trenutnaPesma = this.listaPesama[nasumicniIndex]
//             console.log(`Trenutno se pusta random pesma: ${this.trenutnaPesma}`)
//         }
//     }
//     ObrisiPesmu(imePesme){
//         if(!this.ukljucen){
//             console.log(`Pesma "${imePesme}" je obrisana iz liste.`);
//             if(this.trenutnaPesma === imePesme){
//                 this.trenutnaPesma = null;
//             }
//         } else {
//             console.log(`Pesma "${imePesme}" ne postoji u listi pesama`)
//         }
//     }
//     Upali(){
//         this.ukljucen = true;
//         console.log("Reprodukcija je ukljucena.");
//     }
//     Ugasi(){
//         this.ukljucen= false;
//         console.log("Reprodukcija je iskljucena.")
//     }
//     pustiPrethodnu(){
//         if(this.ukljucen){
//             let trenutniIndex = this.listaPesama.indexOf(this.trenutnaPesma);
//             if(trenutniIndex >0){
//                 this.trenutnaPesma = this.listaPesama[trenutniIndex -1];
//                 console.log(`Trenutno se pusta prethodna pesma: ${this.trenutnaPesma}`);
//             } else {
//                 console.log("Nema prethodne pesme.");
//             }
//         } else {
//             console.log("Reprodukcija nije ukljucena.");
//         }
//     }
//     pustiSledecu(){
//         if(this.ukljucen){
//             let trenutniIndex = this.listaPesama.indexOf(this.trenutnaPesma);
//             if(trenutniIndex < this.listaPesama -1){
//                 this.trenutnaPesma = this.listaPesama[trenutniIndex + 1];
//                 console.log(`Trenutno se pusta sledeca pesma: ${this.trenutnaPesma}`);
//             } else {
//                 console.log("Nema sledece pesme.");
//             }
//         } else {
//             console.log("Playlista  je iskljucena.");
//         }
//     }
// }

// let X = new PlayLista(['Pesma1','Pesma2']);
// X.UbaciPesmu("Pesma 1");
// X.UbaciPesmu("Pesma 2");
// X.Upali();
// X.PustiRandom();
// X.pustiSledecu();
// X.pustiPrethodnu();
// X.Ugasi();