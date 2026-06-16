import doctorsInfo from '../data/doctors.mjs';

const cardTittle = document.querySelector('#doctors');
const cards = document.querySelector('#doctors');

async function getDoctors() {
    try {

        showDoctors(doctorsInfo);
    }
    catch (error) {
        console.error("Couldn't get data Json", error);
    }
}

async function showDoctors(doctors) {

    let title = document.createElement('h1');
    title.textContent = `Know us`;
    cardTittle.appendChild(title);


    for (const doctor of doctors) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let schedule = document.createElement('p');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let address = document.createElement('address');
        let btn = document.createElement('button');

        name.textContent = `${doctor.name}`;
        schedule.textContent = `${doctor.schedule}`;
        phone.textContent = `${doctor.phone}`;
        email.textContent = `${doctor.email}`;
        address.textContent = `${doctor.location}`;

        btn.textContent = 'Make Appointment';
        image.setAttribute('src', doctor.image);
        image.setAttribute('alt', `image of ${doctor.image}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '10');
        image.setAttribute('height', '10');
        btn.setAttribute('onclick', `window.location.href=''`);

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(schedule)
        card.appendChild(phone)
        card.appendChild(email);
        card.appendChild(address);
        card.appendChild(btn);

        cards.appendChild(card);

    }
}

getDoctors();