import {ShopMenu} from "../JS/products.js";
import "../CSS/style.css"

const menu = document.querySelector('#container');

function createCards() {
    ShopMenu.forEach((item) => {
        menu.insertAdjacentHTML("beforeend", `
            <div>
            <h1>${item.name}</h1>
            <img src="${item.image}">
            <p>${item.description}</p>
            </div>
        `)
    });
}
createCards();
