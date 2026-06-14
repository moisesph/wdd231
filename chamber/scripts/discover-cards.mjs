import discoverInfo from '../data/interest-items.mjs';

const cards = document.querySelector('#discover-cards');

async function getPlaces() {
    try {
        console.log(discoverInfo);
        showPlaces(discoverInfo);
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
        figureTxt.textContent = `${place.name}`;
        address.textContent = `${place.location}`;
        description.textContent = `${place.description}`;
        btn.textContent = 'Visit';
        image.setAttribute('src', place.image);
        image.setAttribute('alt', `image of ${place.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '10');
        image.setAttribute('height', '10');

        card.appendChild(title);
        card.appendChild(figure);
        figure.appendChild(image);
        figure.appendChild(figureTxt);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(btn);

        cards.appendChild(card);

    }
}

getPlaces();