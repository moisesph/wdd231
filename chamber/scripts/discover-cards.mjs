import discoverInfo from '../data/interest-items.mjs';

const cards = document.querySelector('#discover-cards');

async function getPlaces() {
    try {
        console.log(discoverInfo);
    }
    catch (error) {
        console.error("Couldn't get data Json", error);
    }
}

async function showPlaces(places) {

    for (const place of places) {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let figure = document.createElement('figure');
        let image = document.createElement('img');
        let figureTxt = document.createElement('figcaption');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let btn = document.createElement('button');

        title.textContent = `${place.name}`;

    }
}

getPlaces();
showPlaces(discoverInfo);