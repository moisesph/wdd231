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
        let image = document.createElement('img');
        let availability = document.createElement('p');
        let btn = document.createElement('button');
        let modalInfo = document.createElement('dialog');
        let nameModal = document.createElement('h2');
        let priceModal = document.createElement('p');
        let btnClose = document.createElement('button');

        name.textContent = `${medicine.commercial_name}`;

        availability.textContent = medicine.availability ? 'On Stock' : 'Out of Stock';
        btn.textContent = `${availability.textContent}`;
        nameModal.textContent = name.textContent;
        priceModal.textContent`${medicine.price}`
        btnClose.textContent = `Close`;

        image.setAttribute('src', medicine.image);
        image.setAttribute('alt', `Medicine: ${medicine.image}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '10');
        image.setAttribute('height', '10');
        btn.setAttribute('class', medicine.availability ? 'ava' : 'oos');
        //btn.setAttribute('onclick', `window.location.href='products.html'`);
        btn.setAttribute('id', `open-button${medicine.id}`)
        modalInfo.setAttribute('id', `box${medicine.id}`)
        btnClose.setAttribute('id', `close-button${medicine.id}`)


        modalInfo.appendChild(nameModal);
        modalInfo.appendChild(btnClose);
        card.appendChild(name);
        card.appendChild(image);
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