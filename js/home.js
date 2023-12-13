'use strict'

const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")
const bebidaContainers = document.querySelectorAll(".container-bebida");


function openModal() {
    modal.showModal();
}


bebidaContainers.forEach((container) => {
    container.onclick = openModal;
});


buttonClose.onclick = function () {
    modal.close();
}
button.onclick = function () {
    modal.showModal()
}

const pizzaImages = document.querySelectorAll(".foto-pizza img")
const bebidaImages = document.querySelectorAll(".container-bebida img")

function openModal() {
    modal.showModal()
}

pizzaImages.forEach((img) => {
    img.onclick = openModal
})

bebidaImages.forEach((img) => {
    img.onclick = openModal
})

buttonClose.onclick = function () {
    modal.close()
}
