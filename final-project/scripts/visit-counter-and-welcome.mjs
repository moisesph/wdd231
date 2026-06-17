let currentVisit = Date.now();
let lastVisit = localStorage.getItem('lastVisit');
let visitCounter = parseInt(localStorage.getItem('visits')) || 0;
visitCounter++;

let timePassed = currentVisit - parseInt(lastVisit);
let daysPassed = Math.floor(timePassed / 86400000);

localStorage.setItem('visits', visitCounter);
localStorage.setItem('currentVisit', currentVisit);

let bienvenido = document.querySelector('#welcome');

function welcome() {
    let title = document.createElement('h1');

    if (visitCounter <= 1) {
        title.textContent = `Welcome! Let us know if you have any assistance!`
        localStorage.setItem('lastVisit', currentVisit)
    }
    else if (daysPassed == 0) {
        title.textContent = `Back so soon! Awesome!`
        localStorage.setItem('lastVisit', currentVisit)
    }

    else if (daysPassed == 1) {
        title.textContent = `You last visited ${daysPassed} day ago.`
        localStorage.setItem('lastVisit', currentVisit)
    }

    else {
        title.textContent = `You last visited ${daysPassed} days ago.`
        localStorage.setItem('lastVisit', currentVisit)
    }
    bienvenido.appendChild(title)
    console.log(lastVisit);
    console.log(currentVisit);
    console.log(visitCounter);
}

welcome()