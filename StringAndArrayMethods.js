// Metode za rad sa JavaScript stringovima:

// 1. `charAt(index)`: Vraća karakter na datom indeksu u stringu.
const str1 = "Zdravo, svete!";
console.log(str1.charAt(4)); // Output: 'v'

// 2. `length`: Vraća dužinu stringa.
const str2 = "Zdravo, svete!";
console.log(str2.length); // Output: 14

// 3. `toUpperCase()` / `toLowerCase()`: Pretvara string u velika / mala slova, redom.
const str3 = "Zdravo, svete!";
console.log(str3.toUpperCase()); // Output: 'ZDRAVO, SVETE!'
console.log(str3.toLowerCase()); // Output: 'zdravo, svete!'

// 4. `trim()`: Uklanja praznine sa početka i kraja stringa.
const str4 = "   Zdravo, svete!    ";
console.log(str4.trim()); // Output: 'Zdravo, svete!'

// 5. `split(separator)`: Razdvaja string na elemente niza koristeći dati separator.
const str5 = "jabuka,narandza,breskva";
const vocniNiz = str5.split(',');
console.log(vocniNiz); // Output: ['jabuka', 'narandza', 'breskva']

// 6. `indexOf(searchValue[, fromIndex])`: Traži podstring i vraća njegov prvi indeks, ili -1 ako nije pronađen.
const str6 = "Zdravo, svete!";
console.log(str6.indexOf('svete')); // Output: 8

// Metode za rad sa JavaScript nizovima:

// 1. `push(element1, element2, ..., elementN)`: Dodaje elemente na kraj niza i vraća novu dužinu niza.
const voce1 = ['jabuka', 'narandza'];
voce1.push('breskva', 'grozdje');
console.log(voce1); // Output: ['jabuka', 'narandza', 'breskva', 'grozdje']

// 2. `pop()`: Uklanja i vraća poslednji element niza.
const voce2 = ['jabuka', 'narandza', 'breskva'];
const uklonjenoVoce = voce2.pop();
console.log(uklonjenoVoce); // Output: 'breskva'
console.log(voce2); // Output: ['jabuka', 'narandza']

// 3. `join(separator)`: Spaja sve elemente niza u string koristeći dati separator.
const voce3 = ['jabuka', 'narandza', 'breskva'];
const spojeniString = voce3.join(', ');
console.log(spojeniString); // Output: 'jabuka, narandza, breskva'

// 4. `splice(start, deleteCount, item1, item2, ..., itemN)`: Dodaje ili uklanja elemente iz niza.
const voce4 = ['jabuka', 'narandza', 'breskva'];
voce4.splice(1, 1, 'grozdje', 'kivi');
console.log(voce4); // Output: ['jabuka', 'grozdje', 'kivi', 'breskva']

// 5. `indexOf(searchElement[, fromIndex])`: Vraća indeks prvog pojavljivanja datog elementa u nizu, ili -1 ako nije pronađen.
const voce5 = ['jabuka', 'narandza', 'breskva'];
console.log(voce5.indexOf('breskva')); // Output: 2

// 6. `filter(callback)`: Kreira novi niz sa elementima koji zadovoljavaju uslov definisan zadatom funkcijom.
const brojevi = [1, 2, 3, 4, 5];
const parniBrojevi = brojevi.filter(broj => broj % 2 === 0);
console.log(parniBrojevi); // Output: [2, 4]
