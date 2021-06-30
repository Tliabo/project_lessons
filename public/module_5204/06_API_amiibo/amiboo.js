const baseUrl = "https://www.amiiboapi.com/api/";

const gameUrl = `${baseUrl}gameseries/`;

const characterGameseries = `${baseUrl}amiibo/?gameseries=`

const gamesSection = document.querySelector('#games');
const charactersSection = document.querySelector('#characters');

let games = [];

async function getGames() {

    let response = await fetch(gameUrl);
    let data = await response.json();

    showGames(data.amiibo);
}

function showGames(data) {
    let names = [];
    data.forEach(game => {
        names.push(game.name);
    })
    games = [...new Set(names)]

    games.forEach(game => {
        let button = document.createElement('button');

        button.type = 'button';
        button.append(game);
        button.addEventListener('click', async e => {
            showGameCharacters(e.target.innerText);
        });
        gamesSection.append(button);
    })
}

async function showGameCharacters(gameName) {
    charactersSection.innerText = '';
    let response = await fetch(`${characterGameseries}${gameName}`);
    let data = await response.json();

    data.amiibo.forEach(character => {
        let charImage = document.createElement('img');
        charImage.src = character.image;
        charactersSection.append(charImage);
    })
}

getGames();


