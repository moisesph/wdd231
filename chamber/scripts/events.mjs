const events = 'https://raw.githubusercontent.com/moisesph/wdd231/refs/heads/main/chamber/data/events.json';
const cards = document.querySelector('#cards')

async function getEventInformation() {
    const response = await fetch(events);
    const data = await response.json(cards)
    console.table(data.events);
}