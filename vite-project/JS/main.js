import { shopItems } from "../JS/products.js";
import "../CSS/style.css";

const menu = document.querySelector("#container");
const sweetbutton = document.querySelector("#sweetbtn");
const savorybutton = document.querySelector("#savorybtn");
const coffeebutton = document.querySelector("#coffeebtn");
const teabutton = document.querySelector("#teabtn");
const allbtn = document.querySelector("#all");

function intialize() {
  menu.innerHTML = "";
  shopItems.forEach((item) => createCards(item));
}

function createCards(item) {
  menu.insertAdjacentHTML(
    "beforeend",
    `
      <div class="menu-item">
      <img src="${item.image}" class="images">
      <h2>${item.name}</h2>
      <div class="item-properties">
      <p>${item.description}</p>
      <p>Price: $${item.price}</p>
      </div>
  </div>
`
  );
}

//theme toggle button
function switchtheme() {
  //works
  document.querySelector(".themebtn").addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  });
}

function filterSweetItems() {
  sweetbutton.addEventListener("click", function () {
    menu.innerHTML = "";
    const sweetItems = shopItems.filter((item) =>
      item.category.includes("sweet")
    );
    sweetItems.forEach((item) => {
      console.log(item.name);
      createCards(item);
    });
  });
}

function filterSavoryItems() {
  savorybutton.addEventListener("click", function () {
    menu.innerHTML = "";
    const savoryItems = shopItems.filter((item) =>
      item.category.includes("savory")
    );
    savoryItems.forEach((item) => {
      console.log(item.name);
      createCards(item);
    });
  });
}

function filterCoffees() {
  coffeebutton.addEventListener("click", function () {
    menu.innerHTML = "";
    const coffeeItems = shopItems.filter((item) =>
      item.category.includes("coffee")
    );
    coffeeItems.forEach((item) => {
      console.log(item.name);
      createCards(item);
    });
  });
}

function filterTeas() {
  teabutton.addEventListener("click", function () {
    menu.innerHTML = "";
    const teaItems = shopItems.filter((item) => item.category.includes("teas"));
    teaItems.forEach((item) => {
      console.log(item.name);
      createCards(item);
    });
  });
}

function reset() {
  allbtn.addEventListener("click", function () {
    menu.innerHTML = "";
    shopItems.forEach((item) => {
      createCards(item);
    });
  });
}

intialize();
switchtheme();
filterSweetItems();
filterSavoryItems();
filterCoffees();
filterTeas();
reset();