// const url = 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/price?referenceCurrencyUuid=yhjMzLPhuIDl';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057',
// 		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// 	}
// };

// let key = "183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057"
// localStorage.setItem("api_key",key)

// async function fetchData(){
//     localStorage.getItem("api_key")
// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }
// }
// fetchData(key);

const url = 'https://currencyconverter.p.rapidapi.com/availablecurrencies';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057',
		'X-RapidAPI-Host': 'currencyconverter.p.rapidapi.com'
	}
};
let key = "183faf24d0msh46fba899b265ebdp1cb5afjsn5df3a4dea057"
localStorage.setItem("api_key", key)

async function fetchData(){
    localStorage.getItem("api_key")
    try {
       const response = await fetch(url, options);
       const result = await response.text();
       console.log(result); 
    } catch (error) {
        console.error(error)
    }
}
fetchData(key);