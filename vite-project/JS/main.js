import coffeeShopMenu from "../products.js";
import "../CSS/style.css"

const menu = DOMSelectors.container

for (i in coffeeShopMenu) {
    menu.insertAdjacentHTML("beforeend", `
        <h1>${item.name}</h1>;
        <img src="${item.image}">
        <p>${item.description}</p>;
        `
    );
}

