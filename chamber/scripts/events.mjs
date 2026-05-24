const screenWidth = window.innerWidth;
const pcWidth = window.matchMedia('(min-width:a 38rem').matches;


const events = 'https://raw.githubusercontent.com/moisesph/wdd231/refs/heads/main/chamber/data/events.json';
const cards = document.querySelector('#events')


async function getEventInformation() {
    const response = await fetch(events);
    const data = await response.json(cards)
    //  console.table(data.events);
    displayEvents(data.events);
}


const displayEvents = (events) => {
    count = 0;
    for (const event of events) {

        if (count == 2) break;
        count++;

        let card = document.createElement('section');
        let name = document.createElement('h3');
        let Image = document.createElement('img');
        let location = document.createElement('p');

        name.textContent = `${event.name}`;
        location.textContent = `Location: ${event.location}`;

        card.appendChild(name);
        card.appendChild(Image);
        card.append(location);

        cards.appendChild(card);


    };
}

getEventInformation()