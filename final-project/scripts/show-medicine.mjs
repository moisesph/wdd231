import medicinesInfo from '../data/medicines.mjs';

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


    for (const medicine of medicines) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let price = document.createElement('p');
        let image = document.createElement('img');
        let availability = document.createElement('p');
        let btn = document.createElement('button');
        let modalInfo = document.createElement('dialog');
        let nameModal = document.createElement('h2');
        let priceModal = document.createElement('p');
        let activeIngredientModal = document.createElement('p');
        let presentationModal = document.createElement('p');
        let concentrationModal = document.createElement('p');
        let indicationsModal = document.createElement('p');
        let directionsModal = document.createElement('p');
        let warningModal = document.createElement('p');
        let knowMore = document.createElement('a');
        let btnClose = document.createElement('button');


        name.textContent = `${medicine.commercial_name}`;
        price.textContent = `Price: ${medicine.price}$`
        availability.textContent = medicine.availability ? 'On Stock' : 'Out of Stock';
        btn.textContent = `${availability.textContent}`;
        nameModal.textContent = name.textContent;
        priceModal.textContent = `Price: ${medicine.price}$`
        activeIngredientModal.textContent = `Active ingredient: ${medicine.active_ingredient}`
        presentationModal.textContent = `Presentation: ${medicine.presentation}`
        concentrationModal.textContent = `Concentration: ${medicine.concentration}`
        indicationsModal.textContent = `Indications: ${medicine.indications}`
        directionsModal.textContent = `Directions: ${medicine.directions}`
        warningModal.textContent = `Warnings: ${medicine.warning}`
        knowMore.textContent = `See all products`
        btnClose.textContent = `Close`;

        image.setAttribute('src', medicine.image);
        image.setAttribute('alt', `Medicine: ${medicine.image}`);
        image.setAttribute('loading', 'lazy');
        btn.setAttribute('class', medicine.availability ? 'ava' : 'oos');
        //btn.setAttribute('onclick', `window.location.href='products.html'`);
        btn.setAttribute('id', `open-button${medicine.id}`)
        modalInfo.setAttribute('id', `box${medicine.id}`)
        knowMore.setAttribute('href', `products.html`)
        btnClose.setAttribute('id', `close-button${medicine.id}`)
        btnClose.setAttribute('class', 'close');

        modalInfo.appendChild(nameModal);
        modalInfo.appendChild(priceModal);
        modalInfo.appendChild(activeIngredientModal);
        modalInfo.appendChild(presentationModal);
        modalInfo.appendChild(concentrationModal);
        modalInfo.appendChild(indicationsModal);
        modalInfo.appendChild(directionsModal);
        modalInfo.appendChild(warningModal);
        modalInfo.appendChild(knowMore);
        modalInfo.appendChild(btnClose);
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(price);
        card.appendChild(btn);
        card.appendChild(modalInfo);

        cards.appendChild(card);

        btn.addEventListener("click", () => {
            modalInfo.showModal()
        });
        btnClose.addEventListener("click", () => {
            modalInfo.close();
        });


    }
}



getMedicines();