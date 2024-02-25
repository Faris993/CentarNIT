// Postavljanje event listenera koji će reagovati kada se HTML dokument potpuno učita
document.addEventListener("DOMContentLoaded", () => {
    // Dobijanje referenca na HTML element sa id-om "pokemon-container"
    const pokemonContainer = document.querySelector("#pokemon-container");

    // Asinhrona funkcija koja dohvata podatke o Pokemonima
    async function fetchPokemonData() {
        try {
            // Asinhrono dohvatanje podataka sa PokeAPI-ja o prvih 15 Pokemona
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=15");
            // Asinhrona konverzija odgovora u JSON format
            const data = await response.json();

            // Izvlačenje liste Pokemona iz podataka
            const pokemonList = data.results;

            // Iteracija kroz listu Pokemona i dohvatanje detalja za svakog Pokemona
            pokemonList.forEach(async (pokemon) => {
                // Asinhrono dohvatanje dodatnih detalja o Pokemonu
                const pokemonDataResponse = await fetch(pokemon.url);
                // Asinhrona konverzija odgovora u JSON format
                const pokemonData = await pokemonDataResponse.json();

                // Kreiranje kartice za Pokemona na osnovu dohvaćenih podataka
                createPokemonCard(pokemonData);
            });
        } catch (error) {
            // Obrada eventualnih grešaka koje mogu nastati pri dohvatanju podataka
            console.error("Error fetching Pokemon data:", error);
        }
    }

    // Funkcija za kreiranje HTML kartice za Pokemona
    function createPokemonCard(pokemon) {
        // Kreiranje div elementa koji predstavlja karticu Pokemona
        const card = document.createElement("div");
        // Dodavanje klase "pokemon-kartica" div elementu
        card.classList.add("pokemon-kartica");

        // Kreiranje slike Pokemona
        const image = document.createElement("img");
        // Dodavanje klase "pokemon-slika" slici
        image.classList.add("pokemon-slika");
        // Postavljanje izvora i alternativnog teksta slike
        image.src = pokemon.sprites.front_default;
        image.alt = pokemon.name;

        // Kreiranje div elementa za sadržaj kartice
        const content = document.createElement("div");
        // Dodavanje klase "pokemon-sadrzaj" div elementu
        content.classList.add("pokemon-sadrzaj");

        // Kreiranje naslova za karticu
        const title = document.createElement("h2");
        // Dodavanje klase "pokemon-naslov" naslovu
        title.classList.add("pokemon-naslov");
        // Postavljanje teksta naslova
        title.textContent = pokemon.name;

        // Kreiranje opisa za karticu
        const description = document.createElement("p");
        // Dodavanje klase "pokemon-opis" opisu
        description.classList.add("pokemon-opis");
        // Postavljanje teksta opisa sa informacijama o Pokemonu
        description.textContent = `#${pokemon.id} - ${pokemon.types.map(type => type.type.name).join(', ')}`;

        // Dodavanje naslova i opisa u div "pokemon-sadrzaj"
        content.appendChild(title);
        content.appendChild(description);

        // Dodavanje slike i sadržaja u karticu
        card.appendChild(image);
        card.appendChild(content);

        // Dodavanje kartice u kontejner
        pokemonContainer.appendChild(card);

    }

    // Pozivanje funkcije za dohvatanje podataka o Pokemonima
    fetchPokemonData();
});
