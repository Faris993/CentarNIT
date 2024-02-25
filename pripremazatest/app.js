// // let fibonaci = (n) => {
// //     let niz = [1, 1];
// //     for(i = 2; i < n; i++){
// //         niz.push(niz[i - 1]+ niz[i - 2])
// //     }
// //     return niz;
// // }
// // function ispisi(niz){
// //     console.log(`Fibonacijev niz ${niz}`);
// // }
// // let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// // let fibonaciNiz = fibonaci(brojClanova);
// //  ispisi(fibonaciNiz);

// /////////////////

// // let brojClanova = parseInt(prompt("Unesite željeni broj članova: "));
// // let main = [];

// // for (let i = 0; i < brojClanova; i++) {
// //   let broj = parseFloat(prompt("Unesite broj:"));
// //   main.push(broj);
// // }

// // function prosecnaOcena(niz){
// //   let suma = niz.reduce((a, b) => {
// //     return a + b;
// //   });

// //   return suma / niz.length;
// // }

// // function prosecnaOcenaUspesni(niz){
// //   return prosecnaOcena(niz.filter(clan => {
// //     if(clan > 5)
// //       return clan;
// //   }));
// // }

// // function brojUspesnih(niz){
// //   return main.filter(clan => {
// //     if(clan > 5)
// //       return clan;
// //   }).length;
// // }

// // function brojNeuspesnih(niz){
// //   return main.filter(clan => {
// //     if(clan === 5)
// //       return clan;
// //   }).length;
// // }

// // function brojIznadProsekaUspesni(niz){
// //   let prosecna = prosecnaOcena(niz);
// //   return main.filter(clan => {
// //     if(clan > prosecna){
// //       return clan;
// //     }
// //   }).length;
// // }

// // console.log("Prosecna ocena je: ",prosecnaOcena(main));
// // console.log("Prosecna ocena uspenih: ",prosecnaOcenaUspesni(main));
// // console.log("Broj Uspesnih: ",brojUspesnih(main));
// // console.log("Broj Neuspesnih: ",brojNeuspesnih(main));
// // console.log("Broj iznad proseka uspesnih: " ,brojIznadProsekaUspesni(main));


// //////////////////////////////////////////////////FETCH RAPIDAPI


// // let key = "183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057";
// // localStorage.setItem("api_key",key);

// // async function fetchData(){
// // const api_key = localStorage.getItem("api_key");
// //     const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'X-RapidAPI-Key': '183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057',
// // 		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// // 	}
// // };

// // try {
// // 	const response = await fetch(url, options);
// // 	const result = await response.text();
// // 	console.log(result);
// // } catch (error) {
// // 	console.error(error);
// // }
// // }

// // fetchData(key);


// ////////////////////////////////////POSTREQ

// // let key = "183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057"
// // localStorage.setItem("api_key",key)

// // async function fetchText(){
// // const api_key = localStorage.getItem("api_key")

// //     const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
// // const options = {
// // 	method: 'POST',
// // 	headers: {
// // 		'content-type': 'application/x-www-form-urlencoded',
// // 		'X-RapidAPI-Key': '183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057',
// // 		'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
// // 	},
// // 	body: new URLSearchParams({
// // 		from: 'auto',
// // 		to: 'en',
// // 		text: 'xin chào'
// // 	})
// // };

// // try {
// // 	const response = await fetch(url, options);
// // 	const result = await response.text();
// // 	console.log(result);
// // } catch (error) {
// // 	console.error(error);
// // }
// // }
// // fetchText(key);

// /////////////////////////////////////////////////////////////zadaci array metode

// // const inventors = [
// // 	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
// // 	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
// // 	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
// // 	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
// // 	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
// // 	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
// // 	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
// // 	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
// // 	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
// // 	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
// // 	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
// // 	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// //   ];

// //   const people = [
// // 	'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
// // 	'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
// // 	'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
// // 	'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
// // 	'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
// //   ];

// //  const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
// //  console.log(fifteen)

// //  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// //  console.log(fullNames);

// // //  const ordered = inventors.sort(function(a, b){
// // // 	if (a.year > b.year) {
// // // 		return 1;
// // // 	}else {
// // // 		return -1;
// // // 	}
// // //  });

// // const ordered = inventors.sort((a, b)=> a.year > b.year ? 1 : -1);
// //  console.table(ordered);

// //  const totalYears = inventors.reduce((total, inventor)=>{
// // 	return total + (inventor.passed - inventor.year);
// //  }, 0)
// //  console.log(totalYears);

