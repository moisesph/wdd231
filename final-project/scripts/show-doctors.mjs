const doctorsInfo = 'https://raw.githubusercontent.com/moisesph/wdd231/main/final-project/data/doctors.json';

const cards = document.querySelector('#doctors');

async function getDoctors() {
    try {
        const response = await fetch(doctorsInfo);
        const data = await response.json()
        showDoctors(data);
    }
    catch (error) {
        console.error("Couldn't get data Json", error);
    }
}

async function showDoctors(doctors) {

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
        image.setAttribute('alt', `image of ${doctor.name}`);
        image.setAttribute('loading', 'lazy');
        btn.setAttribute('onclick', `window.location.href='appointment.html'`);

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