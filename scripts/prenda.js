import printSuggested from "../modules/printSuggested.js";
import {productos} from "../helpers/urls.js";
import navbar from "../modules/navbar.js";
import footer from "../modules/footer.js";
import GetData from '../helpers/getData.js';
import printSelectCard from '../modules/printSelectedCard.js';


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
