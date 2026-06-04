const openButton1 = document.querySelector("#openButton1");
const dialogBox1 = document.querySelector("#dialogBox1");
const closeButton1 = document.querySelector("#closeButton1");

const openButton2 = document.querySelector("#openButton2");
const dialogBox2 = document.querySelector("#dialogBox2");
const closeButton2 = document.querySelector("#closeButton2");

const openButton3 = document.querySelector("#openButton3");
const dialogBox3 = document.querySelector("#dialogBox3");
const closeButton3 = document.querySelector("#closeButton3");

const openButton4 = document.querySelector("#openButton4");
const dialogBox4 = document.querySelector("#dialogBox4");
const closeButton4 = document.querySelector("#closeButton4");

openButton1.addEventListener("click", () => {
    dialogBox1.showModal();
});
closeButton1.addEventListener("click", () => {
    dialogBox1.close();
});


openButton2.addEventListener("click", () => {
    dialogBox2.showModal();
});
closeButton2.addEventListener("click", () => {
    dialogBox2.close();
});


openButton3.addEventListener("click", () => {
    dialogBox3.showModal();
});
closeButton3.addEventListener("click", () => {
    dialogBox3.close();
});


openButton4.addEventListener("click", () => {
    dialogBox4.showModal();
});
closeButton4.addEventListener("click", () => {
    dialogBox4.close();
});