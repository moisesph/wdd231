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
        let address = document.createElement('p');
        let phone = document.createElement('p');

        name.textContent = `${company.name}`;
        locationImage.setAttribute('src', company.address);
        locationImage.setAttribute('alt' `Building of the company ${company.name}`)
        locationImage.setAttribute('loading', 'lazy');
        locationImage.setAttribute('width', '340');
        locationImage.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(locationImage);
        card.appendChild(address);
        card.appendChild(phone);

    });

}

getCompanyInformation();
displayCompanies(data);