import medicinesInfo from '../data/medicines.mjs';

const cardTittle = document.querySelector('#medicine-section');
const cards = document.querySelector('#medicine-section');

async function getMedicines() {
    try {

        showMedicines(medicinesInfo);
    }
    catch (error) {
        console.error("Couldn't get data Json", error);
    }
}

async function showMedicines(medicines) {

    let title = document.createElement('h1');
    title.textContent = `Know us`;
    cardTittle.appendChild(title);

    for (const medicine of medicines) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let price = document.createElement('p');
        let availability = document.createElement('p');
        let concentration = document.createElement('p');
        let indications = document.createElement('p');
        let directions = document.createElement('p');
        let warning = document.createElement('p');
        let btn = document.createElement('button');

        name.textContent = `${medicine.commercial_name}`;
        price.textContent = `${medicine.price}`;
        availability.textContent = medicine.availability ? 'On Stock' : 'Out of Stock';

        image.setAttribute('src', medicine.image);
        image.setAttribute('alt', `image of ${medicine.image}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '10');
        image.setAttribute('height', '10');

        btn.textContent = `${availability.textContent}`;
        btn.setAttribute('onclick', `window.location.href=''`);

        card.appendChild(name);
        card.appendChild(image);

        card.appendChild(btn);

        cards.appendChild(card);
    }
}

getMedicines();