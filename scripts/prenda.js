import navbar from "../modules/navbar.js";
import footer from "../modules/footer.js";
import GetData from '../helpers/getData.js';
import printSelectCard from '../modules/printSelectedCard.js';
import cuadro1 from '../modules/printCuadro1.js';
import cuadro2 from '../modules/printCuadro2.js';
import {productos} from '../helpers/urls.js';

document.addEventListener('DOMContentLoaded', async () => {
    const container = document.querySelector('#main-container');
    const nav = document.querySelector("nav#navbar");
    const foot = document.getElementById("containerFooter");
    const cont2 = document.getElementById("conteSugerencias");
    let id = localStorage.getItem("selected");
    const { data } = await GetData(productos+'/'+id);
    navbar(nav);
    footer(foot);
    printSelectCard(container, data);
    printSuggested(productos, cont2);
})

document.addEventListener('click', ({target})=>{
    if ((target.classList.contains('card-image-top'))||(target.classList.contains('card-body'))||(target.classList.contains('card-title'))||(target.classList.contains('card-text'))) {
        let id = target.id
        localStorage.setItem("selected", id)
        window.location.href = "../pages/prenda.html"
    }
})

document.addEventListener('click', async (e)=>{
    const container = document.querySelector('#main-container');
    let id = localStorage.getItem("selected");
    const { data } = await GetData(productos+'/'+id);
    if (e.target.id === "cuadro-1") {
    cuadro1(container, data);
    }
    if (e.target.id === "cuadro-2") {
    cuadro2(container, data);
    }
    if (e.target.id === "cuadro-3") {
    printSelectCard(container, data);
    }
})

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible [data-close]").click();
  }
});