//I used internet for help in https://www.w3schools.com/howto/howto_css_modals.asp
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}