// //  const oldest = inventors.sort(function(a, b){
// // 	const lastGuy = a.passed - a.year;
// // 	const nextGuy = b.passed - b.year;
// // 	return lastGuy > nextGuy ? -1 : 1;
// //  })
// //  console.table(oldest);

// // //  const category = document.querySelector('.mw-category');
// // //     const links = Array.from(category.querySelectorAll('a'));
// // //     const de = links
// // //         .map(link => link.textContent)
// // //         .filter(streetName => streetName.includes('de'));

// // const alpha = people.sort(function(lastOne, nextOne){
// // 	const [aLast, aFirst] = lastOne.split('. ');
// // 	const [bLast, bFirst] = nextOne.split('. ');
// // 	return aLast > bLast ? - 1 : 1;
// // })
// // console.log(alpha)

// // const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

// // const transportation = data.reduce(function(obj, item){
// // 	if(!obj[item]){
// // 		obj[item]= 0;
// // 	}
// // obj[item]++;
// // return obj;
// // }, {})
// // console.log(transportation);

// ///////////////////////////////////////FETCH

// // const url = 'https://open-weather13.p.rapidapi.com/city/landon';
// // const option = {
// // 	method: 'GET',
// // 	headers:{
// // 		'X-RapidAPI-Key': '183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057',
// // 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// // 	}
// // };

// // let key = "183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057";
// // localStorage.setItem("api_key",key);

// // async function fetchAnyData(){
// // 	localStorage.getItem("api_key")
// // 	try {
// // 		const response = await fetch(url, option);
// // 		const result = await response.text();
// // 		console.log(result);
// // 	} catch (error) {
// // 		console.error(error);
// // 	}
// // }
// // fetchAnyData(key);

// // const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages';
// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'Accept-Encoding': 'application/gzip',
// // 		'X-RapidAPI-Key': '183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057',
// // 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// // 	}
// // };

// // let key = "183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057"
// // localStorage.setItem("api_key", key);

// // async function fetchLanguage(){
// // 	localStorage.getItem("api_key");
// // 	try {
// // 		const response =await fetch(url, options);
// // 		const result = await response.text();
// // 		console.log(result);
// // 	} catch (error) {
// // 		console.log(error);
// // 	}
// // }
// // fetchLanguage(key);

// // const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
// // const options = {
// // 	method: 'POST',
// // 	headers: {
// // 		'content-type': 'application/x-www-form-urlencoded',
// // 		'Accept-Encoding': 'application/gzip',
// // 		'X-RapidAPI-Key': '183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057',
// // 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// // 	},
// // 	body: new URLSearchParams({
// // 		q: 'Hello, world!',
// // 		target: 'es',
// // 		source: 'en'
// // 	})
// // };

// // let key = "183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057"
// // localStorage.setItem("api_key",key)

// // async function fetchTranslate(){
// // 	localStorage.getItem("api_key")
// // 	try {
// // 		const response = await fetch(url, options);
// // 		const result = await response.text();
// // 		console.log(result);
// // 	} catch (error) {
// // 		console.error(error);
// // 	}
// // }
// // fetchTranslate(key);


// const url = 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057',
// 		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
// 	}
// };

// let key = "183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057";
// localStorage.setItem("api_key",key)

// async function fetchAnyData(){
// 	localStorage.getItem("api_key")
// 	try {
// 		const response = await fetch(url,options);
// 		const result = await response.text();
// 		console.log(result);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }
// fetchAnyData(key);

/////////////////////////////////////////////////palindrome
// function isPalindrome(str){
// 	const formattedStr = str.toLowerCase().replace(/[^-z0-9]/g, '');
// 	const reversedStr = formattedStr.split('').reverse().join('');
// 	return formattedStr === reversedStr;
// }
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('racecars'));


///////////////////////////////////countVowels

// function countVowels(str){
// 	const formattedStr = str.toLowerCase();
// 	let count = 0;

// 	for (let i = 0; i < formattedStr.length; i++){
// 		const char = formattedStr[i];

// 		if ( char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
			
// 		}

// 		}
// 		return count;
// 	}
	
// console.log(countVowels('JavaScript'));
// console.log(countVowels('Hello, World'));

/////////////////////////////////////////////////////////removeDuplicates

// function removeDuplicates(arr){
// 	const uniqueArr = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		if(!uniqueArr.includes(arr[i])) {
// 			uniqueArr.push(arr[i]);
// 		}
// 		return uniqueArr;
// 	}
// }
// const result = removeDuplicates([
// 	1,
// 	2,
// 	3,
// 	4,
// 	5,
// 	5,
// 	5,
// 	6,
// 	7,
// 	8,
// 	'hello',
// 	'hello',
// 	true,
// 	true,
// ]);

