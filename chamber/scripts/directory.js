const companies = 'https://raw.githubusercontent.com/moisesph/wdd231/refs/heads/main/chamber/data/members.json';
const cards = document.querySelector('#cards')

async function getCompanyInformation() {
    const response = await fetch(companies);
    const data = await response.json(cards);
    console.table(data.prophets);
    displayCompanies(data.companies);

}

const displayCompanies = (companies) => {
    companies.forEach(company => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let locationImage = document.createElement('img');
        let email = document.createElement('p');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('p');

        name.textContent = `${company.name}`;
        email.textContent = `EMAIL:${company.email}`;
        phone.textContent = `PHONE: ${company.phone}`;
        address.textContent = `ADDRESS: ${company.addresses}`;
        website.textContent = `Website: ${company.website}`;


        locationImage.setAttribute('src', company.image);
        locationImage.setAttribute('alt', `Building of the company ${company.name}`)
        locationImage.setAttribute('loading', 'lazy');
        locationImage.setAttribute('width', '10');
        locationImage.setAttribute('height', '10');

        card.appendChild(name);
        card.appendChild(locationImage);
        card.appendChild(email);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        cards.appendChild(card);
    });

}

getCompanyInformation();