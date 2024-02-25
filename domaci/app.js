document.querySelector('#get-fact-btn').addEventListener('click', getCatFact);

async function getCatFact() {
    const apiUrl = 'https://catfact.ninja/fact';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayCatFact(data.fact);
        })
        .catch(error => {
            console.error('Error fetching cat fact:', error);
        });
}

async function displayCatFact(fact) {
    const catFactElement = document.querySelector('#cat-fact');
    catFactElement.textContent = fact;
}