// console.log(removeDuplicates(['apple','banana','orange','banana','kiwi']));

//////////////////////////////fizzbuzz

// function fizzBuzzArray(num){
// 	const arr = [];

// 	for(let i = 1; i <= num; i++){
// 		if(i % 3 === 0 && i % 5 === 0){
// 			arr.push('FizzBuzz');
// 		} else if (i % 3 === 0) {
// 			arr.push('fizz');
// 		} else if (i % 5 === 0){
// 			arr.push('Buzz');
// 		} else {
// 			arr.push(i);
// 		}
// 	}
// 	return arr;
// }

// const result = fizzBuzzArray(15);
// console.log(result)

////////////////////////////////////////////////Arrayintersection

// function arrayInterSection(arr1, arr2){
// 	const intersectionArray = [];

// 	for(i = 0; i < arr1.length; i++){
// 		if(arr2.includes(arr1[i]) && !intersectionArray.includes(arr1[i])){
// 			intersectionArray.push(arr1[i])
// 		}
// 	}
// 	return intersectionArray;

// }
// const result = arrayInterSection([1,2,3,4,5], [3,4,5,6,7]);

// console.log(result)
// // console.log(intersectionArray)

////////////////////////////////////////////////////////////////////displayLikes

// function displayLikes(names){
// const length = names.length;

// if (length === 0){
// 	return 'no one like this';
// } else if (length === 1) {
// 	return `${names[0]} likes this `;
// } else if (length === 2){
// 	return `${names[0]} and ${names[1]} like this`;
// } else if (length === 3){
// 	return `${names[0]}, ${names[1]} anad ${names[2]} like this`
// } else {
// 	return `${names[0]}, ${names[1]} and ${length - 2} others like`
// }
// }

// const result = displayLikes(['Alex','Jacob','Mark','Max','Jill']);

// console.log(result);

////////////////////////////findMissingNumber

// function findMissingNumber(arr){
// 	if(arr.length === 0) return 1;

// 	const n = arr.length + 1;
// 	const expectedSum = n*(n + 1) / 2;
// 	// let actualSum = 0;
// 	// for (let i = 0; i < arr.length; i++){
// 	// 	actualSum+= arr[i];
// 	// }

// 	const actualSum = arr.reduce((sum, num)=> sum + num,0);

// 	return expectedSum - actualSum;
// }

// const result = findMissingNumber([10,8,7,6,5,4,3,2,1]);
// console.log(result);

//////////////////////////////////////////////findMissingLeter

// function findMissingLetter(arr){
// 	const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 	const startIndex = alphabet.indexOf(arr[0]);

// 	for(let i = 0; i < arr.length; i++) {
// 		if(arr[i] !== alphabet[startIndex + i]){
// 			return alphabet[startIndex + i];
// 		}
// 	}
// 	return '';
// }

// result = findMissingLetter(['a','b','c','f','g']);
// console.log(result);


// function findMissingLetter(arr){
// 	let start = arr[0].charCodeAt(0);
	
// 	for (let i =0; i < arr.length; i++){
// 		const current = arr[i].charCodeAt(0);

// 		if(current - start > 1){
// 			return String.fromCharCode(start + 1);
// 		}
// 		start = current;
// 	}
// 	return '';
// }
// result = findMissingLetter(['a','b','c','f','g']);
// console.log(result);

/////////////////////////////////////////////////////////areallcharunique

// function areAllCharactersUnique(str){
// 	const charCount = {};

// 	for( let i = 0; i < str.length; i++) {
// 		const char = str[i];

// 		if(charCount[char]) {
// 			return false;
// 		}

// 		charCount[char] = true;
// 	}
// 	return true;
// }
// const result1 = areAllCharactersUnique('abcdefg');
// const result2 = areAllCharactersUnique('abcdefgA');
// const result3 = areAllCharactersUnique('programming');

// console.log(result1);
// console.log(result2);
// console.log(result3); 
///////////////////////////////////////////////////findnon-repeatingcharacter

// function findNonRepeatingCharacter(str){
// const charCount = {};

// for (const char of str) {
// 	charCount[char] = (charCount[char] || 0) + 1;

// 	if(charCount[char]=== 1) {
// 		return char;
// 	}
// 	return null;
// }
// }
// const result1 = findNonRepeatingCharacter('programming');
// console.log(result1);

////////////////////////////////////dicegamesimulation

